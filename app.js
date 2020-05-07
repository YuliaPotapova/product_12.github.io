const express = require('express');
const path = require('path');

const routUsers = require('./routes/users.js');
const routCards = require('./routes/cards.js');
const routOther = require('./routes/other.js');

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', routUsers);
app.use('/cards', routCards);
app.use('/', routOther);

app.listen(PORT);
