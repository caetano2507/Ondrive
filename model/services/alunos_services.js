// services/alunosServices.js
const alunosRepository = require("../repositories/alunos_repositorio");

exports.listarAlunos = (callback) => {
    alunosRepository.listar((resultado) => {
        callback(resultado);
    });
};

exports.cadastrarAluno = (aluno) => {
    const alunos = alunosRepository.listar();
    const novoId = alunos.length > 0
        ? alunos[alunos.length - 1].id + 1
        : 1;

    aluno.id = novoId;
    alunos.push(aluno);
    alunosRepository.salvarTodos(alunos);
    return aluno;
};



exports.atualizarAluno = (id, dados) => {
    const alunos = alunosRepository.listar();
    const atualizados = alunos.map(a =>
        a.id == id ? { ...a, ...dados } : a
    );

    alunosRepository.salvarTodos(atualizados);
};

exports.excluirAluno = (id) => {
    const alunos = alunosRepository.listar();
    const novaLista = alunos.filter(a => a.id != id);

    alunosRepository.salvarTodos(novaLista);
};