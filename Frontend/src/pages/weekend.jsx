import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./place.css";

const WeekendListings = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();  // For navigation

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await fetch("http://localhost:8080/listings/weekend");
                const data = await response.json();
                console.log("Data received:", data);
                setListings(data);
            } catch (error) {
                console.error("Error fetching weekend listings:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchListings();
    }, []);

    // Redirect to Payment Page with the selected listing
    const handleBookNow = (listing) => {
        navigate(`/payment/${listing._id}`, { state: listing });
    };

    return (
        <div className="place-container">
            <h2>Weekend Tour Packages</h2>
            {loading ? (
                <p>Loading...</p>
            ) : listings.length > 0 ? (
                <div className="places-list">
                    {listings.map((listing) => (
                        <div key={listing._id} className="place-card">
                            <img src={listing.image} alt={listing.title} className="place-image" />
                            <h3>{listing.title}</h3>
                            <p>Place: {listing.place}</p>
                            <p>Route: {listing.route}</p>
                            <p>Duration: {listing.duration}</p>
                            <p>Price: ₹{listing.price}</p>
                            <button onClick={() => handleBookNow(listing)}>Book Now</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No Weekend tour packages available.</p>
            )}
        </div>
    );
};

export default WeekendListings;
