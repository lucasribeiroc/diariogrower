require("dotenv").config();
const mysql2 = require("mysql2");

const connection = mysql2.createConnection(process.env.DATABASE_URL);

connection.connect(function (error) {
  if (error) throw error;
  console.log("Conectado ao banco de dados");
});

module.exports = connection;
