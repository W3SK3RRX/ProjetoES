const express = require('express');//importacao do pacote
const app = express();//instanciando express
const path = require('path');
const router = express.Router();

app.use(express.static('src'));

app.get('/', function (req, res) { //endereco da requisicao onde e retornado hello world
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(3001) //execucao do servidor