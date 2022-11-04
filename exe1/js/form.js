var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(event){
	event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var paciente = getPacientFromForm(form);

    var pacienteTr = createTableRow(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset(); // limpa o forms após clicar em adicionar
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