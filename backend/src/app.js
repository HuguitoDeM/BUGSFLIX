const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const routerApi = require("./routes/index");
const port = process.env.port || 5432;

dotenv.config();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend con NodeJs- Express + CRUD API REST + MySql");
});

routerApi(app);

app.listen(port, (err) => {
  if (err) {
    console.error("Error al iniciar el servidor " + err);
    return;
  }
  console.log(`Port ==> ${port}`);
});
