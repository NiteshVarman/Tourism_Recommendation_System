import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./place.css";

const Place = () => {
    const { stateName } = useParams();
    const navigate = useNavigate();
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await fetch(`http://localhost:8080/place?name=${stateName}`);
                const data = await response.json();
                setPlaces(data);
            } catch (error) {
                console.error("Error fetching places:", error);
            }
        };
        fetchPlaces();
    }, [stateName]);

    // Redirect to Payment Page
    const handleBookNow = (place) => {
        navigate(`/payment/${place._id}`, { state: place });
    };

    return (
        <div className="place-container">
            <h2>Tour Packages for {stateName}</h2>
            <div className="places-list">
                {places.length > 0 ? (
                    places.map((place) => (
                        <div key={place._id} className="place-card">
                            <img src={place.image} alt={place.title} className="place-image" />
                            <h3>{place.title}</h3>
                            <p>Type: {place.type}</p>
                            <p>Duration: {place.duration}</p>
                            <p>Route: {place.route}</p>
                            <p>Price: ₹{place.price}</p>
                            <button onClick={() => handleBookNow(place)}>Book Now</button>
                        </div>
                    ))
                ) : (
                    <p>No tour packages found.</p>
                )}
            </div>
        </div>
    );
};

export default Place;
