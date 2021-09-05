const express = require('express');

const app = express();
const PORT = 3000;
const api = require('./controllers/announcementController');
const statusCode = require('./utils/statusCode');
const httpResponse = require('./utils/httpResponse');

app.use(express.json());

app.get('/api', api.readAllAnnouncement);
app.get('/api/:id', api.readAnnouncementByID);
app.post('/api', api.createAnnouncement);
app.put('/api/:id', api.updateAnnouncement);
app.delete('/api/:id', api.removeAnnouncement);

app.all('*', (req, res) => {
  res.status(statusCode.NOT_FOUND).json(httpResponse.NOT_FOUND);
});

app.listen(PORT);
console.log(`Server escutando na porta --> ${PORT}`);
