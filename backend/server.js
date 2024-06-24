const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});