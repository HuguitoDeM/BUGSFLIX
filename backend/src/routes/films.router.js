const express = require("express");
const router = express.Router();
const filmsController = require("../controllers/films.controllers");

router.get("/", filmsController.get);
router.get("/:id", filmsController.getById);
router.post("/", filmsController.create);
router.put("/:id", filmsController.update);
router.delete("/:id", filmsController._delete);

module.exports = router;
