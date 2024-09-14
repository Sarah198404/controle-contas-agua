const db = require('../config/db');

exports.createConta = (req, res) => {
  const { loja_id, fornecimento, rgi, hidrometro, mesRef, consumoM3, valor, dtVencimento, dtProximaLeitura } = req.body;
  const query = `
    INSERT INTO ContaAgua (loja_id, fornecimento, rgi, hidrometro, mesRef, consumoM3, valor, dtVencimento, dtProximaLeitura) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(query, [loja_id, fornecimento, rgi, hidrometro, mesRef, consumoM3, valor, dtVencimento, dtProximaLeitura], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Conta de água criada com sucesso!', contaId: results.insertId });
  });
};

exports.getContas = (req, res) => {
  const query = `
  SELECT 
    c.id, c.fornecimento, c.rgi, c.hidrometro, c.mesRef, c.consumoM3, 
    c.valor, c.dtVencimento, c.dtProximaLeitura,
    l.nmLoja, l.cnpj, l.regional
  FROM 
    ContaAgua c
  JOIN 
    Loja l ON c.loja_id = l.id
`;
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getContasByLoja = (req, res) => {
  const { loja_id } = req.params;
  const query = `
    SELECT 
      c.id, c.fornecimento, c.rgi, c.hidrometro, c.mesRef, c.consumoM3, 
      c.valor, c.dtVencimento, c.dtProximaLeitura,
      l.nmLoja, l.cnpj, l.regional
    FROM 
      ContaAgua c
    JOIN 
      Loja l ON c.loja_id = l.id
    WHERE 
      l.id = ?
  `;
  db.query(query, [loja_id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
