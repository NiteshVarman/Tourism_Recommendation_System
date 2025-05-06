const fs = require('fs');
const path = require('path');
const { TfIdf } = require('natural');
const csvParser = require('csv-parser');

// Load dataset and preprocess it
let data = [];
let combinedFeatures = [];
let tfidf = new TfIdf();

const loadData = () => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(path.join(__dirname, '..', 'data', 'd1.csv'))
      .pipe(csvParser())
      .on('data', (row) => {
        row['No. of Days Preferred'] = String(row['No. of Days Preferred']);
        row['Combined_Features'] = 
          `${row['Type of Tourist Place']} ${row['Budget']} ${row['Best Time to Visit']} ${row['Type of Tour Package']} ${row['No. of Days Preferred']}`;
        results.push(row);
      })
      .on('end', () => {
        data = results;
        combinedFeatures = data.map(row => row['Combined_Features']);
        combinedFeatures.forEach((doc) => tfidf.addDocument(doc));
        resolve();
      })
      .on('error', reject);
  });
};

function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return magA && magB ? dot / (magA * magB) : 0;
}


const generateGoogleMapsUrl = (placeName) => {
  const baseUrl = "https://www.google.com/maps/search/?q=";
  return `${baseUrl}${placeName.replace(/ /g, '+')}`;
};

const recommend = async (req, res) => {
  try {
    const userInput = req.body.user_input;
    if (!Array.isArray(userInput) || userInput.length !== 5) {
      return res.status(400).json({ error: "Invalid input format" });
    }

    const combinedInput = userInput.map(String).join(' ');

    const inputTfidfVector = [];
    tfidf.tfidfs(combinedInput, (i, measure) => {
      inputTfidfVector[i] = measure;
    });

    const scores = combinedFeatures.map((_, idx) => {
      const docVector = [];
      tfidf.tfidfs(combinedFeatures[idx], (i, measure) => {
        docVector[i] = measure;
      });
      return cosineSimilarity(inputTfidfVector, docVector);
    });

    const topIndices = scores
      .map((score, idx) => ({ idx, score }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map(item => item.idx);

    const recommendations = topIndices.map(idx => {
      const place = data[idx];
      return {
        ...place,
        "Place URL": generateGoogleMapsUrl(place["Place Name"])
      };
    });

    res.json(recommendations);
  } catch (error) {
    console.error("Recommendation error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Load data on startup
loadData().catch(err => {
  console.error("Error loading data:", err.message);
});

module.exports = {
  recommend
};
