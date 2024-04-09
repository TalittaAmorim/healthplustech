function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var horario = document.getElementById('horario').value;
    var telefone = document.getElementById('telefone').value;
    var consulta = document.getElementById('consulta').value;

    // Validar se todos os campos foram preenchidos
    if (nome === "" || horario === "" || telefone === "" || consulta === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Validar horário (formato HH:MM)
    var horarioRegex = /^([01]\d|2[0-3]):?([0-5]\d)$/;
    if (!horarioRegex.test(horario)) {
        alert("Por favor, insira um horário válido no formato HH:MM.");
        return false;
    }

    // Validar consulta (opções limitadas)
    var consultasPermitidas = ["eletrocardiograma", "holter", "ecocardiograma", "ressonância magnética", "tomografia computadorizada", "ultrassom"];
    if (!consultasPermitidas.includes(consulta.toLowerCase())) {
        alert("Por favor, selecione uma opção de consulta válida.");
        return false;
    }

    // Exibir mensagem de sucesso com os dados da consulta
    alert("Consulta marcada com sucesso para " + nome + " às " + horario + ". Entraremos em contato pelo telefone " + telefone + ".");
    return true;
}