var btnConsultar = document.querySelector("#btnConsultarAluno");

function listarAlunos() {

    var tbody = document.querySelector("#tabela-alunos tbody");

    tbody.innerHTML = "";

    obterAlunos().then(function(listaAlunos) {

        console.log(listaAlunos);

        listaAlunos.forEach(function(aluno) {

            var linha = criaLinhaAluno(aluno);

            tbody.appendChild(linha);

        });

    });

}

btnConsultar.addEventListener("click", function () {

    listarAlunos();

});