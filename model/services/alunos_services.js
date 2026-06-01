// services/alunosServices.js
const alunosRepository = require("../repositories/alunos_repositorio");

exports.listarAlunos = (callback) => {
    alunosRepository.listar(callback);
};

exports.cadastrarAluno = (aluno, callback) => {
    alunosRepository.salvar(aluno, callback);
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