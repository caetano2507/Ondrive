const conexao = require("../../database/conexao.js");

exports.listar = (callback) => {
    const sql = "SELECT * FROM aluno";

    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            throw erro;
        }

        callback(resultado);
    });
};

exports.salvar = (aluno, callback) => {
    const sql = `
        INSERT INTO aluno (nome, trabalho, prova)
        VALUES (?, ?, ?)
    `;

    conexao.query(
        sql,
        [aluno.nome, aluno.trabalho, aluno.prova],
        (erro, resultado) => {
            if (erro) {
                throw erro;
            }

            aluno.id = resultado.insertId;
            callback(aluno);
        }
    );
};