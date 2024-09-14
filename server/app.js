const express = require('express');
const cors = require('cors');
const statesRoute = require('./routes/states');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/states", statesRoute);

module.exports = app;