const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/routes');

const { PORT } = process.env;

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use('/', router);

app.listen(PORT, () => console.log('Online'));
