"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { Loader, Locate, Search, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Custom pin icon
const pinIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

// Custom attraction icon with orange color
const attractionIcon = L.icon({
  iconUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
  iconRetinaUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const RecenterMap = ({ position }) => {
  const map = useMap()
  const [showIcon, setShowIcon] = useState(false)

  useEffect(() => {
    const checkCenter = () => {
      const center = map.getCenter()
      const distance = map.distance(center, position)
      setShowIcon(distance > 100)
    }

    map.on("moveend", checkCenter)
    return () => {
      map.off("moveend", checkCenter)
    }
  }, [map, position])

  const recenter = () => {
    map.setView(position, 13)
    setShowIcon(false)
  }

  return showIcon ? (
    <button onClick={recenter} className="recenter-button" title="Return to Current Location">
      <Locate size={24} />
    </button>
  ) : null
}

const MapComponent = ({ setLocation, packages = [] }) => {
  const [position, setPosition] = useState(null)
  const [locationName, setLocationName] = useState("Fetching location...")
  const [error, setError] = useState(null)
  const [attractions, setAttractions] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const mapRef = useRef(null)
  const searchRef = useRef(null)

  const getLocation = useCallback(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords
          setPosition([latitude, longitude])
          setLocation({ latitude, longitude })
          setError(null)
          await fetchLocationName(latitude, longitude)
        },
        (err) => {
          console.error("Geolocation Error:", err)
          setError(err.message)
          setLocationName("Unable to fetch location")
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
      )
    } else {
      setError("Geolocation is not supported by your browser")
      setLocationName("Geolocation not supported")
    }
  }, [setLocation])

  const fetchLocationName = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&zoom=10`,
      )
      const data = await response.json()
      setLocationName(data.display_name || "Unknown Location")
      fetchAttractions(lat, lon)
    } catch (err) {
      console.error("Error fetching location:", err)
      setLocationName("Unable to fetch location name")
    }
  }

  const fetchAttractions = async (lat, lon) => {
    const query = `
      [out:json];
      (
        node(around:50000, ${lat}, ${lon})["tourism"="attraction"];
        node(around:50000, ${lat}, ${lon})["tourism"="museum"];
        node(around:50000, ${lat}, ${lon})["tourism"="theme_park"];
        node(around:50000, ${lat}, ${lon})["tourism"="viewpoint"];
        node(around:50000, ${lat}, ${lon})["tourism"="zoo"];
      );
      out;
    `

    try {
      const response = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: query,
      })
      const data = await response.json()
      const namedAttractions = data.elements
        .filter((place) => place.tags.name && place.tags.name !== "Unnamed Attraction")
        .map((place) => {
          const userLatLng = L.latLng(lat, lon)
          const attractionLatLng = L.latLng(place.lat, place.lon)
          const distance = userLatLng.distanceTo(attractionLatLng) / 1000 // Convert to kilometers
          return {
            id: place.id,
            name: place.tags.name,
            lat: place.lat,
            lon: place.lon,
            state: extractStateFromLocation(place.tags.name, lat, lon),
            distance: distance.toFixed(2), // Distance in kilometers, rounded to 2 decimal places
          }
        })
      setAttractions(namedAttractions)
    } catch (error) {
      console.error("Error fetching attractions:", error)
      setAttractions([])
    }
  }

  const extractStateFromLocation = (name, lat, lon) => {
    const stateFromLocation = locationName.split(", ").find((part) => part.match(/^[A-Z][a-z]+$/))
    return stateFromLocation || "Unknown"
  }

  const getPackagesForState = (state) => {
    return packages.filter((pkg) => pkg.place.toLowerCase() === state.toLowerCase())
  }

  const fetchSuggestions = async (query) => {
    if (!query.trim()) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=5`,
      )
      const data = await response.json()
      setSuggestions(data)
      setShowSuggestions(true)
    } catch (err) {
      console.error("Error fetching suggestions:", err)
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSearch = async (lat, lon, displayName) => {
    const newPosition = [Number.parseFloat(lat), Number.parseFloat(lon)]
    setPosition(newPosition)
    setLocation({ latitude: Number.parseFloat(lat), longitude: Number.parseFloat(lon) })
    setLocationName(displayName)
    setError(null)
    setSearchQuery(displayName)
    setShowSuggestions(false)
    fetchAttractions(Number.parseFloat(lat), Number.parseFloat(lon))
    if (mapRef.current) {
      mapRef.current.setView(newPosition, 13)
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    fetchSuggestions(value)
  }

  useEffect(() => {
    getLocation()

    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [getLocation])

  return (
    <div className="map-container">
      <div className="location-header">
        <div className="location-name">
          <MapPin size={18} />
          <strong>Current Location:</strong> {locationName}
        </div>
        <div className="search-bar-container" ref={searchRef}>
          <div className="search-bar">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Enter a location..."
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={() => setShowSuggestions(true)}
            />
            <button
              onClick={() =>
                suggestions.length > 0 &&
                handleSearch(suggestions[0].lat, suggestions[0].lon, suggestions[0].display_name)
              }
              className="search-button"
            >
              Search
            </button>
          </div>

          <AnimatePresence>
            {showSuggestions && suggestions.length > 0 && (
              <motion.div
                className="suggestions-dropdown"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {suggestions.map((suggestion) => (
                  <div
                    key={suggestion.place_id}
                    className="suggestion-item"
                    onClick={() => handleSearch(suggestion.lat, suggestion.lon, suggestion.display_name)}
                  >
                    <Search size={14} className="suggestion-icon" />
                    <span>{suggestion.display_name}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {error && (
        <div className="map-error">
          <p>{error}</p>
          <button onClick={getLocation}>Try Current Location Again</button>
        </div>
      )}

      {position ? (
        <MapContainer
          center={position}
          zoom={8}
          style={{ height: "400px", width: "100%" }}
          whenCreated={(map) => {
            mapRef.current = map
            map.setView(position, 8)
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={position} icon={pinIcon}>
            <Popup>
              <div className="popup-content">
                <strong>Your Location</strong>
                <p>{locationName}</p>
              </div>
            </Popup>
          </Marker>
          <RecenterMap position={position} />
          {attractions.map((attraction) => (
            <Marker key={attraction.id} position={[attraction.lat, attraction.lon]} icon={attractionIcon}>
              <Popup>
                <div className="popup-content">
                  <strong>{attraction.name}</strong>
                  <p>{attraction.distance} km from your location</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : (
        <div className="map-loading">
          <p>Fetching your location...</p>
          <Loader className="spinner" size={24} />
        </div>
      )}

      <div className="attractions-list">
        <h3>
          Nearby Tourist Attractions <span className="attractions-subtitle">(within 50km)</span>
        </h3>
        {attractions.length > 0 ? (
          <ul>
            {attractions.map((place) => {
              const relatedPackages = getPackagesForState(place.state)
              return (
                <li key={place.id} className="attraction-item">
                  <div className="attraction-details">
                    <strong>{place.name}</strong> - <span className="distance-badge">{place.distance} km</span> from
                    your location
                  </div>
                  {relatedPackages.length > 0 && (
                    <div className="related-packages">
                      <h4>Packages in {place.state}:</h4>
                      <ul>
                        {relatedPackages.map((pkg) => (
                          <li key={pkg._id} className="package-item">
                            <strong>{pkg.title}</strong> - ₹{pkg.price.toLocaleString()} ({pkg.duration})
                            <button className="more-info-button">View</button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        ) : (
          <div className="no-attractions">
            <p>No named tourist attractions found nearby.</p>
            <p>Try searching for a different location or expanding your search radius.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MapComponent

