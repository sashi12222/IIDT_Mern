

const express = require('express');
const router = express.Router();
const DataModel = require('../models/DataModel');

router.get('/', async (req, res) => {
  try {
    const data = await DataModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
