import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Clock, RouteIcon, DollarSign, Star, Info } from 'lucide-react';
import "./place.css";

const Place = () => {
    const { stateName } = useParams();
    const navigate = useNavigate();
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:8080/listings/place?name=${stateName}`);
                const data = await response.json();
                setPlaces(data);
            } catch (error) {
                console.error("Error fetching places:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPlaces();
    }, [stateName]);

    // Redirect to Payment Page
    const handleBookNow = (place) => {
        navigate(`/payment/${place._id}`, { state: place });
    };

    // Navigate to Reviews Page
    const handleViewReviews = (placeId) => {
        navigate(`/reviews/${placeId}`);
    };

    const handleViewDetails = (place) => {
        // Encode the title to handle spaces and special characters
        const encodedTitle = encodeURIComponent(place.title);
        navigate(`/packagedetails?title=${encodedTitle}`);
    };

    if (loading) {
        return (
            <div className="place-container">
                <h2>Tour Packages for {stateName}</h2>
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="place-container">
            <h2>Tour Packages for {stateName}</h2>
            
            {places.length > 0 ? (
                <div className="places-list">
                    {places.map((place, index) => (
                        <div 
                            key={place._id} 
                            className="place-card"
                            style={{ "--animation-order": index }}
                        >
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
                                
                                <div className="place-details">
                                    <div className="detail-item">
                                        <div className="detail-icon">
                                            <Info size={16} />
                                        </div>
                                        <div className="detail-text">
                                            <strong>Type:</strong> {place.type}
                                        </div>
                                    </div>
                                    
                                    <div className="detail-item">
                                        <div className="detail-icon">
                                            <Clock size={16} />
                                        </div>
                                        <div className="detail-text">
                                            <strong>Duration:</strong> {place.duration}
                                        </div>
                                    </div>
                                    
                                    <div className="detail-item">
                                        <div className="detail-icon">
                                            <RouteIcon size={16} />
                                        </div>
                                        <div className="detail-text">
                                            <strong>Route:</strong> {place.route}
                                        </div>
                                    </div>
                                    
                                    <div className="detail-item">
                                        <div className="detail-icon">
                                            <MapPin size={16} />
                                        </div>
                                        <div className="detail-text">
                                            <strong>Destination:</strong> {place.place || stateName}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="btn-group">
                                    <button onClick={() => handleBookNow(place)}>Book Now</button>
                                    <button onClick={() => handleViewReviews(place._id)}>View Reviews</button>
                                    <button onClick={() => handleViewDetails(place)}>View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <img 
                        src="/placeholder.svg?height=200&width=200" 
                        alt="No packages found" 
                    />
                    <h3>No Tour Packages Found</h3>
                    <p>We couldn't find any tour packages for {stateName} at the moment.</p>
                    <button 
                        className="reset-search-btn"
                        onClick={() => navigate("/packages")}
                    >
                        Browse All Packages
                    </button>
                </div>
            )}
        </div>
    );
};

export default Place;