const express = require("express");
const sosmedRouter = express.Router();
const sosmedController = require("../controllers/sosmed.controller");
const tokenVerification = require("../middleware/tokenVerification")

sosmedRouter.get("/sosmed", sosmedController.getAll);
sosmedRouter.get("/sosmed/:id", sosmedController.getById);
sosmedRouter.post("/sosmed",tokenVerification, sosmedController.create);
sosmedRouter.put("/sosmed/:id",tokenVerification, sosmedController.update);
sosmedRouter.delete("/sosmed/:id",tokenVerification, sosmedController.delete);
module.exports = sosmedRouter;
