# ✈️ Trip Picker

Welcome to **Trip Picker**, a full-stack web application designed to inspire and simplify travel planning. Discover a world of breathtaking destinations, curated tour packages, and seamless booking experiences — all in one place.

Whether you're seeking cultural adventures in India, international getaways, devotional pilgrimages, or quick weekend escapes, **Trip Picker** has you covered!

---

## 🌟 Features

- 🧳 **Curated Travel Packages**: Indian, International, Devotional, Educational, and Weekend tours with rich content.
- 🔐 **User Authentication**: Secure login, logout, password reset, and profile management using Passport.js.
- 📆 **Booking System**: Hassle-free tour booking with a dedicated bookings page.
- 🎨 **Interactive UI**: Responsive design, parallax effects, dark/light mode, and smooth animations.
- ✍️ **User Reviews**: Submit and browse reviews for all travel packages.
- 👤 **Profile Management**: View and manage user profile and booking history.
  
---

## 🛠️ Technologies Used

### Frontend
- **React.js** – Dynamic user interface
- **React Router** – Client-side routing
- **Bootstrap** – Responsive design
- **React Icons** – Icon library
- **CSS** – Custom styling and animations

### Backend
- **Node.js & Express.js** – RESTful API
- **MongoDB** – Database for users, bookings, and listings
- **Passport.js** – Authentication
- **CORS** – Cross-origin requests
- **dotenv** – Environment variables

### Other Tools
- **Git & GitHub** – Version control
- **Pexels & CDNs** – Video and image assets

---

## 📂 Project Structure
```
Tourism_Recommendation_System/
├── .github/
│   └── workflows/
│       └── ci.yml
├── Backend/
│   ├── .env.example
│   ├── .gitignore
│   ├── app.js
│   ├── config/
│   │   ├── db.js
│   │   ├── passport.js
│   │   └── razorpay.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── bookingController.js
│   │   ├── listingController.js
│   │   ├── recommendationController.js
│   │   ├── reviewController.js
│   │   └── userController.js
│   ├── data/
│   │   └── d1.csv
│   ├── init/
│   │   ├── index.js
│   │   └── tourpackages.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   │   └── uploadMiddleware.js
│   ├── models/
│   │   ├── booking.js
│   │   ├── listing.js
│   │   ├── reviews.js
│   │   └── user.js
│   ├── package-lock.json
│   ├── package.json
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── bookingRoutes.js
│   │   ├── listingRoutes.js
│   │   ├── recommendationRoutes.js
│   │   ├── reviewRoutes.js
│   │   └── userRoutes.js
│   ├── server.js
│   └── utils/
│       ├── email.js
│       ├── ExpressError.js
│       ├── generatepdf.js
│       └── googleAuth.js
├── Frontend/
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   ├── index.html
│   │   └── vite.svg
│   ├── README.md
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── Home.css
│   │   ├── Home.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── pages/
│   │       ├── bookings.css
│   │       ├── bookings.jsx
│   │       ├── devotional.jsx
│   │       ├── educational.jsx
│   │       ├── explore.css
│   │       ├── explore.jsx
│   │       ├── forgot.jsx
│   │       ├── india.css
│   │       ├── india.jsx
│   │       ├── international.html
│   │       ├── international.jsx
│   │       ├── login.css
│   │       ├── login.jsx
│   │       ├── map.jsx
│   │       ├── packagedetails.css
│   │       ├── packagedetails.jsx
│   │       ├── packages.css
│   │       ├── packages.jsx
│   │       ├── payment.css
│   │       ├── payment.jsx
│   │       ├── place.css
│   │       ├── place.jsx
│   │       ├── profile.css
│   │       ├── profile.jsx
│   │       ├── reset.jsx
│   │       ├── reviews.css
│   │       ├── reviews.jsx
│   │       ├── verify.jsx
│   │       └── weekend.jsx
│   └── vite.config.js
├── package-lock.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### Installation

#### Clone the Repository
```
git clone https://github.com/NiteshVarman/Tourism_Recommendation_System.git
cd Tourism_Recommendation_System
```
