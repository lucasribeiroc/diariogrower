const db = require("../db");

module.exports = {
  findAll: () => {
    return new Promise((accept, reject) => {
      db.query("SELECT * FROM users", (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        accept(results);
      });
    });
  },
};
