import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { MapPin, Clock, RouteIcon, Info } from "lucide-react"
import "./place.css"

const Place = () => {
  const { stateName } = useParams()
  const navigate = useNavigate()
  const [places, setPlaces] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${import.meta.env.VITE_API_URL}/listings/place?name=${stateName}`)
        const data = await response.json()
        setPlaces(data)
      } catch (error) {
        console.error("Error fetching places:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchPlaces()
  }, [stateName])

  // Redirect to Payment Page
  const handleBookNow = (place) => {
    navigate(`/payment/${encodeURIComponent(place.title)}`, { state: place })
  }

  // Navigate to Reviews Page
  const handleViewReviews = (placeTitle) => {
    navigate(`/reviews/${encodeURIComponent(placeTitle)}`)
  }

  const handleViewDetails = (place) => {
    // Encode the title to handle spaces and special characters
    const encodedTitle = encodeURIComponent(place.title)
    navigate(`/packagedetails?title=${encodedTitle}`)
  }

  if (loading) {
    return (
      <div className="place-container">
        <h2>Tour Packages for {stateName}</h2>
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="place-container">
      <h2>Tour Packages for {stateName}</h2>

      {places.length > 0 ? (
        <div className="places-grid">
          {places.map((place, index) => (
            <div key={place._id} className="place-card" style={{ "--animation-order": index }}>
              <div className="image-container">
                <img
                  src={place.image || "/placeholder.svg?height=220&width=400"}
                  alt={place.title}
                  className="place-image"
                />
                <div className="price-tag">₹{place.price.toLocaleString()}</div>
              </div>

              <div className="place-card-content">
                <h3>{place.title}</h3>

                <div className="place-info-grid">
                  <div className="info-row">
                    <div className="info-item">
                      <div className="info-icon">
                        <Info size={16} />
                      </div>
                      <div className="info-content">
                        <div className="info-label">Type:</div>
                        <div className="info-value">{place.type}</div>
                      </div>
                    </div>

                    <div className="info-item">
                      <div className="info-icon">
                        <Clock size={16} />
                      </div>
                      <div className="info-content">
                        <div className="info-label">Duration:</div>
                        <div className="info-value">{place.duration}</div>
                      </div>
                    </div>
                  </div>

                  <div className="info-row route-row">
                    <div className="info-item full-width">
                      <div className="info-icon">
                        <RouteIcon size={16} />
                      </div>
                      <div className="info-content">
                        <div className="info-label">Route:</div>
                        <div className="info-value">{place.route}</div>
                      </div>
                    </div>
                  </div>

                  <div className="info-row">
                    <div className="info-item full-width">
                      <div className="info-icon">
                        <MapPin size={16} />
                      </div>
                      <div className="info-content">
                        <div className="info-label">Destination:</div>
                        <div className="info-value">{place.place || stateName}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="action-buttons">
                  <button className="book-now-btn" onClick={() => handleBookNow(place)}>
                    Book Now
                  </button>
                  <div className="secondary-buttons">
                    <button onClick={() => handleViewReviews(place.title)}>View Reviews</button>
                    <button onClick={() => handleViewDetails(place)}>View Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <img src="/placeholder.svg?height=200&width=200" alt="No packages found" />
          <h3>No Tour Packages Found</h3>
          <p>We couldn't find any tour packages for {stateName} at the moment.</p>
          <button className="reset-search-btn" onClick={() => navigate("/packages")}>
            Browse All Packages
          </button>
        </div>
      )}
    </div>
  )
}

export default Place
