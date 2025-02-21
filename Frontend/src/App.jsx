import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import India from "./pages/india";
import Place from "./pages/place";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgot";
import VerifyOTP from "./pages/verify";
import ResetPassword from "./pages/reset";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings/indian" element={<India />} />
        <Route path="/listings/international" element={<h1>International Packages</h1>} />
        <Route path="/listings/educational" element={<h1>Educational Packages</h1>} />
        <Route path="/listings/devotional" element={<h1>Devotional Packages</h1>} />
        <Route path="/listings/weekend" element={<h1>Weekend Tour Packages</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/place/:stateName" element={<Place />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}
