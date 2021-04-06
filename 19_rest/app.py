"""
Team SAM (Maddy Andersen and Saqif Abedin)
SoftDev
K19: A RESTful Journey Skyward — working with NASA APIs
2021-04-06
"""
# used slides from class as a guide
from flask import Flask, render_template
import urllib, json
app = Flask(__name__)

# reading in key from key_nasa.txt and storing it as a variable
api_key = open("key_nasa.txt", "r").read()

@app.route("/")
def root():

    # sending an https request to the NASA API
    # used api_key variable to maintain security while accessing API
    u = urllib.request.urlopen("https://api.nasa.gov/planetary/apod?api_key=" + api_key)

    # reading in the data from the request (comes in as json)
    response = u.read()

    # turns json data into python object
    data = json.loads( response )

    # retriving and storing data that we want (about image url and explanation)
    url = data['url']
    exp = data['explanation']

    return render_template("main.html", url = url, explanation = exp)

if __name__ == "__main__":
    app.debug = True
    app.run()
