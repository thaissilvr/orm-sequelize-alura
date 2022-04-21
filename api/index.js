const express = require("express")
const bodyParser = require("body-parser")
//iniciando o express
const app = express()
// pega os dados que vão chegar através de POST e transforma em JSON, passando adiante para ser utilizado 
//pela aplicação
app.use(bodyParser.json())
const port = 3000
//2 parametros: rota e a função callback (requisição e resposta)
// express recebe a req e passa pra frente uma resposta, sendo aqui um status e uma msg
app.get('/test', (req, res) => { res
    .status(200)
    .send({ mensagem: 'boas-vindas à API'})
})
// express 'ouvir' o servidor e retornar se está funcionando ou não
app.listen(port, () => console.log(` servidor rodando em ${port} `))

module.exports = app 

// proximo passo: instalção do NODEMON, que ficará "escutando" as alterações do servidor e derrubar/subir ele 
// automaticamente de acordo com as novas alterações - USADO SÓ DURANTE O DESENVOLVIMENTO!
//comando: npm run start