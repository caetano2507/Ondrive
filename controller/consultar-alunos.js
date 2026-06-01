function criaLinhaAluno(aluno) {
    var tr = document.createElement("tr");
    
    // Vincula o ID do banco de dados com a linha HTML
    tr.dataset.id = aluno.id;
 
    // Exemplo de como colocar o botão com a classe certa dentro da linha
    tr.innerHTML = `
        <td>${aluno.nome}</td>
        <td>${aluno.trabalho}</td>
        <td>${aluno.prova}</td>
        <td>${aluno.media || "-"}</td>
        <td>
            <button type="button" class="btn-excluir">Excluir</button>
        </td>
    `;
    
    return tr;
}