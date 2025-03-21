import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./reviews.css";

const Reviews = () => {
    const { listingId } = useParams();  // Get listing ID from URL
    const navigate = useNavigate();

    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [photos, setPhotos] = useState([]);
    const [editId, setEditId] = useState(null);
    const [previewPhotos, setPreviewPhotos] = useState([]);
    const [uploadedPhotos, setUploadedPhotos] = useState([]);
    
    // Local response state for each review
    const [responses, setResponses] = useState({});

    useEffect(() => {
        fetchReviews();
    }, [listingId]);

    // Fetch reviews
    const fetchReviews = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/reviews/${listingId}`);
            setReviews(response.data);

            // Initialize response state for each review
            const initialResponses = {};
            response.data.forEach(review => {
                initialResponses[review._id] = { name: "", comment: "" };
            });
            setResponses(initialResponses);
            
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    };

    // Handle photo upload
    const handlePhotoUpload = async (e) => {
        const files = Array.from(e.target.files);

        // Display previews immediately
        const previewUrls = files.map((file) => URL.createObjectURL(file));
        setPreviewPhotos(previewUrls);

        // Upload images to backend
        const uploadedUrls = await Promise.all(
            files.map(async (file) => {
                const formData = new FormData();
                formData.append("image", file);

                try {
                    const response = await axios.post(
                        "http://localhost:8080/upload-review-image",
                        formData,
                        { headers: { "Content-Type": "multipart/form-data" } }
                    );
                    return response.data.imageUrl;
                } catch (error) {
                    console.error("Error uploading image:", error);
                    return null;
                }
            })
        );

        // Store only successful uploads
        setUploadedPhotos(uploadedUrls.filter(url => url));
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
            await axios.post(`http://localhost:8080/reviews/${reviewId}/respond`, {
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
            const response = await axios.put(`http://localhost:8080/reviews/${reviewId}/upvote`);
            
            // Update the upvote count locally to reflect instantly
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

        const reviewData = {
            listing: listingId,
            name,
            rating,
            comment,
            photos: uploadedPhotos
        };

        try {
            if (editId) {
                await axios.put(`http://localhost:8080/reviews/${editId}`, reviewData);
                setEditId(null);
            } else {
                await axios.post("http://localhost:8080/reviews", reviewData);
            }

            // Reset form
            setName("");
            setRating(0);
            setComment("");
            setPhotos([]);
            setPreviewPhotos([]);
            setUploadedPhotos([]);
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
        setPhotos(review.photos);
    };

    // Delete Review
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/reviews/${id}`);
            fetchReviews();
        } catch (error) {
            console.error("Error deleting review:", error);
        }
    };

    return (
        <div className="reviews-container">
            <h2>Reviews for Tour Package</h2>
            <button onClick={() => navigate(-1)}>Back</button>

            {/* Review Form */}
            <form onSubmit={handleSubmit} className="review-form">
                <h3>{editId ? "Edit Review" : "Write a Review"}</h3>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label>Rating:</label>
                    <input 
                        type="number" 
                        min="1" 
                        max="5" 
                        value={rating} 
                        onChange={(e) => setRating(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Comment:</label>
                    <textarea 
                        value={comment} 
                        onChange={(e) => setComment(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Photos:</label>
                    <input 
                        type="file" 
                        multiple 
                        onChange={handlePhotoUpload}
                    />
                    <div className="preview-photos">
                        {previewPhotos.map((photo, index) => (
                            <img key={index} src={photo} alt={`Preview ${index}`} />
                        ))}
                    </div>
                </div>
                <button type="submit">{editId ? "Update" : "Submit"}</button>
            </form>

            {/* Display Reviews */}
            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <div key={review._id} className="review-card">
                        <h3>By: {review.name || "Anonymous"}</h3>
                        <p>Rating: ⭐ {review.rating}/5</p>
                        <p>Comment: {review.comment}</p>
                        <p>Upvotes: 👍 {review.upvotes || 0}</p>

                        <button onClick={() => handleUpvote(review._id)}>Upvote</button>

                        <div className="review-photos">
                            {review.photos?.length > 0 ? (
                                review.photos.map((photo, index) => {
                                    // Ensure full URL is used for image display
                                    const imageUrl = photo.startsWith("http") 
                                        ? photo 
                                        : `http://localhost:8080${photo}`;   // Use full URL for local images

                                    return (
                                        <img key={index} src={imageUrl} alt={`Review ${index}`} />
                                    );
                                })
                            ) : (
                                <p>No photos available</p>
                            )}
                        </div>

                        {review.responses?.length > 0 && (
                            <div>
                                <strong>Responses:</strong>
                                {review.responses.map((resp, index) => (
                                    <p key={index}>
                                        <strong>{resp.name}:</strong> {resp.comment}
                                    </p>
                                ))}
                            </div>
                        )}

                        {/* Response Input */}
                        <div>
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
                            <button onClick={() => handleRespond(review._id)}>Respond</button>
                        </div>

                        <div className="btn-group">
                            <button onClick={() => handleEdit(review)}>Edit</button>
                            <button onClick={() => handleDelete(review._id)}>Delete</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No reviews available.</p>
            )}
        </div>
    );
};

export default Reviews;
