const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');
// needed to set this to prove02/views so it didn't go to the other views page!!!
app.set('views', 'prove02/views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
const productRoutes = require('./routes/add-product');
const shopRoutes = require('./routes/shop');

app.use(productRoutes.routes);
app.use(shopRoutes);

app.listen(PORT);