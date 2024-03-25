import spacy
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/nlp": {"origins": "*"}}) # Enable CORS for the /nlp route

@app.route('/')

def message():
    return "NLP code is hosted and working!"

@app.route('/nlp', methods=['POST'])

def get_description():
    data = request.get_json()
    #return str(data["desc"])
    nlp = spacy.load("en_core_web_md")
    description = str(data["desc"])
    weather=""
    cost_of_living=""
    connectivity=""
    descriptionList=[]
    descriptionList=description.split(" ")
    cost_of_living = nlp("50000") #converts the string "50000" to a NLP object
    connectivity = nlp("mbps")
    weather = nlp("cold tropical warm windy")
    wifi=""
    weathertype=""
    costOfLiving=""
    locations=[]

    for word in descriptionList: #iterates through the array
        word_similarity1 = nlp(word).similarity(cost_of_living) #checks the word similarity
        wifi_code = word[-4:]
        word_similarity2 = nlp(wifi_code).similarity(connectivity)
        word_similarity3 = nlp(word).similarity(weather)
        #locations.append(word)

        if word_similarity1 > 0.8:
            #locations.append(word)
            if (int(word)>50000 and int(word)<=200000):
                costOfLiving="average"

            if (int(word)<=50000 and int(word)>0):
                costOfLiving="low"

            if (int(word)>200000):
                costOfLiving="high"

        if word_similarity2 > 0.9:
            #locations.append(word)
            word =word[:-4]
            if (int(word)>25 and int(word)<=50):
                wifi="average"

            if (int(word)<=25 and int(word)>0):
                wifi="low"

            if (int(word)>50):
                wifi="high"


        if word_similarity3 > 0.6 and word != "weather":
            #locations.append(word)
            if (word.lower()=="tropical"):
                weathertype="tropical"

            if (word.lower()=="cold"):
                weathertype="cold"

            if (word.lower()=="warm" or word.lower()=="hot" or word.lower()=="sunny"):
                weathertype="warm"

            if (word.lower()=="windy"):
                weathertype="windy"

    if (costOfLiving=="high" and (wifi=="average" or wifi=="high" ) and weathertype=="warm"):
        locations.append("colombo")
        locations.append("kandy")

    if (costOfLiving=="low" and (wifi=="low" or wifi=="average") and weathertype=="warm"):
        locations.append("matara")

    if (costOfLiving=="high" and (wifi=="average" or wifi=="low") and weathertype=="tropical"):
        locations.append("galle")
        locations.append("arugambay")

    if (costOfLiving=="average" and (wifi=="average" or wifi=="low") and weathertype=="tropical"):
        locations.append("trincomalee")

    if ((costOfLiving=="high" or costOfLiving=="average" ) and (wifi=="average" or wifi=="low") and weathertype=="cold"):
        locations.append("nuwaraeliya")
        locations.append("ella")

    if (costOfLiving=="low" and (wifi=="average" or wifi=="low") and weathertype=="warm"):
        locations.append("jaffna")
        locations.append("anuradhapura")


    return jsonify({"locations":locations})

if __name__=='__main__':
    app.run(debug=True)