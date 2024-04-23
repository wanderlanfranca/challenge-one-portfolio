document.getElementById('formContato').addEventListener('input', function() {
    validateForm();
});

function validateForm() {
    let isValid = true;
    isValid &= validateNome();
    isValid &= validateEmail();
    isValid &= validateAssunto();
    isValid &= validateMensagem();

    document.getElementById('enviarBtn').disabled = !isValid;
}

function validateNome() {
    const nome = document.getElementById('nome').value;
    const nomeErro = document.getElementById('nomeErro');
    if (!nome) {
        nomeErro.textContent = "O campo nome é obrigatório.";
        return false;
    } else if (nome.length > 50) {
        nomeErro.textContent = "O nome não pode exceder 50 caracteres.";
        return false;
    } else {
        nomeErro.textContent = "";
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailErro = document.getElementById('emailErro');
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (!email) {
        emailErro.textContent = "O campo e-mail é obrigatório.";
        return false;
    } else if (!emailPattern.test(email)) {
        emailErro.textContent = "O formato do e-mail é inválido.";
        return false;
    } else {
        emailErro.textContent = "";
        return true;
    }
}

function validateAssunto() {
    const assunto = document.getElementById('assunto').value;
    const assuntoErro = document.getElementById('assuntoErro');
    if (!assunto) {
        assuntoErro.textContent = "O campo assunto é obrigatório.";
        return false;
    } else if (assunto.length > 50) {
        assuntoErro.textContent = "O assunto não pode exceder 50 caracteres.";
        return false;
    } else {
        assuntoErro.textContent = "";
        return true;
    }
}

function validateMensagem() {
    const mensagem = document.getElementById('mensagem').value;
    const mensagemErro = document.getElementById('mensagemErro');
    if (!mensagem) {
        mensagemErro.textContent = "O campo mensagem é obrigatório.";
        return false;
    } else if (mensagem.length > 300) {
        mensagemErro.textContent = "A mensagem não pode exceder 300 caracteres.";
        return false;
    } else {
        mensagemErro.textContent = "";
        return true;
    }
}

function resetForm() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('assunto').value = '';
    document.getElementById('mensagem').value = '';
    document.getElementById('nomeErro').textContent = '';
    document.getElementById('emailErro').textContent = '';
    document.getElementById('assuntoErro').textContent = '';
    document.getElementById('mensagemErro').textContent = '';
}

document.getElementById('enviarBtn').addEventListener('click', function() {
    if (document.getElementById('formContato').checkValidity()) {
        // Aqui você pode adicionar a função de envio, como AJAX, fetch ou o que preferir.
        alert("Formulário enviado com sucesso!");
        resetForm();
        document.getElementById('enviarBtn').disabled = true; // Desabilita o botão novamente após o envio
    }
});
