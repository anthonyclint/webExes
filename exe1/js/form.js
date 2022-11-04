var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(event){
	event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var paciente = getPacientFromForm(form);

    var pacienteTr = createTableRow(paciente);

    var erros = checkPacient(paciente);

    if(erros.length > 0){
        showErrorMessage(erros);
        return;
    }
    else{
        var tabela = document.querySelector("#tabela-pacientes");

        tabela.appendChild(pacienteTr);
    
        form.reset(); // limpa o forms após clicar em adicionar
    }
});

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

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function checkPacient(paciente){
    var erros = [];

    if(checkWeight(paciente.peso)){
        if(checkHeight(paciente.altura)){
            return "";
        }
        else{
            return erros.push("Altura inválida!");
        }
    }
    else{

        if(checkHeight(paciente.altura)){
            return erros.push("Peso inválido!");
        }
        else{
            return erros.push("Peso inválido!", "Altura inválida!");
        }
    }
}