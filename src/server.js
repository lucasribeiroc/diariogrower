require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes");

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/api", routes);

server.listen(process.env.PORT, function () {
  console.log(`Servidor conectado na porta ${process.env.PORT}`);
});
