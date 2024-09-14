const express = require('express');
const lojaRoutes = require('./routes/lojaRoutes');
const contaRoutes = require('./routes/contaRoutes');

const app = express();
app.use(express.json());

app.use('/api/lojas', lojaRoutes);
app.use('/api/contas', contaRoutes);

module.exports = app;
