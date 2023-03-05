const userGrows = require("../grow/userGrows");

module.exports = {
  findAll: async function (req, res) {
    let json = { error: "", result: [] };

    let users = await userGrows.findAll();

    for (let i in users) {
      json.result.push({
        id: users[i].id,
        nameUser: users[i].nameuser,
        emailUser: users[i].emailuser,
        userPassword: users[i].password,
      });
    }
    res.json(json);
  },
};
