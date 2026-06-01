var alunos = document.querySelectorAll(".aluno");

for (let i = 0; i < alunos.length; i++) {
    var trAluno = alunos[i];

    var tdTrabalho = trAluno.querySelector(".td-trabalho");
    var trabalho = Number(tdTrabalho.textContent);

    var tdProva = trAluno.querySelector(".td-prova");
    var prova = Number(tdProva.textContent);

    var notaTrabalhoValida = validarNotaTrabalho(trabalho);
    var notaProvaValida = validarNotaProva(prova);

    if (notaTrabalhoValida && notaProvaValida) {
        var mediaAluno = calcularMedia(trabalho, prova);

        atualizarMediaNaTabela(trAluno, mediaAluno);

        if (mediaAluno < 7) {
            marcarAlunoReprovado(trAluno);
        }
    } else {
        mostrarMensagemErro(trAluno);
    }
}