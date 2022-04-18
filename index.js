const db = require('./db/connection');

const sql = `SELECT * FROM employees`;
const params = [req.params.id];
db.query(sql, params, (err, row) => {
  if (err) {
    res.status(400).json({ error: err.message });
    return;
  }
  res.json({
    message: 'success',
    data: row
  });
});