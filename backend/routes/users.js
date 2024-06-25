const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const filePath = './data/users.json';

//Função para ler dados do arquivo JSON
const readData = () => {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
};

//Função para escrever dados no arquivo JSON
const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

//POST /api/users/register - registra um novo usuário
router.post('/register', (req, res) => {
    const { name, cpf, age, email, password } = req.body;
    const users = readData();

    //Verifica se o usuário já existe
    if (users.find(user => user.email === email)) {
        return res.status(400).json({message: "Usuário já registrado"});
    }

    const newUser = {
        id: uuidv4(),
        name,
        cpf,
        age,
        email,
        password
    };

    users.push(newUser);
    writeData(users);

    res.status(201).json(newUser);
});

// POST /api/users/login - logar um usuário existente
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const users = readData();
    const user = users.find(user => user.email === email && user.password === password);
    
    if (!user) {
        return res.status(401).json({ message: 'Credenciais inválidas'});
    }

    res.json({ message: 'Login bem-sucedido', userId: user.id, name: user.name });
});

module.exports = router;