function calcularMedia(notaTrabalho, notaProva) {
    var mediaAluno = (parseFloat(notaTrabalho) + parseFloat(notaProva)) / 2;
    return mediaAluno.toFixed(2);
}

function validarNotaTrabalho(notaTrabalho) {
    if (notaTrabalho.length == 0 || notaTrabalho < 0 || notaTrabalho > 10) {
        console.log("Nota do trabalho inválida");
        return false;
    } else {
        return true;
    }
}

function validarNotaProva(notaProva) {
    if (notaProva.length == 0 || notaProva < 0 || notaProva > 10) {
        console.log("Nota da prova inválida");
        return false;
    } else {
        return true;
    }
}

