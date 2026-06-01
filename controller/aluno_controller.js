const model = require('../model/services/alunos_services');
exports.listar = (req, res) => {
    model.listarAlunos((resultado) => {
        res.json(resultado);
    });
};

exports.salvar = (req, res) => {
    model.cadastrarAluno(req.body, (novoAluno) => {
        res.status(201).json(novoAluno);
    });
};

exports.excluir = (req, res) => {

    const id = parseInt(req.params.id);
    model.excluirAluno(id);
    res.json({
        mensagem: "Aluno excluído"
    });

};