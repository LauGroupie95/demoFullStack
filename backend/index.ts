import express from 'express';
const app = express();
app.use(express.json());

const PORT = 5555;

var names = ["Laura", "Rita", "Nicola", "Luca", "Dario", "Massimo", "Andrea", "Silvia", "Alice", "Chantal"];

app.get('/ping', (_req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    console.log('someone pinged here');
    res.send('pong');
});

app.get('/welcome', (_req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send(names[Math.floor(Math.random() * names.length)]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});