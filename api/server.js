const express = require('express');

const app = express();

const PORT = 3000;

const api = require('./controllers/announcementController');

app.use(express.json());

app.get('/api', api.getAnuncios);
app.post('/api', api.createAnnouncement);
app.put('/api/:id', api.update);
app.delete('/api/:id', api.remove);

app.listen(PORT);
console.log(`Serever escutando na porta --> ${PORT}`);
