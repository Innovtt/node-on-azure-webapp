var express = require('express');
var app = express();
var port = process.env.port || 1337;
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Exemplo rodando na porta: '+port);
});
