const { Router } = require("express")
const PessoaController = require("../controller/PessoaController")

const router = Router()
router
.get("/pessoas", PessoaController.pegaTodasAsPessoas)
.get("/pessoas/:id", PessoaController.pegaUmaPessoa)
.post("/pessoas", PessoaController.criaPessoa)
.put("/pessoas/:id", PessoaController.atualizaPessoa)
.delete("/pessoas/:id", PessoaController.deletaPessoa)
.get("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.pegaUmaMatricula) //matricula
.post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula)
.put("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.atualizaMatricula)
.delete("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.deletaMatricula)
module.exports = router
