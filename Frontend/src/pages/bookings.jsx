import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapPin, Calendar, Clock, Users, DollarSign, CheckCircle, XCircle, Edit, Trash2, CalendarIcon, ArrowRight, Loader } from 'lucide-react';
import "./bookings.css";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [googleSignedIn, setGoogleSignedIn] = useState(false);
    const [editData, setEditData] = useState(null);
    const [jwtToken, setJwtToken] = useState(localStorage.getItem("token") || "");

    useEffect(() => {
        const token = localStorage.getItem("token") || "";
        setJwtToken(token);
        const urlParams = new URLSearchParams(window.location.search);
        const googleToken = urlParams.get("token");
    
        if (googleToken) {
            localStorage.setItem("googleToken", googleToken);
            setGoogleSignedIn(true);
        }
    }, []);
    
    useEffect(() => {
        if (jwtToken) {
            fetchBookings();
        }
    }, [jwtToken]);
    
    const fetchBookings = async () => {
        try {
            if (!jwtToken) {
                setError("User not authenticated");
                setLoading(false);
                return;
            }
    
            const response = await axios.get("http://localhost:8080/bookings/my-bookings", {
                headers: { Authorization: `Bearer ${jwtToken}` },
            });
    
            setBookings(response.data.bookings);
        } catch (err) {
            setError(err.message || "Failed to fetch bookings");
            console.error("Error fetching bookings:", err);
        } finally {
            setLoading(false);
        }
    };
    
    const syncToCalendar = async (booking) => {
        const googleToken = localStorage.getItem("googleToken");
        
        if (!googleToken) {
            alert("Please sign in with Google to sync to your calendar.");
            return;
        }
    
        try {
            await axios.post("http://localhost:8080/auth/google/sync-calendar", 
                { booking },
                { headers: { Authorization: `Bearer ${googleToken}` } }
            );
    
            alert("Booking added to Google Calendar!");
        } catch (error) {
            console.error("Failed to sync to Google Calendar:", error);
            alert("Error syncing booking to Google Calendar.");
        }
    };
    
    const handleGoogleSignIn = () => {
        window.location.href = "http://localhost:8080/auth/google";
    };

    const cancelBooking = async (id) => {
        if (!window.confirm("Are you sure you want to cancel this booking?")) {
            return;
        }
        
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:8080/bookings/cancel/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setBookings(bookings.filter((booking) => booking._id !== id));
        } catch (error) {
            console.error("Failed to cancel booking:", error);
            alert("Failed to cancel booking. Please try again.");
        }
    };

    const openEditModal = (booking) => {
        setEditData({ ...booking });
    };

    const handleEditChange = (e) => {
        if (!editData) return;
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const saveEdit = async () => {
        try {
            const token = localStorage.getItem("token");
            await axios.put(
                `http://localhost:8080/bookings/update/${editData._id}`,
                { guestNames: editData.guestNames, contactNumber: editData.contactNumber },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setBookings(bookings.map((b) => (b._id === editData._id ? editData : b)));
            setEditData(null);
        } catch (error) {
            console.error("Failed to update booking:", error);
            alert("Failed to update booking. Please try again.");
        }
    };

    // Format date for display
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };

    if (loading) {
        return (
            <div className="bookings-container">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p className="loading-text">Loading your bookings...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bookings-container">
                <div className="error-container">
                    <div className="error-icon">⚠️</div>
                    <p className="error-text">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bookings-container">
            <div className="bookings-header">
                <h2 className="bookings-title">My Travel Bookings</h2>
                <p className="bookings-subtitle">Manage all your tour bookings in one place</p>
                
                {!googleSignedIn && (
                    <div className="google-signin">
                        <button
                            onClick={handleGoogleSignIn}
                            className="google-button"
                        >
                            <img 
                            src="https://www.google.com/favicon.ico" 
                            alt="Google" 
                            width={20} 
                            height={20} 
                            />
                            Sign in with Google to sync bookings
                        </button>
                    </div>
                )}
            </div>

            {bookings.length === 0 ? (
                <div className="empty-bookings">
                    <img src="/placeholder.svg?height=200&width=200" alt="No bookings" />
                    <h3>No Bookings Found</h3>
                    <p>You haven't made any bookings yet. Start exploring our tour packages!</p>
                </div>
            ) : (
                <div className="bookings-list">
                    {bookings.map((booking) => (
                        <div key={booking._id} className="booking-item">
                            <h3 className="booking-name">{booking.listing?.title || "Unknown Tour"}</h3>
                            
                            <div className="booking-location">
                                <MapPin size={16} />
                                <span>{booking.listing?.place || "Unknown Location"} | {booking.listing?.type || "Tour"}</span>
                            </div>
                            
                            <div className="booking-details">
                                <div className="detail-item">
                                    <span className="detail-label">Amount</span>
                                    <span className="detail-value">₹{booking.amount}</span>
                                </div>
                                
                                <div className="detail-item">
                                    <span className="detail-label">Date</span>
                                    <span className="detail-value">{formatDate(booking.date)}</span>
                                </div>
                                
                                <div className="detail-item">
                                    <span className="detail-label">Time</span>
                                    <span className="detail-value">{booking.time || "Not specified"}</span>
                                </div>
                                
                                <div className="detail-item">
                                    <span className="detail-label">Guests</span>
                                    <span className="detail-value">{booking.numAdults} Adults, {booking.numChildren} Children</span>
                                </div>
                            </div>
                            
                            <div className={`booking-status ${booking.paymentStatus === "Completed" ? "status-completed" : "status-pending"}`}>
                                {booking.paymentStatus === "Completed" ? <CheckCircle size={16} /> : <XCircle size={16} />}
                                {booking.paymentStatus}
                            </div>
                            
                            <div className="booking-actions">
                                <button onClick={() => openEditModal(booking)} className="action-button edit-button">
                                    <Edit size={16} />
                                    Edit Details
                                </button>
                                
                                <button onClick={() => cancelBooking(booking._id)} className="action-button cancel-button">
                                    <Trash2 size={16} />
                                    Cancel Booking
                                </button>
                                
                                <button onClick={() => syncToCalendar(booking)} className="action-button sync-button">
                                    <CalendarIcon size={16} />
                                    Sync to Calendar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Edit Modal */}
            {editData && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Edit Booking Details</h3>
                        </div>
                        
                        <div className="modal-body">
                            <div className="form-group">
                                <label className="form-label">Guest Names</label>
                                <input
                                    type="text"
                                    name="guestNames"
                                    value={editData.guestNames || ""}
                                    onChange={handleEditChange}
                                    className="form-input"
                                    placeholder="Enter guest names"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label className="form-label">Contact Number</label>
                                <input
                                    type="text"
                                    name="contactNumber"
                                    value={editData.contactNumber || ""}
                                    onChange={handleEditChange}
                                    className="form-input"
                                    placeholder="Enter contact number"
                                />
                            </div>
                        </div>
                        
                        <div className="modal-footer">
                            <button onClick={() => setEditData(null)} className="modal-button cancel-modal-button">
                                Cancel
                            </button>
                            <button onClick={saveEdit} className="modal-button save-button">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Bookings;