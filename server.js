const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use('/', express.static('./scripts'));

app.listen('3000', () => {
    console.log('serving');
})