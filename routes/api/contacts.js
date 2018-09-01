const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());

// Item Model
const Item = require('../../models/Contact');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
  console.log("it hits");
  console.log(req.body);

  
  console.log(req.body.content);
  const newItem = new Item({
    firstName: req.body.content.firstName,
    lastName: req.body.content.lastName,
    email: req.body.content.email,
    phone: req.body.content.phone,
    message: req.body.content.message
  });

  newItem.save().then(item => res.json(item));
  
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
