const routOther = require('express').Router();

routOther.get('/:other', (req, res) => {
  const { other } = req.params;
  const regex = /^users(\/[a-z0-9]{24})?$/;
  if (other.search(regex) === -1 && other !== 'cards') {
    res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
  }
});

module.exports = routOther;
