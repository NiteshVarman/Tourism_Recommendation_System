from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load dataset
try:
    data = pd.read_csv('d1.csv')
    data['No. of Days Preferred'] = data['No. of Days Preferred'].astype(str)
    
    # Create combined features
    data['Combined_Features'] = (
        data['Type of Tourist Place'] + ' ' + 
        data['Budget'] + ' ' + 
        data['Best Time to Visit'] + ' ' + 
        data['Type of Tour Package'] + ' ' + 
        data['No. of Days Preferred']
    )
    
    # TF-IDF Vectorizer
    tfidf = TfidfVectorizer(stop_words='english')
    tfidf_matrix = tfidf.fit_transform(data['Combined_Features'])
    cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)
    
except Exception as e:
    logger.error(f"Error initializing data: {str(e)}")
    raise

def generate_google_maps_url(place_name):
    """Generate Google Maps search URL for a place."""
    base_url = "https://www.google.com/maps/search/?q="
    return f"{base_url}{place_name.replace(' ', '+')}"

@app.route('/recommend', methods=['POST'])
def recommend():
    """API endpoint for recommendations"""
    try:
        if not request.is_json:
            return jsonify({"error": "Request must be JSON"}), 400
            
        user_input = request.json.get("user_input")
        if not user_input or len(user_input) != 5:
            return jsonify({"error": "Invalid input format"}), 400
            
        # Ensure all inputs are strings
        user_input = [str(item) for item in user_input]
        combined_input = ' '.join(user_input)
        
        # Get similarity scores
        user_tfidf = tfidf.transform([combined_input])
        sim_scores = cosine_similarity(user_tfidf, tfidf_matrix).flatten()
        top_indices = sim_scores.argsort()[-10:][::-1]  # Top 10
        
        recommendations = []
        for idx in top_indices:
            place_name = data.iloc[idx]['Place Name']
            place_url = generate_google_maps_url(place_name)
            
            recommendation = data.iloc[idx].to_dict()
            recommendation['Place URL'] = place_url
            recommendations.append(recommendation)
            
        return jsonify(recommendations)
        
    except Exception as e:
        logger.error(f"Recommendation error: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

@app.route('/')
def home():
    return "Tourism Recommendation System API is running!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
