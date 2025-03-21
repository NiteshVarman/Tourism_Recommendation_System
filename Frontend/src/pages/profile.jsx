import { useState, useEffect } from "react";

const Profile = () => {
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("No token found, please log in.");
                return;
            }

            try {
                const response = await fetch("http://127.0.0.1:8080/profile", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch profile");
                }

                const data = await response.json();
                setUsername(data.name);
                setEmail(data.email);

                // ✅ Check if image path is relative or full URL
                if (data.profileImage) {
                    const imageUrl = data.profileImage.startsWith("http")
                        ? data.profileImage
                        : `http://127.0.0.1:8080${data.profileImage}`;
                    
                    setProfileImage(imageUrl);
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        fetchProfile();
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleUpload = async () => {
        const fileInput = document.querySelector("#profileImage");
        if (!fileInput.files[0]) {
            alert("Please select an image first.");
            return;
        }

        const formData = new FormData();
        formData.append("image", fileInput.files[0]);

        const token = localStorage.getItem("token");
        try {
            const response = await fetch("http://127.0.0.1:8080/upload-profile-image", {
                method: "POST",
                headers: { "Authorization": `Bearer ${token}` },
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to upload image");
            }

            const data = await response.json();
            alert("Profile picture updated successfully!");

            // ✅ Update the profile image with the full URL
            const uploadedImageUrl = data.imageUrl.startsWith("http")
                ? data.imageUrl
                : `http://127.0.0.1:8080${data.imageUrl}`;

            setProfileImage(uploadedImageUrl);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    return (
        <div>
            <h1 style={{ color: "black" }}>Hello, {name ? name.toUpperCase() : "Guest"}!</h1>
            
            <div>
                {profileImage ? (
                    <img 
                        src={previewImage || profileImage} 
                        alt="Profile" 
                        style={{ width: "150px", height: "150px", borderRadius: "50%" }} 
                    />
                ) : (
                    <p>No profile picture uploaded</p>
                )}
            </div>

            <input type="file" id="profileImage" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Profile Picture</button>

            <div style={{ marginTop: "20px" }}>
                <h3>Email:</h3>
                <p>{email || "No email available"}</p>
            </div>
        </div>
    );
};

export default Profile;
