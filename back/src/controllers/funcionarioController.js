import db from "../config/db.js";

export const getFuncionarios = (req, res) => {
  db.query("SELECT * FROM funcionarios", (err, results) => {
    if (err) {
      console.error("Error fetching funcionarios:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
};

export const createFuncionario = (req, res) => {
  const { nome, cargo, salario } = req.body;
  const query = "INSERT INTO funcionarios (nome, cargo, salario) VALUES (?, ?, ?)";
  db.query(query, [nome, cargo, salario], (err, results) => {
    if (err) {
      console.error("Error creating funcionario:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.status(201).json({ id: results.insertId, nome, cargo, salario });
  });
};

export const updateFuncionario = (req, res) => {
  const { id } = req.params;
  const { nome, cargo, salario } = req.body;
  const query = "UPDATE funcionarios SET nome = ?, cargo = ?, salario = ? WHERE id = ?";
  db.query(query, [nome, cargo, salario, id], (err, results) => {
    if (err) {
      console.error("Error updating funcionario:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json({ id, nome, cargo, salario });
  });
};

export const deleteFuncionario = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM funcionarios WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error deleting funcionario:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.status(204).send();
  });
};
