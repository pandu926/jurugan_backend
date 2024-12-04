const express = require("express");
const checkinRouter = express.Router();
const checkinController = require("../controllers/checkin.controller");
checkinRouter.get("/checkin", checkinController.getAll);
checkinRouter.get("/checkin/:id", checkinController.getById);
checkinRouter.post("/checkin", checkinController.create);
checkinRouter.put("/checkin/:id", checkinController.update);
checkinRouter.delete("/checkin/:id", checkinController.delete);
module.exports = checkinRouter;
