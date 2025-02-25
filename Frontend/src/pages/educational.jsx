import React, { useEffect, useState } from "react";
import "./place.css";

const EducationalListings = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await fetch("http://localhost:8080/listings/educational");
    
                const data = await response.json();
                console.log("Data received:", data);
    
                setListings(data);
            } catch (error) {
                console.error("Error fetching educational listings:", error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchListings();
    }, []);
    

    return (
        <div className="place-container">
            <h2>Educational Tour Packages</h2>
            {loading ? (
                <p>Loading...</p>
            ) : listings.length > 0 ? (
                <div className="places-list">
                    {listings.map((listing) => (
                        <div key={listing._id} className="place-card">
                            <img src={listing.image} alt={listing.title} className="place-image" />
                            
                                <h3>{listing.title}</h3>
                                <p><strong>Place:</strong> {listing.place}</p>
                                <p><strong>Route:</strong> {listing.route}</p>
                                <p><strong>Duration:</strong> {listing.duration}</p>
                                <p><strong>Price:</strong> ₹{listing.price}</p>
                            
                        </div>
                    ))}
                </div>
            ) : (
                <p>No educational tour packages available.</p>
            )}
        </div>
    );
};

export default EducationalListings;
