const Listing = require("../models/listing");
const axios = require("axios");

const getAllListings = async (req, res) => {
  try {
    const allListings = await Listing.find({});
    res.json(allListings);
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getIndiaPackages = async (req, res) => {
  try {
    const indiaPackages = await Listing.find({ country: "India" });
    res.render("india", { indiaPackages });
  } catch (error) {
    console.error("Error fetching India packages:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPackageDetails = async (req, res) => {
  try {
    const { title } = req.query;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const decodedTitle = decodeURIComponent(title);
    const packageDetails = await Listing.find({ title: decodedTitle });

    if (packageDetails.length === 0) {
      return res.status(404).json({ error: "Package not found" });
    }

    res.json(packageDetails);
  } catch (error) {
    console.error("Error fetching package details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getRecommendations = async (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon) return res.status(400).json({ error: "Latitude and Longitude required" });

  try {
    const query = `[out:json];node(around:5000, ${lat}, ${lon})["tourism"];out;`;
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

    const response = await axios.get(url);
    const places = response.data.elements.map((place) => ({
      name: place.tags.name || "Unknown",
      type: place.tags.tourism,
      lat: place.lat,
      lon: place.lon,
    }));

    res.json(places);
  } catch (error) {
    console.error("Error fetching OSM data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

const getPlacePackages = async (req, res) => {
  try {
    const placeName = req.query.name;
    const filteredPackages = await Listing.find({ place: placeName });
    res.json(filteredPackages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getInternationalListings = async (req, res) => {
  try {
    const internationalListings = await Listing.find({ type: "International tour" });
    res.json(internationalListings);
  } catch (error) {
    console.error("Error fetching international tour listings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getEducationalListings = async (req, res) => {
  try {
    const educationalListings = await Listing.find({ type: "Educational tour" });
    res.json(educationalListings);
  } catch (error) {
    console.error("Error fetching educational tour listings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getDevotionalListings = async (req, res) => {
  try {
    const devotionalListings = await Listing.find({ type: "Devotional tour" });
    res.json(devotionalListings);
  } catch (error) {
    console.error("Error fetching devotional tour listings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getWeekendListings = async (req, res) => {
  try {
    const weekendListings = await Listing.find({ type: "Weekend tour" });
    res.json(weekendListings);
  } catch (error) {
    console.error("Error fetching weekend tour listings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllListings,
  getIndiaPackages,
  getPackageDetails,
  getRecommendations,
  getPlacePackages,
  getInternationalListings,
  getEducationalListings,
  getDevotionalListings,
  getWeekendListings,
};