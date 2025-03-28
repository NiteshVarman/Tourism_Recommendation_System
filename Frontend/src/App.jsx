import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import India from "./pages/india";
import Place from "./pages/place";
import Login from "./pages/login";
import InternationalListings from "./pages/international";
import EducationalListings from "./pages/educational";
import DevotionalListings from "./pages/devotional";
import WeekendListings from "./pages/weekend";
import ForgotPassword from "./pages/forgot";
import VerifyOTP from "./pages/verify";
import ResetPassword from "./pages/reset";
import Profile from "./pages/profile";
import Explore from "./pages/explore";
import { useState } from "react";
import Payment from "./pages/payment";
import MyBookings from "./pages/bookings";
import Packages from "./pages/packages";
import Reviews from "./pages/reviews";
import PackageDetails from "./pages/packagedetails";


export default function App() {
  const [firstLoading, setFirstLoading] = useState(true);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home firstLoading={firstLoading} setFirstLoading={setFirstLoading}/>} />
        <Route path="/listings/indian" element={<India />} />
        <Route path="/listings/international" element={<InternationalListings />} />
        <Route path="/listings/educational" element={<EducationalListings />} />
        <Route path="/listings/devotional" element={<DevotionalListings />} />
        <Route path="/listings/weekend" element={<WeekendListings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/place/:stateName" element={<Place />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/payment/:placeId" element={<Payment />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/reviews/:listingId" element={<Reviews />} />
        <Route path="/place/:stateName/:title" element={<PackageDetails />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}
