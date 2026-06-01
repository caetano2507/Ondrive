//o que vem do form-aluno
    function criaLinhaAluno(aluno) {
        var tr = document.createElement("tr");
        tr.classList.add("aluno");
        tr.dataset.id = aluno.id;

        var tdNome = document.createElement("td");
        tdNome.classList.add("td-nome");
        tdNome.textContent = aluno.nome;

        var tdTrabalho = document.createElement("td");
        tdTrabalho.classList.add("td-trabalho");
        tdTrabalho.textContent = aluno.notaTrabalho;

        var tdProva = document.createElement("td");
        tdProva.classList.add("td-prova");
        tdProva.textContent = aluno.notaProva;

        var tdMedia = document.createElement("td");
        tdMedia.classList.add("td-media");
        tdMedia.textContent = calcularMedia(aluno.notaTrabalho, aluno.notaProva);

        var tdAcoes = document.createElement("td");
        tdAcoes.classList.add("td-acoes");

        var btnExcluir = document.createElement("span");
        btnExcluir.classList.add("btn-excluir");
        btnExcluir.textContent = "excluir";

        tdAcoes.appendChild(btnExcluir);

        tr.appendChild(tdNome);
        tr.appendChild(tdTrabalho);
        tr.appendChild(tdProva);
        tr.appendChild(tdMedia);
        tr.appendChild(tdAcoes);

        return tr;
    }

function criaColuna(valor) {
    var coluna = document.createElement("td");
    coluna.textContent = valor;
    return coluna;
}

function criaColunaAcoes() {
    var colunaAcoes = document.createElement("td");
    colunaAcoes.classList.add("td-acoes");

    var botaoExcluir = document.createElement("span");
    botaoExcluir.classList.add("btn-excluir");
    botaoExcluir.textContent = "excluir";

    colunaAcoes.appendChild(botaoExcluir);
    return colunaAcoes;
}

//o que vem do calcula-media
function atualizarMediaNaTabela(trAluno, mediaAluno) {
    var tdMedia = trAluno.querySelector(".td-media");
    tdMedia.textContent = mediaAluno;
}

function marcarAlunoReprovado(trAluno) {
    trAluno.classList.add("aluno-reprovado");
}

function mostrarMensagemErro(trAluno) {
    var tdMedia = trAluno.querySelector(".td-media");
    tdMedia.textContent = "Notas inválidas, verifique.";
}

