import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import "./packageDetails.css";

const PackageDetails = () => {
    const { stateName, title } = useParams();
    const navigate = useNavigate();
    const [packageDetails, setPackageDetails] = useState(null);

    useEffect(() => {
        const fetchPackageDetails = async () => {
            try {
                const res = await fetch(`http://localhost:8080/packagedetails?title=${encodeURIComponent(title)}`);
                
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                
                const data = await res.json();  // Use "res" instead of "response"
    
                if (data.length > 0) {
                    setPackageDetails(data[0]); // Assuming the API returns an array
                } else {
                    setPackageDetails(null);
                }
            } catch (error) {
                console.error("Error fetching package details:", error);
            }
        };
    
        fetchPackageDetails();
    }, [title]);
    

    if (!packageDetails) {
        return <p>Loading package details...</p>;
    }

    return (
        <div className="package-details-container">
            <h2>{packageDetails.title}</h2>
            <img src={packageDetails.image} alt={packageDetails.title} className="package-image" />
            <p><strong>Type:</strong> {packageDetails.type}</p>
            <p><strong>Duration:</strong> {packageDetails.duration}</p>
            <p><strong>Route:</strong> {packageDetails.route}</p>
            <p><strong>Price:</strong> ₹{packageDetails.price}</p>
            <p><strong>Description:</strong> {packageDetails.description}</p>

            <button onClick={() => navigate(`/payment/${packageDetails._id}`, { state: packageDetails })}>
                Book Now
            </button>
        </div>
    );
};

export default PackageDetails;
