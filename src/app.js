const express = require('express');
const cors = require('cors');
const lojaRoutes = require('./routes/lojaRoutes');
const contaRoutes = require('./routes/contaRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/lojas', lojaRoutes);
app.use('/api/contas', contaRoutes);

module.exports = app;
