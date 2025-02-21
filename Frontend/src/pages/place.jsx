import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./place.css";

const Place = () => {
    const { stateName } = useParams();
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
                            <p>Price: ₹{place.price}</p>
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
