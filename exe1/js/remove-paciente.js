var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(){
    event.target.parentNode.remove(); //identificar na tabela quem recebeu o duplo clique, porém não eliminar apenas esse elemento
})                                    //mas a linha inteira, por isso parentNode.
