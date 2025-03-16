import React, { useState, useEffect } from "react";
import axios from "axios";

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
            localStorage.setItem("googleToken", googleToken); // Store for future use
            setGoogleSignedIn(true);
        }
    }, []);
    
    // 🔥 NEW useEffect: Fetch bookings after jwtToken is updated
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
    
            const response = await axios.get("http://localhost:8080/payments/my-bookings", {
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
    
        console.log("Google Token being sent:", googleToken);
    
        try {
            await axios.post("http://localhost:8080/google/sync-calendar", 
                { booking },
                { headers: { Authorization: `Bearer ${googleToken}` } }
            );
    
            alert("Booking added to Google Calendar!");
        } catch (error) {
            console.error("Failed to sync to Google Calendar:", error);
            alert("Error syncing booking to Google Calendar.");
        }
    };
    

    // ✅ Handle Google OAuth Redirect
    const handleGoogleSignIn = () => {
        window.location.href = "http://localhost:8080/auth/google"; // Redirect to backend OAuth
    };

   
    


    // Cancel a booking
    const cancelBooking = async (id) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:8080/payments/cancel/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setBookings(bookings.filter((booking) => booking._id !== id));
        } catch (error) {
            console.error("Failed to cancel booking:", error);
        }
    };

    // Open edit modal
    const openEditModal = (booking) => {
        setEditData({ ...booking });
    };

    // Handle edit input changes
    const handleEditChange = (e) => {
        if (!editData) return;
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    // Save edited booking
    const saveEdit = async () => {
        try {
            const token = localStorage.getItem("token");
            await axios.put(
                `http://localhost:8080/payments/update/${editData._id}`,
                { guestNames: editData.guestNames, contactNumber: editData.contactNumber },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setBookings(bookings.map((b) => (b._id === editData._id ? editData : b)));
            setEditData(null);
        } catch (error) {
            console.error("Failed to update booking:", error);
        }
    };

    if (loading) return <p className="text-center text-lg font-semibold">Loading bookings...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="max-w-4xl mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">My Bookings</h2>
            {!googleSignedIn && (
                <div className="mb-4">
                    <button
                        onClick={handleGoogleSignIn}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:opacity-80"
                    >
                        Sign in with Google
                    </button>
                </div>
            )}
            {bookings.length === 0 ? (
                <p className="text-gray-600">No bookings found.</p>
            ) : (
                <ul className="divide-y divide-gray-300">
                    {bookings.map((booking) => (
                        <li key={booking._id} className="p-4">
                        
                            <h3 className="text-lg font-semibold">{booking.listing?.title || "Unknown Tour"}</h3>
                            <p className="text-sm text-gray-600">
                                {booking.listing?.place} | {booking.listing?.type}
                            </p>
                            <p className="text-sm text-gray-700">
                                <strong>Amount:</strong> ₹{booking.amount} | <strong>Date:</strong> {booking.date} | <strong>Time:</strong> {booking.time}
                            </p>
                            <p className="text-sm text-gray-500">
                                <strong>Guests:</strong> {booking.numAdults} Adults, {booking.numChildren} Children
                            </p>
                            <p className={`text-sm font-semibold ${booking.paymentStatus === "Completed" ? "text-green-600" : "text-red-600"}`}>
                                Status: {booking.paymentStatus}
                            </p>

                            {/* Buttons for Edit, Cancel, and Calendar Sync */}
                            <div className="mt-2 space-x-3">
                                <button onClick={() => openEditModal(booking)} className="text-blue-600 hover:opacity-80">Edit</button>
                                <button onClick={() => cancelBooking(booking._id)} className="text-red-600 hover:opacity-80">Cancel</button>
                                <button onClick={() => syncToCalendar(booking)} className="text-green-600 hover:opacity-80">Sync to Calendar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {/* Edit Modal */}
            {editData && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-lg font-bold mb-4">Edit Booking</h3>
                        <label className="block text-sm">Guest Name:</label>
                        <input
                            type="text"
                            name="guestNames"
                            value={editData.guestNames}
                            onChange={handleEditChange}
                            className="w-full border p-2 rounded mb-2"
                        />
                        <label className="block text-sm">Contact Number:</label>
                        <input
                            type="text"
                            name="contactNumber"
                            value={editData.contactNumber}
                            onChange={handleEditChange}
                            className="w-full border p-2 rounded mb-4"
                        />
                        <div className="flex justify-end space-x-3">
                            <button onClick={saveEdit} className="px-4 py-2 bg-blue-500 text-white rounded hover:opacity-80">Save</button>
                            <button onClick={() => setEditData(null)} className="px-4 py-2 bg-gray-300 rounded hover:opacity-80">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Bookings;