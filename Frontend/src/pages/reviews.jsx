import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, ThumbsUp, MessageSquare, Camera, Send, Edit, Trash2, X, Upload, User } from 'lucide-react';
import axios from "axios";
import "./reviews.css";

const Reviews = () => {
    const { listingTitle } = useParams();
    const navigate = useNavigate();

    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [editId, setEditId] = useState(null);
    const [previewPhotos, setPreviewPhotos] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]); // Add selectedFiles state
    const [responses, setResponses] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        fetchReviews();
    }, [listingTitle]);

    // Fetch reviews
    const fetchReviews = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/reviews/${encodeURIComponent(listingTitle)}`);
            setReviews(response.data);

            // Initialize response state for each review
            const initialResponses = {};
            response.data.forEach(review => {
                initialResponses[review._id] = { name: "", comment: "" };
            });
            setResponses(initialResponses);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        } finally {
            setLoading(false);
        }
    };

    // Handle photo upload
    const handlePhotoUpload = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files); // Store File objects
        const previewUrls = files.map(file => URL.createObjectURL(file));
        setPreviewPhotos(previewUrls); // Store preview URLs
    };

    // Handle response input changes
    const handleResponseChange = (reviewId, field, value) => {
        setResponses((prev) => ({
            ...prev,
            [reviewId]: {
                ...prev[reviewId],
                [field]: value
            }
        }));
    };

    // Handle responding to reviews
    const handleRespond = async (reviewId) => {
        const { name, comment } = responses[reviewId];

        if (!name || !comment) {
            alert("Enter both name and response!");
            return;
        }

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/reviews/${reviewId}/respond`, {
                name,
                comment
            });

            // Clear response for this review
            setResponses((prev) => ({
                ...prev,
                [reviewId]: { name: "", comment: "" }
            }));

            fetchReviews();
        } catch (error) {
            console.error("Error responding:", error);
        }
    };

    const handleUpvote = async (reviewId) => {
        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/reviews/${reviewId}/upvote`);
            setReviews((prevReviews) =>
                prevReviews.map((review) =>
                    review._id === reviewId
                        ? { ...review, upvotes: (review.upvotes || 0) + 1 }
                        : review
                )
            );
        } catch (error) {
            console.error("Error upvoting review:", error);
        }
    };

    // Handle review submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (rating === 0) {
            alert("Please select a rating!");
            return;
        }

        const formData = new FormData();
        formData.append("listing", decodeURIComponent(listingTitle));
        formData.append("name", name);
        formData.append("rating", rating);
        formData.append("comment", comment);
        selectedFiles.forEach(file => {
            formData.append("photos", file); // Append files to 'photos' field
        });

        try {
            if (editId) {
                await axios.put(`${import.meta.env.VITE_API_URL}/reviews/${editId}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
                setEditId(null);
            } else {
                await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
            }

            // Reset form
            setName("");
            setRating(0);
            setComment("");
            setPreviewPhotos([]);
            setSelectedFiles([]);
            fetchReviews();
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };

    // Edit Review
    const handleEdit = (review) => {
        setEditId(review._id);
        setName(review.name || "");
        setRating(review.rating);
        setComment(review.comment);
        setPreviewPhotos(review.photos || []); // Show existing photos as previews
        setSelectedFiles([]); // Clear selected files for new uploads
    };

    // Delete Review
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this review?")) {
            try {
                await axios.delete(`${import.meta.env.VITE_API_URL}/reviews/${id}`);
                fetchReviews();
            } catch (error) {
                console.error("Error deleting review:", error);
            }
        }
    };

    // Handle star rating selection
    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    // Get initials for avatar
    const getInitials = (name) => {
        if (!name) return "?";
        return name
            .split(" ")
            .map(word => word[0])
            .join("")
            .toUpperCase()
            .substring(0, 2);
    };

    // Format date
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
    };

    // Render stars for display
    const renderStars = (count) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Star
                    key={i}
                    size={16}
                    fill={i < count ? "#FFD700" : "transparent"}
                    stroke={i < count ? "#FFD700" : "#ccc"}
                />
            );
        }
        return stars;
    };

    // Open photo modal
    const openPhotoModal = (url) => {
        setSelectedPhoto(url);
    };

    // Close photo modal
    const closePhotoModal = () => {
        setSelectedPhoto(null);
    };

    return (
        <div className="reviews-container">
            <h2>Reviews for {decodeURIComponent(listingTitle)}</h2>

            <button className="back-button" onClick={() => navigate(-1)}>
                <ArrowLeft size={18} />
                Back to Package
            </button>

            {/* Review Form */}
            <form onSubmit={handleSubmit} className="review-form" encType="multipart/form-data">
                <h3>{editId ? "Edit Your Review" : "Write a Review"}</h3>

                <div className="form-group">
                    <label>Your Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Enter your name"
                    />
                </div>

                <div className="form-group">
                    <label>Rating</label>
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className={star <= rating ? "active" : ""}
                                onClick={() => handleStarClick(star)}
                            >
                                <Star
                                    size={24}
                                    fill={star <= rating ? "#FFD700" : "transparent"}
                                    stroke={star <= rating ? "#FFD700" : "#ccc"}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label>Your Review</label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                        placeholder="Share your experience with this tour package..."
                    />
                </div>

                <div className="form-group">
                    <label>Photos (Optional)</label>
                    <div className="file-upload">
                        <label className="file-upload-label">
                            <Camera size={20} />
                            <span>Click to upload photos</span>
                            <input
                                type="file"
                                multiple
                                name="photos"
                                onChange={handlePhotoUpload}
                                accept="image/*"
                            />
                        </label>
                    </div>

                    {previewPhotos.length > 0 && (
                        <div className="preview-photos">
                            {previewPhotos.map((photo, index) => (
                                <div key={index} className="preview-photo">
                                    <img src={photo || "/placeholder.svg"} alt={`Preview ${index}`} />
                                    <div
                                        className="remove-photo"
                                        onClick={() => {
                                            const newPreviews = [...previewPhotos];
                                            newPreviews.splice(index, 1);
                                            setPreviewPhotos(newPreviews);

                                            const newFiles = [...selectedFiles];
                                            newFiles.splice(index, 1);
                                            setSelectedFiles(newFiles);
                                        }}
                                    >
                                        <X size={16} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <button type="submit" className="submit-button">
                    {editId ? <Edit size={18} /> : <Upload size={18} />}
                    {editId ? "Update Review" : "Submit Review"}
                </button>
            </form>

            {/* Display Reviews */}
            {loading ? (
                <div className="loading">
                    <div className="loading-spinner"></div>
                </div>
            ) : (
                <div className="reviews-list">
                    {reviews.length > 0 ? (
                        reviews.map((review) => (
                            <div key={review._id} className="review-card">
                                <div className="review-header">
                                    <div className="reviewer-info">
                                        <div className="reviewer-avatar">
                                            {getInitials(review.name)}
                                        </div>
                                        <div>
                                            <div className="reviewer-name">{review.name || "Anonymous"}</div>
                                            <div className="review-date">{formatDate(review.createdAt)}</div>
                                        </div>
                                    </div>

                                    <div className="edit-delete-buttons">
                                        <button className="edit-button" onClick={() => handleEdit(review)}>
                                            <Edit size={16} />
                                            Edit
                                        </button>
                                        <button className="delete-button" onClick={() => handleDelete(review._id)}>
                                            <Trash2 size={16} />
                                            Delete
                                        </button>
                                    </div>
                                </div>

                                <div className="review-rating">
                                    <div className="stars">
                                        {renderStars(review.rating)}
                                    </div>
                                    <span>{review.rating}/5</span>
                                </div>

                                <div className="review-content">
                                    {review.comment}
                                </div>

                                {review.photos?.length > 0 && (
                                    <div className="review-photos">
                                        {review.photos.map((photo, index) => {
                                            const imageUrl = photo.startsWith("http")
                                                ? photo
                                                : `${import.meta.env.VITE_API_URL}${photo}`;

                                            return (
                                                <div
                                                    key={index}
                                                    className="review-photo"
                                                    onClick={() => openPhotoModal(imageUrl)}
                                                >
                                                    <img src={imageUrl || "/placeholder.svg"} alt={`Review ${index}`} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                <div className="actions-bar">
                                    <button
                                        className={`upvote-button ${review.upvoted ? 'active' : ''}`}
                                        onClick={() => handleUpvote(review._id)}
                                    >
                                        <ThumbsUp size={16} />
                                        <span className="upvote-count">{review.upvotes || 0}</span>
                                    </button>
                                </div>

                                {review.responses?.length > 0 && (
                                    <div className="responses-section">
                                        <div className="responses-title">
                                            <MessageSquare size={16} />
                                            Responses
                                        </div>

                                        {review.responses.map((resp, index) => (
                                            <div key={index} className="response-item">
                                                <div className="response-header">
                                                    <User size={14} />
                                                    <span className="response-name">{resp.name}</span>
                                                </div>
                                                <div className="response-content">
                                                    {resp.comment}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="response-form">
                                    <div className="responses-title">
                                        <MessageSquare size={16} />
                                        Add Response
                                    </div>
                                    <div className="response-inputs">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            value={responses[review._id]?.name || ""}
                                            onChange={(e) => handleResponseChange(review._id, "name", e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Your Response"
                                            value={responses[review._id]?.comment || ""}
                                            onChange={(e) => handleResponseChange(review._id, "comment", e.target.value)}
                                        />
                                    </div>
                                    <button
                                        className="respond-button"
                                        onClick={() => handleRespond(review._id)}
                                    >
                                        <Send size={16} />
                                        Respond
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="empty-state">
                            <img
                                src="/placeholder.svg?height=200&width=200"
                                alt="No reviews"
                            />
                            <h3>No Reviews Yet</h3>
                            <p>Be the first to share your experience with this tour package!</p>
                        </div>
                    )}
                </div>
            )}

            {/* Photo Modal */}
            <div className={`photo-modal ${selectedPhoto ? 'active' : ''}`} onClick={closePhotoModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    {selectedPhoto && <img src={selectedPhoto || "/placeholder.svg"} alt="Full size" />}
                    <button className="close-modal" onClick={closePhotoModal}>
                        <X size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reviews;