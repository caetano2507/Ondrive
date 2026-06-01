// vem do form-aluno
var btnSalvarAluno = document.querySelector("#btnSalvarAluno");
 
if (btnSalvarAluno) {
    btnSalvarAluno.addEventListener("click", function (event) {
        event.preventDefault();
        var frmAluno = document.querySelector("#frmAluno");
        
        // Executa a validação antes de enviar
        if (validarFormularioAluno(frmAluno) == false) {
            return;
        }
 
        var aluno = obtemAlunoDoFormulario(frmAluno);
        console.log("Tentando salvar o aluno:", aluno);
 
        fetch("http://localhost:3000/alunos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(aluno)
        })
        .then(response => {
            console.log("Status da resposta do servidor:", response.status);
            if (!response.ok) {
                throw new Error("Erro na resposta do servidor: " + response.statusText);
            }
            return response.json();
        })
        .then(dados => {
            console.log("Aluno salvo com sucesso no banco:", dados);
            
            // Limpa o formulário
            frmAluno.reset();
            
            // Atualiza a tabela na tela automaticamente
            if (typeof listarAlunos === "function") {
                listarAlunos();
            } else {
                console.warn("A função listarAlunos() não foi encontrada para atualizar a tela.");
            }
        })
        .catch(erro => {
            console.error("Erro crítico ao tentar salvar o aluno via FETCH:", erro);
            alert("Não foi possível salvar o aluno. Verifique se o servidor backend está ligado!");
        });
    });
}
 
function obtemAlunoDoFormulario(frmAluno) {
    // Garante que se o campo estiver vazio, envia 0 ou evita o NaN
    var notaTrabalho = frmAluno.txtTrabalho.value ? parseFloat(frmAluno.txtTrabalho.value) : 0;
    var notaProva = frmAluno.txtProva.value ? parseFloat(frmAluno.txtProva.value) : 0;
 
    return {
        nome: frmAluno.txtNome.value, // Usando o ID correto do input do seu HTML
        trabalho: notaTrabalho,
        prova: notaProva
    };
}
 
function validarFormularioAluno(frmAluno) {
    var divMensagens = document.querySelector("#divMensagens");
    divMensagens.textContent = "";
 
    // Validação do Nome usando o ID correto (txtNome)
    if (!frmAluno.txtNome.value || frmAluno.txtNome.value.trim().length === 0) {
        criaMensagem("Nome inválido. O campo nome é obrigatório.");
        return false;
    }
 
    // Proteção: Caso as funções validarNotaTrabalho/Prova não existam no seu projeto,
    // o código abaixo evita que o sistema trave e faz uma validação básica direta.
    var notaT = frmAluno.txtTrabalho.value;
    if (typeof validarNotaTrabalho === "function") {
        if (validarNotaTrabalho(notaT) == false) {
            criaMensagem("Nota do trabalho inválida.");
            return false;
        }
    } else if (notaT === "" || isNaN(notaT) || notaT < 0 || notaT > 10) {
        criaMensagem("Nota do trabalho precisa ser um número entre 0 e 10.");
        return false;
    }
 
    var notaP = frmAluno.txtProva.value;
    if (typeof validarNotaProva === "function") {
        if (validarNotaProva(notaP) == false) {
            criaMensagem("Nota da prova inválida.");
            return false;
        }
    } else if (notaP === "" || isNaN(notaP) || notaP < 0 || notaP > 10) {
        criaMensagem("Nota da prova precisa ser um número entre 0 e 10.");
        return false;
    }
 
    return true;
}
 
function criaMensagem(texto) {
    var msg = document.createElement("div");
    msg.classList.add("alert", "alert-warning");
    msg.textContent = texto;
 
    document.querySelector("#divMensagens").appendChild(msg);
}