# Team MYK(olyk) — Maddy Andersen, Kelly Huang, Yi ling Wu
# SoftDev
# K13 - Template for Success: Programming an updated Flask app based on occupations.csv
# 2020-10-17

# code from Team Gummy Bears (Kelly and Dragos)
import csv, random
from flask import Flask, render_template
app = Flask(__name__) # create instance of class Flask

# converts occuptation.csv file into a dictionary
dictio = {}
with open('data/occupations.csv', 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        job_name = row['Job Class']
        if job_name == 'Total':
            break
        percentage = float(row['Percentage'])
        dictio[job_name] = percentage

# returns a random occupation, weighted
def random_occupation():
    return random.choices(list(dictio.keys()), list(dictio.values()), k=1)[0]

# turns the dictionary keys and values into separate lists
list_keys = list(dictio.keys())
list_values = list(dictio.values())
range = len(list_keys) # variable used in templating file for loop

@app.route("/")
def hello_world():
    return "Please visit localhost:5000/occupyflaskst"

@app.route("/occupyflaskst")
def hello_world2():
    print("the __name__ of this module is... ")
    print(__name__)
    selectedOccupation = random_occupation()
    # communicates with templating file
    return render_template('tablified.html', occupation= selectedOccupation,
        total= range, keys= list_keys, values= list_values)

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()
