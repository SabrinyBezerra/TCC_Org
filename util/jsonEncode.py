import json
from bson import ObjectId

#transformar a saida e Json, para que seja compreendida pelo sotwere
class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstanc.e(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)