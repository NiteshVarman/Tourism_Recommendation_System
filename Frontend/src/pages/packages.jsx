"use client"

import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, Clock, MapPin, Calendar, DollarSign, Star, ChevronDown } from 'lucide-react'
import MapComponent from "./map"
import "./packages.css"

const PackagesPage = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([])
  const [filteredPackages, setFilteredPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchHistory, setSearchHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [sortOption, setSortOption] = useState("recommended")
  const [showSortOptions, setShowSortOptions] = useState(false)
  const [nearbyPackages, setNearbyPackages] = useState([])
  const [userLocation, setUserLocation] = useState(null)
  const [userState, setUserState] = useState(null)

  const wrapperRef = useRef(null)
  const sortRef = useRef(null)

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${process.env.REACT_APP_API_URL}/listings/`, {
          headers: { Accept: "application/json" },
          timeout: 10000,
        })
        if (!response.ok) throw new Error("Failed to fetch packages")
        const data = await response.json()
        setPackages(data)
        setFilteredPackages(data)
      } catch (error) {
        console.error("Error fetching packages:", error)
      } finally {
        setTimeout(() => setLoading(false), 800)
      }
    }

    fetchPackages()

    const history = JSON.parse(localStorage.getItem("searchHistory")) || []
    setSearchHistory(history)

    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowHistory(false)
      }
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setShowSortOptions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (userLocation && packages.length > 0) {
      const fetchUserState = async () => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${userLocation.latitude}&lon=${userLocation.longitude}&format=json&zoom=5`,
          )
          const data = await response.json()
          const state = data.address.state || data.address.region || "Unknown"
          setUserState(state)

          const filtered = packages.filter((pkg) => pkg.place.toLowerCase() === state.toLowerCase())
          setNearbyPackages(filtered)
        } catch (error) {
          console.error("Error fetching user state:", error)
          setUserState("Unknown")
          setNearbyPackages([])
        }
      }

      fetchUserState()
    }
  }, [userLocation, packages])

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase()
    setSearchTerm(value)
    filterPackages(value, activeFilter)
  }

  const filterPackages = (search, filter) => {
    let filtered = packages.filter(
      (pkg) =>
        pkg.title.toLowerCase().includes(search.toLowerCase()) ||
        pkg.place.toLowerCase().includes(search.toLowerCase()),
    )

    if (filter !== "all") {
      filtered = filtered.filter((pkg) => pkg.type.toLowerCase().includes(filter.toLowerCase()))
    }

    filtered = sortPackages(filtered, sortOption)
    setFilteredPackages(filtered)
  }

  const sortPackages = (pkgs, option) => {
    switch (option) {
      case "price-low":
        return [...pkgs].sort((a, b) => a.price - b.price)
      case "price-high":
        return [...pkgs].sort((a, b) => b.price - a.price)
      case "duration-short":
        return [...pkgs].sort((a, b) => Number.parseInt(a.duration) - Number.parseInt(b.duration))
      case "rating":
        return [...pkgs].sort((a, b) => (b.rating || 0) - (a.rating || 0))
      default:
        return pkgs
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchTerm.trim()) {
      if (!searchHistory.includes(searchTerm)) {
        const updatedHistory = [searchTerm, ...searchHistory].slice(0, 5)
        setSearchHistory(updatedHistory)
        localStorage.setItem("searchHistory", JSON.stringify(updatedHistory))
      }
      setShowHistory(false)
    }
  }

  const handleHistoryClick = (term) => {
    setSearchTerm(term)
    filterPackages(term, activeFilter)
    setShowHistory(false)
  }

  const clearHistory = (e) => {
    e.stopPropagation()
    localStorage.removeItem("searchHistory")
    setSearchHistory([])
    setShowHistory(false)
  }

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    filterPackages(searchTerm, filter)
  }

  const handleSortChange = (option) => {
    setSortOption(option)
    const sorted = sortPackages([...filteredPackages], option)
    setFilteredPackages(sorted)
    setShowSortOptions(false)
  }

  const getSortOptionText = (option) => {
    switch (option) {
      case "price-low":
        return "Price: Low to High"
      case "price-high":
        return "Price: High to Low"
      case "duration-short":
        return "Duration: Shortest First"
      case "rating":
        return "Rating: Best First"
      default:
        return "Recommended"
    }
  }

  const categories = [
    { id: "all", name: "All Packages" },
    { id: "india", name: "Domestic" },
    { id: "international", name: "International" },
    { id: "weekend", name: "Weekend" },
    { id: "devotional", name: "Devotional" },
  ]

  if (loading) {
    return (
      <div className="packages-container">
        <div className="packages-header skeleton-header">
          <div className="skeleton-title"></div>
          <div className="skeleton-search"></div>
          <div className="skeleton-filters"></div>
        </div>
        <div className="grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-content">
                <div className="skeleton-line skeleton-title"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="packages-container">
      <motion.div
        className="packages-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Discover Your Dream Destinations</h1>
        <p>Explore our handpicked collection of extraordinary travel experiences tailored just for you</p>

        {/* Display User's Current Location with Map */}
        <div className="location-section">
          <h3>Your Current Location</h3>
          <MapComponent setLocation={setUserLocation} packages={packages} />
        </div>

        {/* Nearby Packages Section */}
        {userLocation && nearbyPackages.length > 0 && (
          <div className="nearby-section">
            <h2 className="section-title">The packages that are available near you are</h2>
            <div className="nearby-grid">
              {nearbyPackages.map((pkg, index) => (
                <motion.div
                  key={`nearby-${pkg._id || index}`}
                  className="package-card nearby-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="card-image-container">
                    <img src={pkg.image || "/placeholder.svg"} alt={pkg.title} />
                    <div className="card-badge">Near You</div>
                  </div>
                  <div className="card-content">
                    <h3>{pkg.title}</h3>
                    <div className="card-details">
                      <div className="detail-item">
                        <MapPin size={16} className="detail-icon" />
                        <span>{pkg.place}</span>
                      </div>
                      <div className="detail-item">
                        <Calendar size={16} className="detail-icon" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="detail-item">
                        <DollarSign size={16} className="detail-icon" />
                        <span>₹{pkg.price.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="card-description">
                      {pkg.description || "Experience an unforgettable journey with our carefully crafted travel package."}
                    </div>
                    <button 
                className="view-details-btn"
                onClick={() => navigate(`/packagedetails?title=${encodeURIComponent(pkg.title)}`)}
              >
                View Details
              </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Search and Filter Section - Moved below header */}
      <div className="search-filter-section">
        <div className="search-bar-container" ref={wrapperRef}>
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search by destination or package name..."
              value={searchTerm}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
              onFocus={() => setShowHistory(true)}
            />
            {searchTerm && (
              <button className="clear-search" onClick={() => {
                setSearchTerm("");
                filterPackages("", activeFilter);
              }}>
                <X size={18} />
              </button>
            )}
          </div>

          <AnimatePresence>
            {showHistory && searchHistory.length > 0 && (
              <motion.div
                className="history-dropdown"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="history-header">
                  <Clock size={14} />
                  <span>Recent Searches</span>
                </div>
                {searchHistory.map((term, index) => (
                  <div
                    key={index}
                    className="history-item"
                    onClick={() => handleHistoryClick(term)}
                  >
                    <Clock size={14} className="history-icon" />
                    <span>{term}</span>
                  </div>
                ))}
                <button onClick={clearHistory} className="clear-history">
                  Clear History
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="filter-container">
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? "active" : ""}`}
                onClick={() => handleFilterChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="sort-container" ref={sortRef}>
            <button
              className="sort-button"
              onClick={() => setShowSortOptions(!showSortOptions)}
            >
              <span>Sort: {getSortOptionText(sortOption)}</span>
              <ChevronDown size={16} className={showSortOptions ? "rotate-180" : ""} />
            </button>

            <AnimatePresence>
              {showSortOptions && (
                <motion.div
                  className="sort-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`sort-option ${sortOption === "recommended" ? "active" : ""}`}
                    onClick={() => handleSortChange("recommended")}
                  >
                    Recommended
                  </div>
                  <div
                    className={`sort-option ${sortOption === "price-low" ? "active" : ""}`}
                    onClick={() => handleSortChange("price-low")}
                  >
                    Price: Low to High
                  </div>
                  <div
                    className={`sort-option ${sortOption === "price-high" ? "active" : ""}`}
                    onClick={() => handleSortChange("price-high")}
                  >
                    Price: High to Low
                  </div>
                  <div
                    className={`sort-option ${sortOption === "duration-short" ? "active" : ""}`}
                    onClick={() => handleSortChange("duration-short")}
                  >
                    Duration: Shortest First
                  </div>
                  <div
                    className={`sort-option ${sortOption === "rating" ? "active" : ""}`}
                    onClick={() => handleSortChange("rating")}
                  >
                    Rating: Best First
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="results-info">
        <span>{filteredPackages.length} packages found</span>
        {searchTerm && <span>for "{searchTerm}"</span>}
        {activeFilter !== "all" && <span>in {categories.find((c) => c.id === activeFilter)?.name}</span>}
      </div>

      {filteredPackages.length > 0 ? (
        <motion.div
          className="grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg._id || index}
              className="package-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="card-image-container">
                <img src={pkg.image || "/placeholder.svg?height=200&width=300"} alt={pkg.title} />
                <div className="card-badge">{pkg.discount ? `${pkg.discount}% OFF` : "Best Seller"}</div>
                {pkg.rating && (
                  <div className="card-rating">
                    <Star size={14} fill="#FFD700" stroke="#FFD700" />
                    <span>{pkg.rating}</span>
                  </div>
                )}
              </div>
              <div className="card-content">
                <h3>{pkg.title}</h3>
                <div className="card-details">
                  <div className="detail-item">
                    <MapPin size={16} className="detail-icon" />
                    <span>{pkg.place}</span>
                  </div>
                  <div className="detail-item">
                    <Calendar size={16} className="detail-icon" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="detail-item">
                    <DollarSign size={16} className="detail-icon" />
                    <span>₹{pkg.price.toLocaleString()}</span>
                  </div>
                </div>
                <div className="card-description">
                  {pkg.description || "Experience an unforgettable journey with our carefully crafted travel package."}
                </div>
                <button 
                className="view-details-btn"
                onClick={() => navigate(`/packagedetails?title=${encodeURIComponent(pkg.title)}`)}
              >
                View Details
              </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/placeholder.svg?height=200&width=200" alt="No results" className="no-results-image" />
          <h3>No packages found</h3>
          <p>Try adjusting your search or filters to find what you're looking for.</p>
          <button
            className="reset-search-btn"
            onClick={() => {
              setSearchTerm("")
              setActiveFilter("all")
              setFilteredPackages(packages)
            }}
          >
            Reset Search
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default PackagesPage