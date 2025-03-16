import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";



const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const place = location.state;

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numAdults, setNumAdults] = useState(1);
    const [numChildren, setNumChildren] = useState(0);
    const [guestNames, setGuestNames] = useState([""]);
    const [contactNumber, setContactNumber] = useState("");
    const [altContactNumber, setAltContactNumber] = useState("");
    const [address, setAddress] = useState("");
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [userId, setUserId] = useState(null);

    // Load Razorpay script
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => setScriptLoaded(true);
        script.onerror = () => console.error("Failed to load Razorpay script");
        document.body.appendChild(script);
    }, []);

    // Get user ID from token stored in local storage
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUserId(decoded.userId); // Ensure JWT contains userId
            } catch (error) {
                console.error("Invalid token:", error);
            }
        }
    }, []);

    // Handle guest name updates dynamically
    useEffect(() => {
        setGuestNames((prevNames) => {
            const newCount = numAdults + numChildren;
            return [...prevNames.slice(0, newCount), ...Array(newCount - prevNames.length).fill("")];
        });
    }, [numAdults, numChildren]);

    const handlePayment = async () => {
        if (!date || !time || !contactNumber || !address || guestNames.some(name => !name.trim())) {
            alert("Please fill all required details.");
            return;
        }

        if (!scriptLoaded) {
            alert("Razorpay is still loading. Please wait...");
            return;
        }

        if (!userId) {
            alert("User authentication required. Please log in.");
            navigate("/login");
            return;
        }

        const token = localStorage.getItem("token");

        try {
            // Create Razorpay Order
            const orderResponse = await fetch("http://localhost:8080/payments/create-order", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}` // Send token for authentication
                },
                body: JSON.stringify({
                    userId,
                    listingId: place._id,
                    amount: place.price,
                    date,
                    time,
                    numAdults,
                    numChildren,
                    guestNames,
                    contactNumber,
                    altContactNumber,
                    address
                }),
            });

            const orderData = await orderResponse.json();
            if (!orderData.success) {
                alert("Order creation failed. Try again.");
                return;
            }

            // Initialize Razorpay Payment
            const options = {
                key: "rzp_test_7tTCrxHZeeXmx7", // Replace with your Razorpay test key
                amount: orderData.amount * 100,
                currency: "INR",
                name: "Tourism Booking",
                description: `Booking for ${place.title}`,
                order_id: orderData.orderId,
                handler: async (response) => {
                    try {
                        const verifyResponse = await fetch("http://localhost:8080/payments/verify-payment", {
                            method: "POST",
                            headers: { 
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}` 
                            },
                            body: JSON.stringify({
                                orderId: orderData.orderId,
                                paymentId: response.razorpay_payment_id,
                                userId,
                                listingId: place._id,
                                amount: place.price,
                                date,
                                time,
                                numAdults,
                                numChildren,
                                guestNames,
                                contactNumber,
                                altContactNumber,
                                address
                            }),
                        });

                        const verifyData = await verifyResponse.json();
                        if (verifyData.success) {
                            alert("Payment Successful! Booking Confirmed.");
                            window.open(`http://localhost:8080/generate-pdf/${orderData.orderId}`, "_blank"); // Open PDF
                            navigate("/"); // Redirect to home
                        } else {
                            alert("Payment verification failed!");
                        }
                    } catch (error) {
                        console.error("Error verifying payment:", error);
                        alert("Something went wrong!");
                    }
                },
                prefill: {
                    name: "Test User",
                    email: "testuser@example.com",
                    contact: "9999999999",
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const razor = new window.Razorpay(options);
            razor.open();
        } catch (error) {
            console.error("Error processing payment:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="payment-container">
            <h2>Book {place.title}</h2>
            <p>Price: ₹{place.price}</p>
            
            <label>Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            
            <label>Time:</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            
            <label>Adults:</label>
            <input type="number" value={numAdults} min="1" onChange={(e) => setNumAdults(Number(e.target.value))} />
            
            <label>Children:</label>
            <input type="number" value={numChildren} min="0" onChange={(e) => setNumChildren(Number(e.target.value))} />
            
            <label>Guest Names:</label>
            {guestNames.map((name, i) => (
                <input
                    key={i}
                    type="text"
                    placeholder={`Guest ${i + 1}`}
                    value={name}
                    onChange={(e) => {
                        const newGuestNames = [...guestNames];
                        newGuestNames[i] = e.target.value;
                        setGuestNames(newGuestNames);
                    }}
                />
            ))}
            
            <label>Contact Number:</label>
            <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
            
            <label>Alternate Contact Number:</label>
            <input type="text" value={altContactNumber} onChange={(e) => setAltContactNumber(e.target.value)} />
            
            <label>Address:</label>
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
            
            <button onClick={handlePayment} disabled={!scriptLoaded}>
                {scriptLoaded ? "Proceed to Payment" : "Loading Payment..."}
            </button>
        </div>
    );
};

export default Payment;
