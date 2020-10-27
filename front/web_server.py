#!/usr/bin/env python3

""" Starts a Flask GenoMeter server """

from flask import Flask, render_template
app = Flask(__name__)

@app.route('/genometer', strict_slashes=False)
def genometer():
    return render_template('index.html')

if __name__ == "__main__":
    """ Main Function """
    app.run(host='0.0.0.0', port=5002, debug=True)
