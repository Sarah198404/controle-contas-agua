const db = require('../config/db');

exports.createLoja = (req, res) => {
  const { nmLoja, cnpj, regional } = req.body;
  const query = 'INSERT INTO Loja (nmLoja, cnpj, regional) VALUES (?, ?, ?)';
  db.query(query, [nmLoja, cnpj, regional], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Loja criada com sucesso!', lojaId: results.insertId });
  });
};

exports.getLojas = (req, res) => {
  const query = 'SELECT * FROM Loja';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
