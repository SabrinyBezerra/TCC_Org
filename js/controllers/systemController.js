app.controller('systemCtrl', function($scope, systemService){
    
    let canvas = document.getElementById('myChart')
    let ctx = document.getElementById("myChart").getContext('2d');
    let myChart = undefined // Utilizado para limpar os gráficos

    limparGrafico = function(){
        if(myChart != undefined){
            myChart.destroy();
        }
        
    }

 //Criando grafico de acidentes por UF
    $scope.gerarUF = function(){
        console.log('UF')
        limparGrafico()
        $scope.requisicao = true;
        systemService.getUf().
        then(function successCalback(response){
            $scope.requisicao = false;

            let option = {
                title: {
                   display: true,
                   fontSize: 28,
                   text: 'Número de acidentes por UF'
               },
               legend: {
                   display: true,
                   position: 'bottom',
       
               },
               responsive: true
           }

            criaGrafico(response.data,'pie',option)
        },
        function errorCallback(response){
            console.error('Erro ' + response);
        });
    } 
   
   //Criando grafico de acidentes por BR
   $scope.gerarBR = function(){ 
    console.log('BR')
    limparGrafico()
    $scope.requisicao = true;
    systemService.getBR().
    then(function successCalback(response){
        $scope.requisicao = false;

            let option = {
                title: {
                   display: true,
                   fontSize: 28,
                   text: 'Número de acidentes por BR'
               },
               legend: {
                   display: false,
                   position: 'bottom',
       
               },
               responsive: true
           }

            criaGrafico(response.data,"bar",option)
    },
    function errorCallback(response){
        console.error('Erro ' + response);
    });
} 

 //Criando grafico de acidentes por sexo
 $scope.gerarSexo = function(){ 
    console.log('Sexo')
    limparGrafico()
    $scope.requisicao = true;
    systemService.getSexo().
    then(function successCalback(response){
        $scope.requisicao = false;

            let option = {
                title: {
                   display: true,
                   fontSize: 28,
                   text: 'Número de acidentes por Sexo'
               },
               legend: {
                   display: true,
                   position: 'bottom',
       
               },
               responsive: true
           }
            
            criaGrafico(response.data,"doughnut",option)
    },
    function errorCallback(response){
        console.error('Erro ' + response);
    });
} 

 //Criando grafico de acidentes por Causa
 $scope.gerarCausa = function(){ 
    console.log('Causa')
    limparGrafico()
    $scope.requisicao = true;
    systemService.getCausa().
    then(function successCalback(response){
        $scope.requisicao = false;

            let option = {
                title: {
                   display: true,
                   fontSize: 28,
                   text: 'Causa dos Acidentes'
               },
               legend: {
                   display: true,
                   position: "bottom",
       
               },
               responsive: true
           }
            
            criaGrafico(response.data,"doughnut",option)
    },
    function errorCallback(response){
        console.error('Erro ' + response);
    });
} 
 //Criando grafico de acidentes por Tipo
 $scope.gerarTipo = function(){ 
    console.log('Tipo')
    limparGrafico()
    $scope.requisicao = true;
    systemService.getTipo().
    then(function successCalback(response){
        $scope.requisicao = false;

            let option = {
                title: {
                   display: true,
                   fontSize: 28,
                   text: 'Tipos de Acidentes'
               },
               legend: {
                   display: true,
                   position: 'bottom',
       
               },
               responsive: true
           }
            
            criaGrafico(response.data,"pie",option)
    },
    function errorCallback(response){
        console.error('Erro ' + response);
    });
} 
//Criando grafico de acidentes por Dia da Semana 
 $scope.gerarDia = function(){ 
    console.log('dia')
    limparGrafico()
    $scope.requisicao = true;
    systemService.getdia().
    then(function successCalback(response){
        $scope.requisicao = false;

            let option = {
                title: {
                   display: true,
                   fontSize: 28,
                   text: 'Número de acidentes por Dia'
               },
               legend: {
                   display: false,
                   position: 'bottom',
       
               },
               responsive: true
           }

            criaGrafico(response.data,"bar",option)
    },
    function errorCallback(response){
        console.error('Erro ' + response);
    });
} 

randomCor = function(numCor){
    let hexadecimais = '0123456789ABCDEF';
    let corRandom = '#';
    let arrayCores = [];
  
    // Pega um número aleatório no array acima
    while(numCor >= 0){
        for (let i = 0; i < 6; i++ ) {
            corRandom += hexadecimais[Math.floor(Math.random() * 16)];
        }
        arrayCores.push(corRandom)
        corRandom = '#'
        numCor--;
    }
    return arrayCores;
}

criaGrafico = function(acidente,tipoGrafico, options){
    console.log(acidente)
    let numArray = 0;
    let acidentesData = []
    let acidentesLabel = []
    
    for(ac in acidente){
        acidentesLabel.push(acidente[ac][0])
        acidentesData.push(acidente[ac][1])
        numArray++;
    }

    console.log('OK', acidente)
        myChart = new Chart(ctx, {
            type: tipoGrafico,
            data: {
              labels: acidentesLabel,
              datasets: [{
                backgroundColor: randomCor(numArray),
                data: acidentesData
              }]
            },
            options: options
          });
   };

})