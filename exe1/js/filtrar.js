var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){

    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            if(nome != this.value){
                paciente.classList.add("invisivel");
            }
            else{
                paciente.classList.remove("invisivel");
            }
        }
    }
    else{ //Para mostrar todos os pacientes quando o campo de pesquisa é limpado pelo usuário.
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
})