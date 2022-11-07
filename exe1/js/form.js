var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(event){
	event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var paciente = getPacientFromForm(form); 

    var erros = checkPacient(paciente);

    if(erros.length > 0){
        showErrorMessage(erros);
        return;
    }
    else{
        addPacient(paciente);
    
        form.reset(); // limpa o forms após clicar em adicionar

        var errorMessage = document.querySelector("#mensagens-erro");
        errorMessage.innerHTML = "";
    }
});

function addPacient(paciente){
    var pacienteTr = createTableRow(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function getPacientFromForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function createTableRow(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(createTableColumn(paciente.nome, "info-nome"));
    pacienteTr.appendChild(createTableColumn(paciente.peso, "info-peso"));
    pacienteTr.appendChild(createTableColumn(paciente.altura, "info-altura"));
    pacienteTr.appendChild(createTableColumn(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(createTableColumn(paciente.imc, "info-imc"));

    return pacienteTr;
}

function createTableColumn(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function showErrorMessage(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function checkPacient(paciente){
    var erros = [];

    if(paciente.nome.length == 0) erros.push("O nome não pode ficar em branco!");
    if(!checkWeight(paciente.peso)) erros.push("Peso Inválido!");
    if(!checkHeight(paciente.altura)) erros.push("Altura Inválida!");
    if(paciente.gordura.length == 0) erros.push("A % de gordura não pode ficar em branco!");

    return erros;
}