const express = require('express');
const fs = ('fs');
const db = ('.db/db/json');
const path = require('path');

const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT= process.env.PORT || 3001;

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));