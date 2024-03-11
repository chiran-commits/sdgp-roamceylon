import spacy
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/nlp', methods=['POST'])

def get_description():
    data = request.get_json()
    description_frontend = data.get('descriptionData')
    nlp = spacy.load("en_core_web_lg")
    description = description_frontend
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
    locations=["kandy"]
    
    for word in descriptionList: #iterates through the array
        word_similarity1 = nlp(word).similarity(cost_of_living) #checks the word similarity
        word_similarity2 = nlp(word).similarity(connectivity)
        word_similarity3 = nlp(word).similarity(weather)

        if word_similarity1 > 0.8:
            #print("cost of living: " + word)
            if (int(word)>=100000 and int(word)<250000):
                costOfLiving="average"

            if (int(word)<100000 and int(word)>0):
                costOfLiving="low"

            if (int(word)>=250000):
                costOfLiving="high"

        if word_similarity2 > 0.6:
            #print("connectivity: " + word)
            word =word[:-4]
            if (int(word)>50 and int(word)<100):
                wifi="average"

            if (int(word)<=50 and int(word)>0):
                wifi="low"

            if (int(word)>=100):
                wifi="high"
        

        if word_similarity3 > 0.6 and word != "weather":
            #print("weather: " + word)
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

    if (costOfLiving=="low" and wifi=="average" and weathertype=="warm"):
        locations.append("matara")

    if (costOfLiving=="high" and wifi=="average" and weathertype=="tropical"):
        locations.append("galle")
        locations.append("arugambay")

    if (costOfLiving=="average" and wifi=="average" and weathertype=="tropical"):
        locations.append("trincomalee")

    if ((costOfLiving=="high" or costOfLiving=="average" ) and wifi=="average" and weathertype=="cold"):
        locations.append("nuwaraeliya")
        locations.append("ella")

    if (costOfLiving=="low" and wifi=="average" and weathertype=="warm"):
        locations.append("jaffna")
        locations.append("anuradhapura")

    
    return jsonify({locations})
    
if __name__=='__main__':
    app.run(debug=True)