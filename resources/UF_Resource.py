from flask_restful import Resource, marshal_with, abort
from database.PgConector import *

class UF_Acidente(Resource):

    # GET Acidentes
    def get(self):

        sql = 'select uf, count(uf) from public."MyData" group by uf'

        cur.execute(sql)
        acidentePesquisa = cur.fetchall()
        #acidentePesquisa = cur.fetchall()[0]


        return acidentePesquisa
