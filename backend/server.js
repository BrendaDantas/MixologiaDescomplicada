const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const usersRoutes = require('./routes/users');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/api/users', usersRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/diagnostic', (req, res) => {
    res.send('Diagnostic route reached');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});