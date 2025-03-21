import React, { useEffect, useState, useRef } from "react";
import "./Packages.css"; // Add some styling

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [filteredPackages, setFilteredPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchHistory, setSearchHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);  // State to control history visibility

    const wrapperRef = useRef(null);  // Ref for outside click detection

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await fetch("http://localhost:8080/packages");
                const data = await response.json();
                setPackages(data);
                setFilteredPackages(data);
            } catch (error) {
                console.error("Error fetching packages:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();

        // Load search history from localStorage
        const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
        setSearchHistory(history);

        // ✅ Handle outside click to close history
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowHistory(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Handle search filtering (no history saved here)
    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        // Filter packages based on the search term
        const filtered = packages.filter((pkg) =>
            pkg.title.toLowerCase().includes(value) ||
            pkg.place.toLowerCase().includes(value)
        );
        setFilteredPackages(filtered);
    };

    // Save search history only when Enter is pressed
    const handleKeyDown = (event) => {
        if (event.key === "Enter" && searchTerm.trim()) {
            if (!searchHistory.includes(searchTerm)) {
                const updatedHistory = [searchTerm, ...searchHistory].slice(0, 5); // Limit to 5 items
                setSearchHistory(updatedHistory);
                localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
            }
            setShowHistory(false);  // Close history after pressing Enter
        }
    };

    // Handle history selection
    const handleHistoryClick = (term) => {
        setSearchTerm(term);
        const filtered = packages.filter((pkg) =>
            pkg.title.toLowerCase().includes(term) ||
            pkg.place.toLowerCase().includes(term)
        );
        setFilteredPackages(filtered);
        setShowHistory(false);  // Close history after selection
    };

    // Clear search history
    const clearHistory = () => {
        localStorage.removeItem("searchHistory");
        setSearchHistory([]);
        setShowHistory(false);
    };

    if (loading) return <div>Loading packages...</div>;

    return (
        <div className="packages-container">
            <h2>All Packages</h2>

            <div className="search-bar" ref={wrapperRef}>
                <input
                    type="text"
                    placeholder="Search by title or location..."
                    value={searchTerm}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setShowHistory(true)}  // Show history only on focus
                />

                {/* Show history only if flag is true */}
                {showHistory && searchHistory.length > 0 && (
                    <div className="history-dropdown">
                        {searchHistory.map((term, index) => (
                            <div
                                key={index}
                                className="history-item"
                                onClick={() => handleHistoryClick(term)}
                            >
                                {term}
                            </div>
                        ))}
                        <button onClick={clearHistory} className="clear-history">
                            Clear History
                        </button>
                    </div>
                )}
            </div>

            <div className="grid">
                {filteredPackages.length > 0 ? (
                    filteredPackages.map((pkg) => (
                        <div key={pkg._id} className="card">
                            <img src={pkg.image} alt={pkg.title} />
                            <div className="card-content">
                                <h3>{pkg.title}</h3>
                                <p><strong>Location:</strong> {pkg.place}</p>
                                <p><strong>Price:</strong> ₹{pkg.price}</p>
                                <p><strong>Duration:</strong> {pkg.duration}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No packages found.</p>
                )}
            </div>
        </div>
    );
};

export default Packages;
