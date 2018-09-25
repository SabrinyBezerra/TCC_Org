app.factory("systemService", function($http){
    
    var _getUf = function() {
          return $http.get('http://127.0.0.1:5000/api/UF');
    };
     
    var _getBR = function() {
        return $http.get('http://127.0.0.1:5000/api/BR');
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

return {
  getdia: _getdia,
  getUf: _getUf,
  getBR: _getBR,
  getSexo: _getSexo,
  getCausa: _getCausa,
  getTipo: _getTipo
}});