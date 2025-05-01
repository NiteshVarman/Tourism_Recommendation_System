"use client"

import { useState, useEffect } from "react"
import { Camera, Upload } from "lucide-react"
import "./profile.css"

const Profile = () => {
  const [name, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [profileImage, setProfileImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true)
      const token = localStorage.getItem("token")
      if (!token) {
        console.error("No token found, please log in.")
        setIsLoading(false)
        return
      }

      try {
        const response = await fetch("http://127.0.0.1:8080/users/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })

        if (!response.ok) {
          throw new Error("Failed to fetch profile")
        }

        const data = await response.json()
        setUsername(data.name)
        setEmail(data.email)

        // Check if image path is relative or full URL
        if (data.profileImage) {
          const imageUrl = data.profileImage.startsWith("http")
            ? data.profileImage
            : `http://127.0.0.1:8080${data.profileImage}`

          setProfileImage(imageUrl)
        }
      } catch (error) {
        console.error("Error fetching profile:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfile()
  }, [])

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setPreviewImage(URL.createObjectURL(file))
    }
  }

  const handleUpload = async () => {
    const fileInput = document.querySelector("#profileImage")
    if (!fileInput.files[0]) {
      alert("Please select an image first.")
      return
    }

    const formData = new FormData()
    formData.append("image", fileInput.files[0])

    const token = localStorage.getItem("token")
    try {
      setIsLoading(true)
      const response = await fetch("http://127.0.0.1:8080/users/upload-profile-image", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to upload image")
      }

      const data = await response.json()

      // Update the profile image with the full URL
      const uploadedImageUrl = data.imageUrl.startsWith("http")
        ? data.imageUrl
        : `http://127.0.0.1:8080${data.imageUrl}`

      setProfileImage(uploadedImageUrl)
      alert("Profile picture updated successfully!")
    } catch (error) {
      console.error("Error uploading image:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <div className="loading-container">Loading profile...</div>
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image-container">
          <div className="profile-image-wrapper">
            {profileImage || previewImage ? (
              <img src={previewImage || profileImage} alt="Profile" className="profile-image" />
            ) : (
              <div className="profile-image-placeholder">{name ? name.charAt(0).toUpperCase() : "G"}</div>
            )}
            <label htmlFor="profileImage" className="image-upload-overlay">
              <Camera size={24} />
            </label>
          </div>
          <input type="file" id="profileImage" accept="image/*" onChange={handleFileChange} className="file-input" />
        </div>
        <h1 className="profile-name">{name ? name : "Guest"}</h1>
        <p className="profile-email">{email || "No email available"}</p>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h2 className="section-title">Profile Information</h2>
          <div className="info-item">
            <span className="info-label">Name:</span>
            <span className="info-value">{name || "Not set"}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">{email || "Not set"}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile

