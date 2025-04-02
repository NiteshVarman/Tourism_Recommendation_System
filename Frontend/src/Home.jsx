"use client"

import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

import {
  FaMapMarkedAlt,
  FaDollarSign,
  FaClock,
  FaUserTie,
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMoon,
  FaSun,
} from "react-icons/fa"
import "./Home.css"

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
]

const highlights = [
  { icon: <FaMapMarkedAlt />, title: "300+ Destinations", description: "Explore top destinations worldwide." },
  { icon: <FaDollarSign />, title: "Affordable Price", description: "Best deals at unbeatable prices." },
  { icon: <FaClock />, title: "Fast Booking", description: "Hassle-free and quick booking process." },
  { icon: <FaUserTie />, title: "Best Tour Guide", description: "Professional and experienced guides." },
]

const smartPackages = [
  {
    video: "https://videos.pexels.com/video-files/29555043/12721445_1920_1080_60fps.mp4",
    title: "Indian Tour Packages",
    description: "Explore the diverse culture and heritage of India with our expertly crafted tours.",
    link: "/listings/indian",
  },
  {
    video: "https://videos.pexels.com/video-files/5396819/5396819-uhd_2560_1440_30fps.mp4",
    title: "International Packages",
    description: "Discover the world with our international tour packages to exotic destinations.",
    link: "/listings/international",
  },
  {
    video: "https://videos.pexels.com/video-files/15364666/15364666-hd_1920_1080_50fps.mp4",
    title: "Devotional Packages",
    description: "Spiritual journeys to sacred sites and pilgrimage destinations across the country.",
    link: "/listings/devotional",
  },
  {
    video: "https://videos.pexels.com/video-files/16133439/uhd_60fps.mp4",
    title: "Educational Packages",
    description: "Educational tours designed to enhance learning with real-world experiences.",
    link: "/listings/educational",
  },
  {
    video: "https://videos.pexels.com/video-files/31209305/13331383_2560_1440_60fps.mp4",
    title: "Weekend Tour Packages",
    description: "Quick getaways to rejuvenate and refresh yourself from the daily grind.",
    link: "/listings/weekend",
  },
]

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
]

