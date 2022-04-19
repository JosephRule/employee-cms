const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Sh7I3lpLc3qq',
      database: 'cms'
    },
    console.log('Connected to the cms database.')
);

module.exports = db;