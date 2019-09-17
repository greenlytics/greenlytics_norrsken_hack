from flask import Flask, request, send_from_directory, make_response, redirect, Response, url_for
from flask_cors import CORS


app = Flask(__name__)
CORS(app, origins='*')


@app.route('/api/get_data', methods=['GET'])
def get_data():
    pass






if __name__ == '__main__':
    app.run(debug=True)
