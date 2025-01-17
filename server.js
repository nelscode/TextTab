const express = require('express');  // importando express

const app = express(); // criando uma instância do express
 
const PORT = 3000; // definindo a porta que vamos executar o servidor

app.use(express.static(__dirname)); // passando o diretorio onde está o arquivo server.js

app.get('/', (req, res) => {res.sendFile(__dirname + '/index.html')}) // pagina inicial da aplicação

app.listen(PORT, () => {console.log(`Servidor rodando em http://localhost:${PORT}`)}) // rodando servidor