from flask_restful import Resource, marshal_with, abort
from database.PgConector import *

class TipoAcidente(Resource):

    # GET Acidentes
    def get(self):


        sql = 'select tipo_acidente, count(tipo_acidente) from public."MyData" group by tipo_acidente'

        cur.execute(sql)
        acidentePesquisa = cur.fetchall()
        #acidentePesquisa = cur.fetchall()[0]


        """
        acidente = Acidente(acidentePesquisa[0], acidentePesquisa[1], acidentePesquisa[2], acidentePesquisa[3],
                            acidentePesquisa[4], acidentePesquisa[5], acidentePesquisa[6], acidentePesquisa[7],
                            acidentePesquisa[8].strip(" "), acidentePesquisa[9], acidentePesquisa[10].strip(" "),
                            acidentePesquisa[11], acidentePesquisa[12].strip(" "), acidentePesquisa[13],
                            acidentePesquisa[14].strip(" "), acidentePesquisa[15].strip(" "),
                            acidentePesquisa[16].strip(" "), acidentePesquisa[17].strip(" "),
                            acidentePesquisa[18].strip(" "), acidentePesquisa[19].strip(" "), acidentePesquisa[20],
                            acidentePesquisa[21].strip(" "), acidentePesquisa[22].strip(" "), acidentePesquisa[23],
                            acidentePesquisa[24].strip(" "), acidentePesquisa[25].strip(" "), acidentePesquisa[26],
                            acidentePesquisa[27].strip(" "), acidentePesquisa[28], acidentePesquisa[29],
                            acidentePesquisa[30], acidentePesquisa[31], acidentePesquisa[32], acidentePesquisa[33])
        """
        return acidentePesquisa
