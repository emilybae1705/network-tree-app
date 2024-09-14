const express = require('express');
const router = express.Router();
const getAllStates = require("../controllers/statesController");

router.get("/", getAllStates);

module.exports = router;