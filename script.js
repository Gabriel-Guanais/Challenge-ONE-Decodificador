// CRIPTOGRAFAR FUNCAO
function criptografarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// DESCRIPTOGRAFAR FUNCAO
function descriptograTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

document.getElementById('bnt__criptografar').addEventListener('click', function () {
    document.getElementById('imgAnjo').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('btnCopia').style.display = 'block';

    var textoOriginal = document.getElementById('textoOriginal').value;
    var textoCriptografado = criptografarTexto(textoOriginal);
    document.getElementById('resultado').textContent = textoCriptografado;
});

document.getElementById('bnt__descriptografar').addEventListener('click', function () {
    document.getElementById('imgAnjo').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('btnCopia').style.display = 'block';

    var textoOriginal = document.getElementById('textoOriginal').value;
    var textoDescriptografar = descriptograTexto(textoOriginal);
    document.getElementById('resultado').textContent = textoDescriptografar;
});

document.getElementById('btnCopia').addEventListener('click', function () {
    var texto = document.getElementById('resultado').innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado!');
    });
});

document.getElementById('textoOriginal').addEventListener('input', function () {
    var textoOriginal = document.getElementById('textoOriginal').value;

    if (textoOriginal === '') {
        document.getElementById('imgAnjo').style.display = 'block';
        document.getElementById('resultado').style.display = 'none';
        document.getElementById('btnCopia').style.display = 'none';
    }
});

// Desabilitar letras maiúsculas
document.getElementById('textoOriginal').addEventListener('input', function () {
    this.value = this.value.toLowerCase();
});