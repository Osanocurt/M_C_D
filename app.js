const express = require('express');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressJWT = require('express-jwt');
const config = require('./config/config');


const router = require('./config/routes');

const app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(expressLayouts);

app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));
app.use('/', router);

app.listen(port, () => console.log(`Running on port: ${port}`));
