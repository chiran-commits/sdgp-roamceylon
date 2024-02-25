import spacy
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/keywords', methods=['POST'])

def get_description():
    data = request.get_json()
    description_frontend = data.get('descriptionData')
    nlp = spacy.load("en_core_web_lg")
    description = "I would like the weather to be warm , where the cost of living would be around 100,000 rupees and the WIFI connectivity around 50mbps"
    weather=""
    cost_of_living=""
    connectivity=""
    descriptionList=[]
    descriptionList=description.split(" ")
    cost_of_living = nlp("50,000") #converts the string "50,000" to a NLP object
    connectivity = nlp("50mbps")
    weather = nlp("cold tropical warm windy")

    
    for word in descriptionList: #iterates through the array
        word_similarity1 = nlp(word).similarity(cost_of_living) #checks the word similarity
        word_similarity2 = nlp(word).similarity(connectivity)
        word_similarity3 = nlp(word).similarity(weather)

        if word_similarity1 > 0.8:
            print("cost of living: " + word)

        if word_similarity2 > 0.8:
            print("connectivity: " + word)

        if word_similarity3 > 0.8 and word != "weather":
            print("weather: " + word)
    
    return jsonify({'message': 'Description received successfully'})
    
if __name__=='__main__':
    app.run(debug=True)