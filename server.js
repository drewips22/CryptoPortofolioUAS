// server.js
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const asetRoutes = require('./routes/aset');

const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public')); // Untuk file statis seperti CSS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // Untuk support PUT dan DELETE

// Routes
app.use('/', asetRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});