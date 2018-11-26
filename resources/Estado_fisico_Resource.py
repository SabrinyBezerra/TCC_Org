from builtins import print

from flask_restful import Resource, marshal_with, abort
from database.PgConector import *


class Estado_fisico_Resource(Resource):

    # GET Acidentes
    def get(self, estado):
        if (estado == "BR.1099"):
            estado = "AC"
        elif (estado == "BR.153"):
            estado = "RO"
        else:
            estado = estado[3] + estado[4]

        cur.execute(
            'select estado_fisico, count(estado_fisico) from public."MyData" where uf like \'{}\' group by estado_fisico'.format(estado))

        acidentePesquisa = cur.fetchall()
        # acidentePesquisa = cur.fetchall()[0]

        return acidentePesquisa