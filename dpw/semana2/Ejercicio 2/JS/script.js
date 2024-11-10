function AnadirResultado(value) {
    document.getElementById('resultado').value += value;
}

function BorrarResultado() {
    document.getElementById('resultado').value = '';
}

function CalcularResultado() {
    const resultField = document.getElementById('resultado');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}