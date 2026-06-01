// repositories
const fs = require("fs");
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


exports.salvarTodos = (lista) => {
    fs.writeFileSync("alunos.json", JSON.stringify(lista, null, 2));
};