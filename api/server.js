const express = require('express');

const app = express();

const PORT = 3000;

const api = require('./controllers/anuncioController');

app.use(express.json());

app.get('/api', api.getAnuncios);
app.post('/api', api.publisher);

app.listen(PORT);
console.log(`Serever escutando na porta --> ${PORT}`);
