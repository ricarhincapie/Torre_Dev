#!/usr/bin/python3
""" Module to define API routes
"""

from api.v1.views import app_views
from flask import jsonify, request, abort, make_response
import requests

@app_views.route('/status', methods=['GET'], strict_slashes=False)
def status():
    """ Status of API """
    return jsonify({"status": "OK"})

@app_views.route('/<user_id>', methods=['GET'], strict_slashes=False)
def user_fetch(user_id):
    """ Takes Torre username, fetches API and returns points """
    req_string = "https://bio.torre.co/api/bios/" + str(user_id)
    response = requests.get(req_string)
    
    if response.status_code > 399:
        return jsonify({"status": "error"})
    
    my_response = response.json()
    return jsonify(my_response.get('stats'))
