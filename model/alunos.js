function obterAlunos() {
    return fetch("http://localhost:3000/alunos")
        .then(res => res.json());
}




