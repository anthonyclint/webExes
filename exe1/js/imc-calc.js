// Exercício 01 - Alterar o nome da página com querySelector
var titulo = document.querySelector(".title");
titulo.textContent = "Nutricare";

//Calcular IMC caso peso e altura sejam válidos e alterar na tabela
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var tdPeso = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAlt = pacientes[i].querySelector(".info-altura");
    var altura = tdAlt.textContent;
    
    var tdImc = pacientes[i].querySelector(".info-imc");
    
    var pesoVal = checkWeight(peso);
    var alturaVal = checkHeight(altura);

    if(!pesoVal){
        pesoVal = false;
        tdPeso.textContent = "Peso inválido!";
        pacientes[i].classList.add("paciente-invalido");
    }
    if(!alturaVal){
        alturaVal = false;
        tdAlt.textContent = "Altura inválida!";
        pacientes[i].classList.add("paciente-invalido");
    }
    
    if(pesoVal && alturaVal){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = (peso/(altura*altura));

    return imc.toFixed(2);
}

function checkWeight(peso){
    if(peso > 0 && peso < 700){
        return true;
    }
    else{
        return false;
    }
}

function checkHeight(altura){
    if(altura > 0 && altura < 3.00){
        return true;
    }
    else{
        return false;
    }
}
