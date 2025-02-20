import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import India from "./pages/india";

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
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}
