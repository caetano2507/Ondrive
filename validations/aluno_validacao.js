function validarAluno(req, res, next) {

    const { nome, trabalho, prova } = req.body;

    // valida nome
    if (!nome || nome.trim() === "") {
        return res.status(400).json({
            erro: "O nome é obrigatório"
        });
    }

    // valida nota trabalho
    if (trabalho === undefined || isNaN(trabalho)) {
        return res.status(400).json({
            erro: "A nota do trabalho é obrigatória"
        });
    }

    if (trabalho < 0 || trabalho > 10) {
        return res.status(400).json({
            erro: "A nota do trabalho deve estar entre 0 e 10"
        });
    }

    // valida nota prova
    if (prova === undefined || isNaN(prova)) {
        return res.status(400).json({
            erro: "A nota da prova é obrigatória"
        });
    }

    if (prova < 0 || prova > 10) {
        return res.status(400).json({
            erro: "A nota da prova deve estar entre 0 e 10"
        });
    }

    next();
}

module.exports = validarAluno;