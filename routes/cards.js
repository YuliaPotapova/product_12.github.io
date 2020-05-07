const routCards = require('express').Router();
const cards = require('../data/cards.json');

routCards.get('/', (req, res) => {
  res.send(cards);
});

module.exports = routCards;
