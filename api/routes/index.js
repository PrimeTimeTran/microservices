var express = require('express');
var router = express.Router();

const wizards = [
  'Harry Potter', 
  'Hermione Granger', 
  'Ronald Weasley', 
  'Neville Longbottom',
  'Mad-Eye Moody',
  'Bartemius Crouch Sr.',
  'Newt Scamander',
  'Sirius Black',
  'Kingsley Shacklebolt',
  'Draco Malfoy', 
  'Albus Dumberdore', 
  'Thomas Riddle',  
  'Salazar Slytherin',
  'Godric Gryffindor',
  'Gellert Grindelwald',
]

router.get('/magic', function (req, res, next) {
  const wizard = wizards[Math.floor(Math.random() * wizards.length)];
  res.json(wizard);
});

module.exports = router;
