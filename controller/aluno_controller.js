const model = require('../model/services/alunos_services');
exports.listar = (req, res) => {
    model.listarAlunos((resultado) => {
        res.json(resultado);
    });
};

exports.salvar = (req, res) => {
    const novoAluno = model.cadastrarAluno(req.body);
    res.status(201).json(novoAluno);
};

exports.excluir = (req, res) => {

    const id = parseInt(req.params.id);
    model.excluirAluno(id);
    res.json({
        mensagem: "Aluno excluído"
    });

};