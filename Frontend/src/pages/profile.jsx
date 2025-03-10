import { useState, useEffect } from "react";

const Profile = () => {
    const [name, setUsername] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token"); // Get token from local storage
            if (!token) {
                console.error("No token found, please log in.");
                return;
            }

            try {
                const response = await fetch("http://127.0.0.1:8080/profile", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`, // Correct token format
                        "Content-Type": "application/json",
                    },
                });                

                if (!response.ok) {
                    throw new Error("Failed to fetch profile");
                }

                const data = await response.json();
                console.log("Fetched Profile:", data);
                setUsername(data.name); // Update state with username
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        fetchProfile();
    }, []);

    return (
        <div>
            <h1 style={{ color: "black" }}>Hello, {name ? name.toUpperCase() : "Guest"}!</h1>
        </div>
    );
};

export default Profile;
