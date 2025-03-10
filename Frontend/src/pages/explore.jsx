import React, { useState } from "react";
import "./explore.css";

const HomePage = () => {
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");
  const [time, setTime] = useState("");
  const [tourPackage, setTourPackage] = useState("");
  const [days, setDays] = useState(1);
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = async () => {
    if (!type || !budget || !time || !tourPackage || !days) {
      alert("Please fill out all fields.");
      return;
    }
  
    const response = await fetch("http://localhost:5000/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_input: [type, budget, time, tourPackage, days] }),
    });
  
    const data = await response.json();
    setRecommendations(data);
  };

  const resetForm = () => {
    setType("");
    setBudget("");
    setTime("");
    setTourPackage("");
    setDays(1);
    setRecommendations([]);
  };

  return (
    <div className="container">
      <h1>Tourism Recommendation System</h1>
      <div className="form-group">
        <label>Type of Tourist Place:</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="e.g., beach, mountain" required />
      </div>
      <div className="form-group">
        <label>Budget:</label>
        <select value={budget} onChange={(e) => setBudget(e.target.value)} required>
          <option value="">Select Budget</option>
          <option value="High">High</option>
          <option value="Moderate">Moderate</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div className="form-group">
        <label>Best Time to Visit:</label>
        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} placeholder="e.g., summer, winter" required />
      </div>
      <div className="form-group">
        <label>Type of Tour Package:</label>
        <select value={tourPackage} onChange={(e) => setTourPackage(e.target.value)} required>
          <option value="">Select Package</option>
          <option value="Family">Family</option>
          <option value="Solo">Solo</option>
          <option value="Friends">Friends</option>
        </select>
      </div>
      <div className="form-group">
        <label>No. of Days Preferred:</label>
        <input type="number" value={days} onChange={(e) => setDays(e.target.value)} min="1" required />
      </div>
      <button className="btn" onClick={getRecommendations}>Get Recommendations</button>
      <button className="btn" onClick={resetForm} style={{ background: "#e74c3c" }}>Reset</button>

      <div id="results">
        <h2>Recommended Places</h2>
        {recommendations.map((place, index) => (
          <div key={index} className="result-item">
            <p><b>{place["Place Name"]}</b></p>
            <p>{place["Type of Tourist Place"]} | {place["Budget"]} | {place["Best Time to Visit"]} | {place["Type of Tour Package"]} | Rating: {place["Rating"]} | Days Preferred: {place["No. of Days Preferred"]}</p>
            {place["Place URL"] ? (
              <a href={place["Place URL"]} target="_blank" rel="noopener noreferrer">View Details</a>
            ) : (
              <span style={{ color: "red", fontWeight: "bold" }}>Details not found</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
