// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.post('/send-data', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  res.send({'response': 'Your message was received successfully!'});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
