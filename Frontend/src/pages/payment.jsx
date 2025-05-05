"use client";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import "./payment.css";

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
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => {
      console.error("Failed to load Razorpay script");
      alert("Failed to load payment gateway. Please try again.");
    };
    document.body.appendChild(script);
  }, []);

  // Get user ID from token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.userId) {
          setUserId(decoded.userId);
        } else {
          console.error("Token missing userId");
          alert("Invalid session. Please log in again.");
          navigate("/login");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        alert("Session expired or invalid. Please log in again.");
        localStorage.removeItem("token");
        navigate("/login");
      }
    } else {
      alert("Please log in to proceed with payment.");
      navigate("/login");
    }
  }, [navigate]);

  // Handle guest name updates dynamically
  useEffect(() => {
    setGuestNames((prevNames) => {
      const newCount = numAdults + numChildren;
      let updatedGuestNames = [...prevNames];

      // Add new empty guest names if needed
      while (updatedGuestNames.length < newCount) {
        updatedGuestNames.push("");
      }

      // Trim if guests are reduced
      updatedGuestNames = updatedGuestNames.slice(0, newCount);

      return updatedGuestNames;
    });
  }, [numAdults, numChildren]);

  const handlePayment = async () => {
    // Validate inputs
    if (!date || !time || !contactNumber || !address || guestNames.some((name) => !name.trim())) {
      alert("Please fill all required fields with valid data.");
      return;
    }

    if (!scriptLoaded) {
      alert("Payment gateway is still loading. Please wait...");
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
      const orderResponse = await fetch(`${import.meta.env.VITE_API_URL}/bookings/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
          address,
        }),
      });

      const orderData = await orderResponse.json();
      if (!orderData.success) {
        alert(`Order creation failed: ${orderData.message || "Please try again."}`);
        return;
      }

      // Initialize Razorpay Payment
      const options = {
        key: "rzp_test_7tTCrxHZeeXmx7", // Replace with your Razorpay key
        amount: orderData.amount * 100,
        currency: "INR",
        name: "Travel Explorer",
        description: `Booking for ${place.title}`,
        order_id: orderData.orderId,
        handler: async (response) => {
          try {
            const verifyResponse = await fetch(`${import.meta.env.VITE_API_URL}/bookings/verify-payment`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
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
                address,
              }),
            });

            const verifyData = await verifyResponse.json();
            if (verifyData.success) {
              alert("Payment Successful! Booking Confirmed.");
              // Download PDF
              await downloadPDF(orderData.orderId, token);
              navigate("/bookings"); // Redirect to bookings page
            } else {
              alert(`Payment verification failed: ${verifyData.message || "Please try again."}`);
            }
          } catch (error) {
            console.error("Error verifying payment:", error);
            alert("Error verifying payment. Please contact support.");
          }
        },
        prefill: {
          name: guestNames[0] || "Test User",
          email: "testuser@example.com",
          contact: contactNumber || "9999999999",
        },
        theme: {
          color: "#ff7e5f",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error processing payment:", error);
      alert(`Error processing payment: ${error.message || "Please try again."}`);
    }
  };

  const downloadPDF = async (orderId, token) => {
    setIsGeneratingPDF(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/bookings/generate-pdf/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: "blob",
      });

      // Create downloadable PDF
      const url = window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Booking_${orderId}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      alert("PDF downloaded successfully!");
    } catch (error) {
      console.error("PDF download error:", error);
      const errorMessage = error.response?.data?.message || error.message || "Failed to download PDF";
      alert(`Error downloading PDF: ${errorMessage}`);
      if (errorMessage.includes("Unauthorized")) {
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token");
        navigate("/login");
      }
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="payment-container">
      <div className="decoration decoration-1"></div>
      <div className="decoration decoration-2"></div>

      <h2>Book {place.title}</h2>
      <p>Price: ₹{place.price}</p>

      <div className="form-section">
        <div className="form-section-title">Booking Details</div>

        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <label>Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />

        <label>Adults:</label>
        <input type="number" value={numAdults} min="1" onChange={(e) => setNumAdults(Number(e.target.value))} />

        <label>Children:</label>
        <input type="number" value={numChildren} min="0" onChange={(e) => setNumChildren(Number(e.target.value))} />
      </div>

      <div className="form-section">
        <div className="form-section-title">Guest Information</div>

        <label>Guest Names:</label>
        <div className="guest-names-container">
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
        </div>

        <label>Contact Number:</label>
        <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />

        <label>Alternate Contact Number:</label>
        <input type="text" value={altContactNumber} onChange={(e) => setAltContactNumber(e.target.value)} />
      </div>

      <div className="form-section">
        <div className="form-section-title">Address Information</div>

        <label>Address:</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Please provide your complete address"
        />
      </div>

      <button onClick={handlePayment} disabled={!scriptLoaded || isGeneratingPDF}>
        {isGeneratingPDF ? "Processing..." : scriptLoaded ? "Proceed to Payment" : "Loading Payment..."}
      </button>
    </div>
  );
};

export default Payment;