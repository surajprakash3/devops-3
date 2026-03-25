const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
console.log('Server is starting... hello world');
app.get('/', (req, res) => {
res.send('Hello World!');
});
app.post('/data', (req, res) => {
const data = req.body;
console.log('Received data:', data);
res.send('Data received successfully!');
});

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});