export default function Home({ firstLoading, setFirstLoading }) {
  const navigate = useNavigate()
  const [currentVideo, setCurrentVideo] = useState(0)
  const [fade, setFade] = useState(true)
  const [showSplash, setShowSplash] = useState(true)
  const [animationKey, setAnimationKey] = useState(Date.now())
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"))
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  // Refs for animation elements
  const highlightsRef = useRef(null)
  const packagesRef = useRef(null)
  const footerRef = useRef(null)
  const parallaxBgRef = useRef(null)

  useEffect(() => {
    if (firstLoading) {
      const timer = setTimeout(() => {
        setShowSplash(false)
        setFirstLoading(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [firstLoading, setFirstLoading])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentVideo])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Check if we've scrolled past the highlights section
      const highlightsSection = document.querySelector(".highlights-section")
      if (highlightsSection) {
        const highlightsSectionBottom = highlightsSection.getBoundingClientRect().bottom
        const windowHeight = window.innerHeight

        // If we've scrolled far enough, mark animation as complete
        if (highlightsSectionBottom < windowHeight * 0.5) {
          setAnimationComplete(true)
        } else {
          setAnimationComplete(false)
        }
      }

      // Animate elements when they come into view
      const animateOnScroll = (elements, className) => {
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect()
          const isVisible = rect.top <= window.innerHeight * 0.8

          if (isVisible) {
            el.classList.add(className)
          }
        })
      }

      // Apply animations to different elements
      animateOnScroll(document.querySelectorAll(".highlight-card:not(.animate)"), "animate")
      animateOnScroll(document.querySelectorAll(".package:not(.animate)"), "animate")
      animateOnScroll(document.querySelectorAll(".footer-section:not(.animate)"), "animate")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Parallax effect for background
  useEffect(() => {
    if (parallaxBgRef.current) {
      const yPos = -(scrollY * 0.2)
      parallaxBgRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`
    }
  }, [scrollY])

  // Theme effect
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme")
    } else {
      document.body.classList.remove("dark-theme")
    }
  }, [isDarkTheme])

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev)
  }

  const handleNext = () => {
    setFade(false)
    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videoData.length)
      setFade(true)
      setAnimationKey(Date.now())
    }, 300)
  }

  const handlePrev = () => {
    setFade(false)
    setTimeout(() => {
      setCurrentVideo((prev) => (prev - 1 + videoData.length) % videoData.length)
      setFade(true)
      setAnimationKey(Date.now())
    }, 300)
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    navigate("/login")
  }

  return (
    <div className={`home-wrapper ${isDarkTheme ? "dark-theme" : ""}`}>
      {showSplash && firstLoading ? (
        <div className="splash-screen">
          <div className="splash-content">
            <img
              src="https://thumbs.dreamstime.com/b/travel-around-world-poster-tourism-vacation-earth-world-journey-global-vector-illustration-world-travel-concept-banner-73263954.jpg"
              alt="Splash Screen"
              className="splash-image"
            />
            <div className="splash-text">
              <h1>Discover the World</h1>
              <div className="loading-container">
                <div className="loading-circle"></div>
                <div className="loading-circle"></div>
                <div className="loading-circle"></div>
                <div className="loading-circle"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <nav
            className={`navbar ${isScrolled ? "scrolled" : ""}`}
            style={{ padding: isScrolled ? "10px 5%" : "15px 5%" }}
          >
            <div className="logo">
              <span>Travel</span>Explorer
            </div>
            <ul className="nav-list">
              <li onClick={() => document.getElementById("video-slider")?.scrollIntoView({ behavior: "smooth" })}>
                Home
              </li>
              <li onClick={() => navigate("/packages")}>Packages</li>
              <li onClick={() => navigate("/explore")}>Explore</li>
              <li onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
                About
              </li>

              <li onClick={() => navigate("/bookings")}>My Bookings</li>
              <li className="theme-toggle" onClick={toggleTheme} style={{ color: isDarkTheme ? "#fff" : "#333" }}>
                {isDarkTheme ? <FaSun /> : <FaMoon />}
              </li>
              {!isLoggedIn ? (
                <li className="auth-button" onClick={() => navigate("/login")}>
                  Sign In
                </li>
              ) : (
                <>
                  <li onClick={() => navigate("/profile")}>Profile</li>
                  <li className="auth-button logout" onClick={handleLogout}>
                    Logout
                  </li>
                </>
              )}
            </ul>
          </nav>

          <div className="main-content">
            <div id="video-slider" className={`video-slider ${fade ? "fade-in" : "fade-out"}`}>
              <div className="video-overlay"></div>
              <video key={currentVideo} autoPlay muted loop className="video">
                <source src={videoData[currentVideo].src} type="video/mp4" />
              </video>
              <button className="video-btn left" onClick={handlePrev}>
                <FaChevronLeft />
              </button>
              <button className="video-btn right" onClick={handleNext}>
                <FaChevronRight />
              </button>
              <div key={animationKey} className="video-text">
                <h1>{videoData[currentVideo].title}</h1>
                <p>{videoData[currentVideo].subtext}</p>
                <button
                  className="cta-button"
                  onClick={() => document.getElementById("packages-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore Packages
                </button>
              </div>
              <div className="video-indicators">
                {videoData.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${index === currentVideo ? "active" : ""}`}
                    onClick={() => {
                      setFade(false)
                      setTimeout(() => {
                        setCurrentVideo(index)
                        setFade(true)
                        setAnimationKey(Date.now())
                      }, 300)
                    }}
                  ></span>
                ))}
              </div>
              <div className="scroll-down">
                <div className="mouse">
                  <div className="wheel"></div>
                </div>
                <div className="arrow-down">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            <div className="highlights-section" ref={highlightsRef}>
              <div className="parallax-bg" ref={parallaxBgRef}></div>
              <div className="section-title reveal-up animate">
                
                <div className="title-decoration">
                <h2>Why Choose Us</h2>
                </div>
              </div>
              <div className="highlights-container">
                {highlights.map((item, index) => (
                  <div key={index} className="highlight-card" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="icon-container">
                      <div className="icon">{item.icon}</div>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-divider" id="packages-section" ref={packagesRef}>
              <div className="parallax-text-container" style={{ height: animationComplete ? "0" : "30vh" }}>
                <h2
                  className="parallax-text"
                  style={{
                    opacity: animationComplete ? 0 : Math.min(1, (scrollY - 300) / 700), // Slower fade
                    transform: `scale(${Math.min(3, 1 + (scrollY - 300) / 350)})`,
                    filter: `blur(${animationComplete ? 10 : 0}px)`,
                    transition: "opacity 1.2s ease, transform 0.8s ease, filter 0.8s ease, height 0.8s ease", // Slower transitions
                  }}
                >
                  Packages
                </h2>
              </div>

              <div
                className="smart-packages-container"
                style={{
                  opacity: animationComplete ? 1 : 0,
                  transform: `translateY(${animationComplete ? "0" : "50px"})`,
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                  marginTop: animationComplete ? "0" : "50px",
                  background: isDarkTheme ? "rgba(30, 30, 40, 0.6)" : "rgba(255, 255, 255, 0.8)",
                  borderRadius: "20px",
                  boxShadow: isDarkTheme ? "0 10px 30px rgba(0, 0, 0, 0.3)" : "0 10px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="packages-header">
                  <h2 className="packages-title">Smart Packages</h2>
                  <p className="packages-subtitle">Discover our carefully curated travel experiences</p>
                </div>

                {smartPackages.map((pkg, index) => (
                  <div key={index} className={`package ${index % 2 !== 0 ? "reverse" : ""}`}>
                    <div className="package-content">
                      <span
                        className="package-number"
                        style={{ color: isDarkTheme ? "rgb(71, 70, 70)" : "rgba(2, 2, 2, 0.05)" }}
                      >
                        0{index + 1}
                      </span>
                      <h2>{pkg.title}</h2>
                      <p>{pkg.description}</p>

                      <Link to={pkg.link} className="package-btn" onClick={() => setFirstLoading(false)}>
                        Explore More
                      </Link>
                    </div>
                    <div className="package-video-container">
                      <div className="package-video video-card">
                        <div className="section-mask_container">
                          <div className="section-image_container">
                            <div className="image-ratio_container">
                              <video autoPlay loop muted className="image-ratio_asset" style={{ display: "block" }}>
                                <source src={pkg.video} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonials-section">
              <div className="section-title">                
                <div className="title-decoration">
                  <h2>What Our Travelers Say</h2>
                </div>
              </div>
              <div className="testimonial-container">
                <div className="testimonial-card">
                  <div className="quote">"</div>
                  <p>
                    The trip to Rajasthan was absolutely amazing! The guides were knowledgeable and the accommodations
                    were perfect. I'll definitely book with Travel Explorer again.
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar"></div>
                    <div className="author-info">
                      <h4>Priya Sharma</h4>
                      <span>Delhi, India</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="quote">"</div>
                  <p>
                    Our family vacation to Bali was perfectly organized. Every detail was taken care of, and we could
                    just relax and enjoy our time together. Highly recommended!
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar"></div>
                    <div className="author-info">
                      <h4>Rahul Mehta</h4>
                      <span>Mumbai, India</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="quote">"</div>
                  <p>
                    The devotional tour to Varanasi was a life-changing experience. The spiritual guidance and
                    arrangements made by Travel Explorer enhanced our journey significantly.
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar"></div>
                    <div className="author-info">
                      <h4>Ananya Patel</h4>
                      <span>Ahmedabad, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <div className="cta-content">
                <h2>Ready for Your Next Adventure?</h2>
                <p>Join thousands of satisfied travelers who have experienced the world with us.</p>
                <button className="cta-button-large" onClick={() => navigate("/packages")}>
                  Start Planning Now
                </button>
              </div>
              <div className="cta-decoration">
                <div className="floating-shape shape1"></div>
                <div className="floating-shape shape2"></div>
                <div className="floating-shape shape3"></div>
              </div>
            </div>

            <footer className="footer" ref={footerRef}>
              <div className="footer-content">
                <div className="footer-section">
                  <h3>Travel Explorer</h3>
                  <p>Discover the world with our expertly crafted tours and packages.</p>
                  <div className="social-icons">
                    <span>
                      <FaFacebookF />
                    </span>
                    <span>
                      <FaInstagram />
                    </span>
                    <span>
                      <FaTwitter />
                    </span>
                  </div>
                </div>
                <div className="footer-section">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>Home</li>
                    <li>Packages</li>
                    <li>About Us</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h3>Contact Us</h3>
                  <p>Email: info@travelexplorer.com</p>
                  <p>Phone: +91 9966009916</p>
                  <p>Address: Amrita Vishwa Vidyapeetham,Coimbatore,TamilNadu,India</p>
                </div>
                <div className="footer-section">
                  <h3>Newsletter</h3>
                  <p>Subscribe to our newsletter for the latest travel deals and updates.</p>
                  <div className="newsletter-form">
                    <input type="email" placeholder="Your email address" />
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Travel Explorer. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </>
      )}
    </div>
  )
}

