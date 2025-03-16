import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { FaMapMarkedAlt, FaDollarSign, FaClock, FaUserTie } from "react-icons/fa";

const videoData = [
  {
    src: "https://tecdn.b-cdn.net/img/video/Tropical.mp4",
    title: "Explore the Beauty of India",
    subtext: "Discover breathtaking landscapes and vibrant culture.",
  },
  {
    src: "https://tecdn.b-cdn.net/img/video/forest.mp4",
    title: "Amazing Diversity on Travel",
    subtext: "Experience the grandeur of the world",
  },
  {
    src: "https://tecdn.b-cdn.net/img/video/Agua-natural.mp4",
    title: "Perfect Place on vacation",
    subtext: "India, International, Devotional etc..",
  },
];

const highlights = [
  { icon: <FaMapMarkedAlt />, title: "300+ Destinations", description: "Explore top destinations worldwide." },
  { icon: <FaDollarSign />, title: "Affordable Price", description: "Best deals at unbeatable prices." },
  { icon: <FaClock />, title: "Fast Booking", description: "Hassle-free and quick booking process." },
  { icon: <FaUserTie />, title: "Best Tour Guide", description: "Professional and experienced guides." }
];

const packages = [
  {
    name: "Indian Tour Packages",
    image: "https://www.iastoppers.com/uploads/articles/20th-Sept-2021-Editorial-image.jpg",
    link: "/listings/indian",
  },
  {
    name: "International Packages",
    image: "https://etimg.etb2bimg.com/photo/77233755.cms",
    link: "/listings/international",
  },
  {
    name: "Educational Packages",
    image: "https://gttp.org/wp-content/uploads/2022/05/Tourism-education-small.jpg",
    link: "/listings/educational",
  },
  {
    name: "Devotional Packages",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/fe/8d/62.jpg",
    link: "/listings/devotional",
  },
  {
    name: "Weekend Tour Packages",
    image: "https://indiaonholidays.com/wp-content/uploads/2022/03/Weekend-Getaways.jpeg",
    link: "/listings/weekend",
  },
];

export default function Home({ firstLoading, setFirstLoading }) {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(0);
  const [fade, setFade] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  const [animationKey, setAnimationKey] = useState(Date.now());
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    if (firstLoading) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        setFirstLoading(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [firstLoading, setFirstLoading]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentVideo]);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videoData.length);
      setFade(true);
      setAnimationKey(Date.now());
    }, 100);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentVideo((prev) => (prev - 1 + videoData.length) % videoData.length);
      setFade(true);
      setAnimationKey(Date.now());
    }, 100);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login
  };

  return (
    <div className="home-wrapper">
      {showSplash && firstLoading ? (
        <div className="splash-screen">
          <img
            src="https://thumbs.dreamstime.com/b/travel-around-world-poster-tourism-vacation-earth-world-journey-global-vector-illustration-world-travel-concept-banner-73263954.jpg"
            alt="Splash Screen"
            className="splash-image"
          />
        </div>
      ) : (
        <>
          {/* Fixed Navbar */}
          <nav className="navbar">
            <ul className="nav-list">
              <li id="nav-title" onClick={() => {
                document.getElementById("video-slider")?.scrollIntoView({ behavior: "smooth" });
              }}>Home</li>

              <li id="nav-title" onClick={() => {
                document.getElementById("packages-section")?.scrollIntoView({ behavior: "smooth" });
              }}>Packages</li>

              <li id="nav-title" onClick={() => navigate("/explore")}>Explore</li>
              <li id="nav-title" onClick={() => navigate("/about")}>About</li>
              <li id="nav-title" onClick={() => navigate("/bookings")}>My Bookings</li>
              {!isLoggedIn ? (
                <li id="nav-title" onClick={() => navigate("/login")}>Signin</li>
              ) : (
                <li id="nav-title" onClick={handleLogout}>Logout</li>
              )}

              <li id="nav-title" onClick={() => navigate("/profile")}>Profile</li>
            </ul>
          </nav>

          {/* Scrollable Main Content */}
          <div className="main-content">
            {/* Video Slider with Buttons */}
            <div id="video-slider" className={`video-slider ${fade ? "fade-in" : "fade-out"}`}>
              <video key={currentVideo} autoPlay muted loop className="video">
                <source src={videoData[currentVideo].src} type="video/mp4" />
              </video>
              <button className="video-btn left" onClick={handlePrev}>❮</button>
              <button className="video-btn right" onClick={handleNext}>❯</button>

              {/* Dynamic Video Text */}
              <div key={animationKey} className="video-text fade-slide-in">
                <h1>{videoData[currentVideo].title}</h1>
                <p>{videoData[currentVideo].subtext}</p>
              </div>
            </div>

            {/* Highlights Section */}
            <div className="highlights-section">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card">
                  <div className="icon">{item.icon}</div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            {/* Package Section */}
            <div className="section-divider">
              <h1 id="packages-section" className="section-heading">Smart Packages</h1>
              <div className="home-container">
                {packages.map((pkg, index) => (
                  <div key={index} className="card" onClick={() => navigate(pkg.link)}>
                    <img src={pkg.image} alt={pkg.name} />
                    <div className="card-text">{pkg.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
