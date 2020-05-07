const routUsers = require('express').Router();
const users = require('../data/users.json');

const user = (id) => users.filter((item) => item._id === id);

const doesUserExist = (req, res, next) => {
  if (user(req.params.id).length === 0) {
    res.status(404).json({ message: 'Нет пользователя с таким id' });
    return;
  }
  next();
};

routUsers.get('/', (req, res) => res.send(users));
routUsers.get('/:id', doesUserExist);
routUsers.get('/:id', (req, res) => res.json(user(req.params.id)[0]));

module.exports = routUsers;
