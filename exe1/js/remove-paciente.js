var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove(); //identificar na tabela quem recebeu o duplo clique, porém não eliminar apenas esse elemento
                                          //mas a linha inteira, por isso parentNode.
    },500); 
});
