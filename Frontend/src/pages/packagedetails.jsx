import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, Clock, Route, DollarSign, Info } from 'lucide-react';
import "./packagedetails.css";

const PackageDetails = () => {
    const navigate = useNavigate();
    const [packageDetails, setPackageDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    // ✅ Correct way to get query parameters
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const title = queryParams.get("title");

    useEffect(() => {
        const fetchPackageDetails = async () => {
            if (!title) return; // Prevent fetch if title is missing

            try {
                setLoading(true);
                const res = await fetch(`${process.env.API_URL}/listings/packagedetails?title=${encodeURIComponent(title)}`);

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const data = await res.json();

                if (data.length > 0) {
                    setPackageDetails(data[0]);
                } else {
                    setPackageDetails(null);
                }
            } catch (error) {
                console.error("Error fetching package details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPackageDetails();
    }, [title]);

    if (loading) {
        return (
            <div className="package-details-container" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="loading-spinner"></div>
                <p style={{ marginLeft: "15px" }}>Loading package details...</p>
            </div>
        );
    }

    if (!packageDetails) {
        return (
            <div className="package-details-container" style={{ textAlign: "center", padding: "50px 20px" }}>
                <h2>Package Not Found</h2>
                <p>We couldn't find the package you're looking for.</p>
                <button onClick={() => navigate("/packages")}>
                    Browse All Packages
                </button>
            </div>
        );
    }

    return (
        <div className="package-details-container">
            <h2>{packageDetails.title}</h2>

            <img 
                src={packageDetails.image || "/placeholder.svg"} 
                alt={packageDetails.title} 
                className="package-image" 
            />

            <div className="package-info-grid">
                <div className="info-item">
                    <div className="info-icon">
                        <Info size={20} />
                    </div>
                    <div className="info-content">
                        <div className="info-label">Package Type</div>
                        <div className="info-value">{packageDetails.type}</div>
                    </div>
                </div>

                <div className="info-item">
                    <div className="info-icon">
                        <Clock size={20} />
                    </div>
                    <div className="info-content">
                        <div className="info-label">Duration</div>
                        <div className="info-value">{packageDetails.duration}</div>
                    </div>
                </div>

                <div className="info-item">
                    <div className="info-icon">
                        <Route size={20} />
                    </div>
                    <div className="info-content">
                        <div className="info-label">Route</div>
                        <div className="info-value">{packageDetails.route}</div>
                    </div>
                </div>

                <div className="info-item">
                    <div className="info-icon">
                        <MapPin size={20} />
                    </div>
                    <div className="info-content">
                        <div className="info-label">Destination</div>
                        <div className="info-value">{packageDetails.place || "Various Locations"}</div>
                    </div>
                </div>
            </div>

            <div className="price-container">
                <span className="price-label">Package Price:</span>
                <span className="price-value">₹{packageDetails.price.toLocaleString()}</span>
                <span className="price-per-person">per person</span>
            </div>

            <button onClick={() => navigate(`/payment/${packageDetails._id}`, { state: packageDetails })}>
                Book Now
            </button>
        </div>
    );
};

export default PackageDetails;
