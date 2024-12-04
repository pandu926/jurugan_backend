const express = require("express");
const sosmedRouter = express.Router();
const sosmedController = require("../controllers/sosmed.controller");
sosmedRouter.get("/sosmed", sosmedController.getAll);
sosmedRouter.get("/sosmed/:id", sosmedController.getById);
sosmedRouter.post("/sosmed", sosmedController.create);
sosmedRouter.put("/sosmed/:id", sosmedController.update);
sosmedRouter.delete("/sosmed/:id", sosmedController.delete);
module.exports = sosmedRouter;
