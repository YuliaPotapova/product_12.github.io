const express = require('express');
const path = require('path');

const routUsers = require('./routes/users.js');
const routCards = require('./routes/cards.js');

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', routUsers);
app.use('/cards', routCards);
app.use((req, res) => res.status(404).json({ message: 'Запрашиваемый ресурс не найден' }));

app.listen(PORT);
