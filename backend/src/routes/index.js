const express = require("express");

const filmsRouter = require("./films.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/films", filmsRouter);
}

module.exports = routerApi;
