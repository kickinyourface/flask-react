from flask import Flask, jsonify, request
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilitar CORS para todas las rutas

@app.route('/api/search_books', methods=['GET'])
def search_books():
    query = request.args.get('q')
    if not query:
        return jsonify({'error': 'Missing query parameter'}), 400
    
    max_results = request.args.get('maxResults', default=10, type=int)  # Obtener el parámetro maxResults, si no se proporciona, el valor predeterminado será 10
    start_index = request.args.get('startIndex', default=0, type=int)  # Obtener el parámetro startIndex, si no se proporciona, el valor predeterminado será 0

    google_books_api_url = f'https://www.googleapis.com/books/v1/volumes?q={query}&maxResults={max_results}&startIndex={start_index}'
    response = requests.get(google_books_api_url)

    if response.status_code == 200:
        data = response.json()
        return jsonify(data)
    else:
        return jsonify({'error': 'Failed to fetch data from Google Books API'}), 500


if __name__ == '__main__':
    app.run(port=5000, debug=True)
