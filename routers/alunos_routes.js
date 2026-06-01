const express = require("express");
const router = express.Router();

const alunosController = require("../controller/aluno_controller");
const validarAluno = require("../validations/aluno_validacao");

//LISTAR
router.get("/", alunosController.listar);

//SALVAR
router.post("/", validarAluno, alunosController.salvar);

//EXCLUIR
router.delete("/:id", alunosController.excluir);

module.exports = router;