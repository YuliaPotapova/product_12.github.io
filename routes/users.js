const routUsers = require('express').Router();
const users = require('../data/users.json');

const user = (id) => users.find((item) => item._id === id);

const doesUserExist = (req, res, next) => {
  if (!user(req.params.id)) {
    res.status(404).json({ message: 'Нет пользователя с таким id' });
    return;
  }
  next();
};

routUsers.get('/', (req, res) => res.send(users));
routUsers.get('/:id', doesUserExist, (req, res) => res.json(user(req.params.id)));

module.exports = routUsers;
