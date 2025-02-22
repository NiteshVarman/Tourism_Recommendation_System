import { useNavigate } from "react-router-dom";
import "./Home.css";

const packages = [
  {
    name: "Indian Tour Packages",
    image: "https://www.travellersnearme.com/uploads/imgH6a4_original_home-banner-r0xq3v.jpg",
    link: "/listings/indian",
  },
  {
    name: "International Packages",
    image: "https://www.travellersnearme.com/uploads/imgH6a4_original_home-banner-r0xq3v.jpg",
    link: "/listings/international",
  },
  {
    name: "Educational Packages",
    image: "https://www.travellersnearme.com/uploads/imgH6a4_original_home-banner-r0xq3v.jpg",
    link: "/listings/educational",
  },
  {
    name: "Devotional Packages",
    image: "https://www.travellersnearme.com/uploads/imgH6a4_original_home-banner-r0xq3v.jpg",
    link: "/listings/devotional",
  },
  {
    name: "Weekend Tour Packages",
    image: "https://www.travellersnearme.com/uploads/imgH6a4_original_home-banner-r0xq3v.jpg",
    link: "/listings/weekend",
  },
];

export default function Home() {
    const navigate = useNavigate();
  
    return (
      <div className="home-container">
        {packages.map((pkg, index) => (
          <div key={index} className="card" onClick={() => navigate(pkg.link)}>
            <img src={pkg.image} alt={pkg.name} />
            <div className="card-text">{pkg.name}</div>
          </div>
        ))}
      </div>
    );
}