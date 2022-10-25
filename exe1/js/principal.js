// Exercício 01 - Alterar o nome da página com querySelector
var titulo = document.querySelector(".title");
titulo.textContent = "Nutricare";

//Calcular IMC
var paciente = document.querySelector("#primeiroPac");
var tdNome = paciente.querySelector(".info-nome");
var nome = tdNome.textContent;

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAlt = paciente.querySelector(".info-altura");
var altura = tdAlt.textContent;

var imc = (peso/(altura*altura));

console.log("Nome: " + nome);
console.log("Peso: " + peso);
console.log("Altura: " + altura);
console.log("IMC: " + imc);
