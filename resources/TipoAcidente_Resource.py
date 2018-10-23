from flask_restful import Resource, marshal_with, abort
from database.PgConector import *

class TipoAcidente(Resource):

    # GET Acidentes
    def get(self):


        sql = 'select tipo_acidente, count(tipo_acidente) from public."MyData" group by tipo_acidente'

        cur.execute(sql)
        acidentePesquisa = cur.fetchall()
        #acidentePesquisa = cur.fetchall()[0]


        return acidentePesquisa
