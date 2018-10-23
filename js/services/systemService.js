app.factory("systemService", function($http){
    
    var _getUf = function() {
          return $http.get('http://127.0.0.1:5000/api/UF');
    };
     
    var _getBrEstado = function(estado) {
        return $http.get('http://127.0.0.1:5000/api/BR/' + estado);
    };
   
  
   var _getdia = function() {
        return $http.get('http://127.0.0.1:5000/api/dia');
    };

    var _getSexo = function() {
        return $http.get('http://127.0.0.1:5000/api/Sexo');
    };

    var _getCausa = function() {
        return $http.get('http://127.0.0.1:5000/api/CausaAcidente');
    };

    var _getTipo = function() {
        return $http.get('http://127.0.0.1:5000/api/TipoAcidente');
    };

    var _getSexoEstado = function(estado) {
        return $http.get('http://127.0.0.1:5000/api/SexoEst/' + estado);
    };
    
return {
  getdia: _getdia,
  getUf: _getUf,
  getBrEstado: _getBrEstado,
  getSexo: _getSexo,
  getCausa: _getCausa,
  getTipo: _getTipo,
  getSexoEstado: _getSexoEstado
}});