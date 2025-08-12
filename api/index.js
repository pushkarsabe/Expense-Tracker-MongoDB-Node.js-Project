const express = require('express');
const bodyParser = require('body-parser');
//to avoid cross origin comm error
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./util/database');
const app = express();
app.use(cors());

const expenseRoute = require('./routes/expense');
const userRoute = require('./routes/user');
const purchaseRoute = require('./routes/purchase');
const premiumRoute = require('./routes/premium');
const forgotpasswordRoute = require('./routes/forgotpassword');

//parse application
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());

app.use('/api/expense', expenseRoute);

app.use('/api/user', userRoute);

app.use('/api/purchase', purchaseRoute);

app.use('/api/premium', premiumRoute);

app.use('/api/password', forgotpasswordRoute);


module.exports = app;

