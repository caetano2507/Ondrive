var tabela = document.querySelector("#tabela-alunos");

tabela.addEventListener("click", function (event) {

    event.preventDefault();
    event.stopPropagation();

    var elementoClicado = event.target;

    if (elementoClicado.classList.contains("btn-excluir")) {

        var linha = elementoClicado.closest("tr");

        var idAluno = linha.dataset.id;

        fetch(`http://localhost:3000/alunos/${idAluno}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(dados => {

            console.log(dados);

            listarAlunos();

        })
        .catch(erro => {
            console.log(erro);
        });

    }

});