from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import requests
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the dataset
data = pd.read_csv('d1.csv')

# Ensure 'No. of Days Preferred' is treated as a string
data['No. of Days Preferred'] = data['No. of Days Preferred'].astype(str)

# Preprocessing: Combine relevant columns into a single feature
data['Combined_Features'] = (
    data['Type of Tourist Place'] + ' ' + 
    data['Budget'] + ' ' + 
    data['Best Time to Visit'] + ' ' + 
    data['Type of Tour Package'] + ' ' + 
    data['No. of Days Preferred']
)

# Convert the combined features into a matrix of TF-IDF features
tfidf = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf.fit_transform(data['Combined_Features'])

# Compute the cosine similarity matrix
cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)

# Get API key from environment variable
API_KEY = "AlzaSyKzB9jneINiFTU1C4nHpKmNKDC5ieGebYK"

# Function to get place ID
def get_place_id(place_name):
    url = f"https://maps.gomaps.pro/maps/api/place/findplacefromtext/json?input={place_name}&inputtype=textquery&key={API_KEY}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        if data.get('status') == 'OK' and 'candidates' in data and data['candidates']:
            return data['candidates'][0].get('place_id')
    
    return None

# Function to get the place details (URL) from the place ID
def get_place_url(place_id):
    url = f"https://maps.gomaps.pro/maps/api/place/details/json?key={API_KEY}&place_id={place_id}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        if data.get('status') == 'OK' and 'result' in data:
            return data['result'].get('url', '')
    
    return ''

# Function to get recommendations along with place URLs
def get_recommendations(user_input):
    combined_input = ' '.join(user_input)
    user_tfidf = tfidf.transform([combined_input])
    sim_scores = cosine_similarity(user_tfidf, tfidf_matrix).flatten()
    top_indices = sim_scores.argsort()[-10:][::-1]  # Get top 10 recommendations

    recommendations = []
    for idx in top_indices:
        place_name = data.iloc[idx]['Place Name']
        place_id = get_place_id(place_name)
        place_url = get_place_url(place_id) if place_id else ''

        recommendation = data.iloc[idx].to_dict()
        recommendation['Place URL'] = place_url
        recommendations.append(recommendation)

    return recommendations

# API endpoint to get recommendations
@app.route('/recommend', methods=['POST'])
def recommend():
    user_input = request.json.get("user_input", [])
    if not user_input:
        return jsonify({"error": "Invalid input"}), 400
    
    recommendations = get_recommendations(user_input)
    return jsonify(recommendations)


# Default route
@app.route('/')
def home():
    return "Welcome to the Tourism Recommendation System API!"

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)