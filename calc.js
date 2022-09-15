var valorTela = document.getElementById("resultado")

function calc(tipo, value) {
    if (value === "=") {
        if (ehOperacao((valorTela.value).slice(-1))) {
            valorTela.value = (valorTela.value).slice(0, -1)
            valorTela.value = eval(valorTela.value)
        } else {
            valorTela.value = eval(valorTela.value)
        }
        
    } else {
        if (tipo == "operacao" &&
            (ehOperacao((valorTela.value).slice(-1)))) {
            valorTela.value = (valorTela.value).slice(0, -1)
            valorTela.value += value
        } else {
            valorTela.value += value;
        }
    }
}
function limpaTela() {
    valorTela.value = "";
}

function apagaUltimo(){
    valorTela.value = (valorTela.value).slice(0, -1)
}

function ehOperacao(value) {
    if (value == "+"
        || value == "-"
        || value == "*"
        || value == "/") {
        return true
    } else {
        return false
    }
}