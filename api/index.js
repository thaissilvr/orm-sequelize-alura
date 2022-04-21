const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

app.use(bodyParser.json())
app.get('/test', (req, res) => { res
    .status(200)
    .send({ mensagem: 'boas-vindas à API'})
})
app.listen(port, () => console.log(` servidor rodando em ${port} `))

module.exports = app 
