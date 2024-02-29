const botaoTema = document.getElementById('botaoTema');
const circulo = document.getElementById('botaoTema__circulo');
const body = document.querySelector('body');
const mensagemInput = document.getElementById('mensagemInput');
const btn1 = document.getElementById('criptografar');
const btn2 = document.getElementById('descriptografar');
const caixa = document.getElementById('caixa');
const mensagemOutput = document.getElementById('mensagemOutput');
const btn3 = document.getElementById('copiar');
const rodape = document.querySelector('footer');

function alternarTema(){
    botaoTema.classList.toggle('dark');
    circulo.classList.toggle('dark');
    body.classList.toggle('dark');
    mensagemInput.classList.toggle('dark');
    btn1.classList.toggle('dark');
    btn2.classList.toggle('dark');
    caixa.classList.toggle('dark');
    mensagemOutput.classList.toggle('dark');
    btn3.classList.toggle('dark');
    rodape.classList.toggle('dark');
}

function validaTexto(texto) {
    // Verifica se o texto contém apenas letras minúsculas e espaços
    return /^[a-z ]+$/.test(texto);
}

function criptografar() {
    // Obter o texto de entrada
    var mensagemInput = document.getElementById('mensagemInput').value;

    // Verificar se o texto contém apenas letras minúsculas
    if (validaTexto(mensagemInput)) {
        // Substituir as vogais conforme as regras
        var mensagemCriptografada = mensagemInput
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        // Exibir o texto criptografado no campo de saída
        var mensagemOutput = document.getElementById('mensagemOutput');
        mensagemOutput.value = mensagemCriptografada;

        // Exibir a seção de resultado
        esconderConteudo();
        mostrarTexto();
    } else {
        // Exibir mensagem de erro ou tomar ação apropriada
        alert('Digite apenas letras minúsculas, sem caracteres especiais.');
    }
}

function descriptografar() {
    var mensagemInput = document.getElementById('mensagemInput').value;
    var mensagemDescriptografada = mensagemInput
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    var mensagemOutput = document.getElementById('mensagemOutput');
    mensagemOutput.value = mensagemDescriptografada;

    esconderConteudo();
    mostrarTexto();
}

function esconderConteudo(){
    let originText = document.getElementById('originText');
    let imagemMenino = document.getElementById('imagem-menino');

    originText.style.display = 'none';
    imagemMenino.style.display = 'none';
}

function mostrarTexto() {
    document.getElementById('novoTexto').style.display = 'block';
    document.getElementById('copiar').style.display = 'block';
}

function copiar() {
    let textoEntrada = document.getElementById('mensagemInput');
    let textoSaida = document.getElementById('mensagemOutput');

    textoSaida.select();
    document.execCommand('copy');
    alert('Texto copiado!');
    textoEntrada.value = '';
}