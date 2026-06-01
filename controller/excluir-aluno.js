var tabela = document.querySelector("#tabela-alunos");
 
tabela.addEventListener("click", function (event) {
    var elementoClicado = event.target;
 
    // Se o elemento clicado tiver a classe do botão de excluir
    if (elementoClicado.classList.contains("btn-excluir")) {
        event.preventDefault();
 
        var linha = elementoClicado.closest("tr");
        var idAluno = linha.dataset.id;
 
        // Segurança caso a tr venha sem ID
        if (!idAluno) {
            console.error("Erro: Atributo data-id não foi encontrado na tag <tr>.");
            return;
        }
 
        // Faz o DELETE na API
        fetch(`http://localhost:3000/alunos/${idAluno}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(dados => {
            console.log("Aluno deletado:", dados);
            
            // CHAMA A FUNÇÃO CORRETA PARA ATUALIZAR A TELA
            listarAlunos(); 
        })
        .catch(erro => {
            console.error("Erro ao deletar aluno:", erro);
        });
    }
});
 