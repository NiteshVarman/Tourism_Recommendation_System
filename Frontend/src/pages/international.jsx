import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Clock, RouteIcon, DollarSign, Star, Info } from 'lucide-react';
import "./place.css";

const InternationalListings = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchListings = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${import.meta.env.VITE_API_URL}/listings/international`);
                const data = await response.json();
                setListings(data);
            } catch (error) {
                console.error("Error fetching international listings:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchListings();
    }, []);

    // Redirect to Payment Page
    const handleBookNow = (listing) => {
        navigate(`/payment/${encodeURIComponent(listing.title)}`, { state: listing });
    };

    // Navigate to Reviews Page
    const handleViewReviews = (placeId) => {
        navigate(`/reviews/${encodeURIComponent(placeTitle)}`);
    };

    const handleViewDetails = (place) => {
        // Encode the title to handle spaces and special characters
        const encodedTitle = encodeURIComponent(place.title);
        navigate(`/packagedetails?title=${encodedTitle}`);
    };
    

    if (loading) {
        return (
            <div className="place-container">
                <h2>International Tour Packages</h2>
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="place-container">
            <h2>International Tour Packages</h2>
            
            {listings.length > 0 ? (
                <div className="places-list">
                    {listings.map((listing, index) => (
                        <div 
                            key={listing._id} 
                            className="place-card"
                            style={{ "--animation-order": index }}
                        >
                            <div className="image-container">
                                <img 
                                    src={listing.image || "/placeholder.svg?height=220&width=400"} 
                                    alt={listing.title} 
                                    className="place-image" 
                                />
                                <div className="price-tag">₹{listing.price.toLocaleString()}</div>
                            </div>
                            
                            <div className="place-card-content">
                                <h3>{listing.title}</h3>
                                
                                <div className="place-details">
                                    <div className="detail-item">
                                        <div className="detail-icon">
                                            <Info size={16} />
                                        </div>
                                        <div className="detail-text">
                                            <strong>Type:</strong> {listing.type || "International"}
                                        </div>
                                    </div>
                                    
                                    <div className="detail-item">
                                        <div className="detail-icon">
                                            <Clock size={16} />
                                        </div>
                                        <div className="detail-text">
                                            <strong>Duration:</strong> {listing.duration}
                                        </div>
                                    </div>
                                    
                                    <div className="detail-item">
                                        <div className="detail-icon">
                                            <RouteIcon size={16} />
                                        </div>
                                        <div className="detail-text">
                                            <strong>Route:</strong> {listing.route}
                                        </div>
                                    </div>
                                    
                                    <div className="detail-item">
                                        <div className="detail-icon">
                                            <MapPin size={16} />
                                        </div>
                                        <div className="detail-text">
                                            <strong>Destination:</strong> {listing.place}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="btn-group">
                                    <button onClick={() => handleBookNow(listing)}>Book Now</button>
                                    <button onClick={() => handleViewReviews(place.title)}>View Reviews</button>
                                    <button onClick={() => handleViewDetails(listing)}>View Details</button>
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
                    <h3>No International Packages Found</h3>
                    <p>We couldn't find any international tour packages at the moment.</p>
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

export default InternationalListings;