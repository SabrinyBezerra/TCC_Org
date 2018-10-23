from builtins import print

from flask_restful import Resource, marshal_with, abort
from database.PgConector import *

class BR_Acidente(Resource):

        # GET Acidentes
        def get(self, estado):
            if (estado == "BR.1099"):
                estado = "AC"
            elif (estado == "BR.153"):
                estado = "RO"
            else:
                estado = estado[3] + estado[4]


            cur.execute(
                'select BR, count(BR) from public."MyData" where uf like \'{}\' group by BR'.format(estado))
        
            acidentePesquisa = cur.fetchall()
            # acidentePesquisa = cur.fetchall()[0]

            return acidentePesquisa