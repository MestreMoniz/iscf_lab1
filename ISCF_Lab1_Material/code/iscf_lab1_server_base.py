# TODO LAB 1 - Add your imports here
from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from requests import post
import json

DB_adress= "https://isfc-22-23-default-rtdb.europe-west1.firebasedatabase.app/accel.json"



# TODO LAB 1 - Implement the necessary function to write data to your Firebase real-time database
def push_data(dicData):

    json_object = json.dumps(dicData, indent = 4)
    resp = post(DB_adress,json =json_object)
    return resp,json_object

# TODO LAB 1 - Implement the API resource (Accel) that should at least handle POST requests with the data to be stored.
# The data should be stored in the Firebase database using the push_data function. 
# The POST request contains a "data" argument that is a dictionary with the data to be stored.
# The API should return the data that was stored in the database and a 201 status code. 


# TODO LAB 1 - add api resource and corresponding /data route to receive a JSON object with the data to be stored

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return None
    
    def post(self):
        request_data = request.get_json()
        dicData = {
        "x": request_data['data']['x'],
        "y": request_data['data']['y'],
        "z": request_data['data']['z'],
        "timestamp" : request_data['data']['timestamp']
        }

        (resp,json_object) = push_data(dicData)

        if resp == 200:
            return json_object,201
        else :
         Error_msg = "Error {Error_code} ".format(Error_code = "resp")
    
api.add_resource(HelloWorld, '/data')
    
# TODO LAB 1 - Add your main section here
if __name__ == '__main__':
    app.run(debug=True)




