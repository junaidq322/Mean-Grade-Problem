const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
var appRoutes = require("./routes/appRoutes.js")

mongoose.connect('mongodb://localhost:27017/unit-conversion', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

app.use(cors());
app.use(bodyParser.json());
app.use('/api',appRoutes);


app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });