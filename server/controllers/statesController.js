const states = require('../data');

const getAllStates = (req, res) => {
  res.json(states);
};

module.exports = getAllStates;