const express = require("express");
const checkinRouter = express.Router();
const checkinController = require("../controllers/checkin.controller");
const tokenVerification = require("../middleware/tokenVerification")


checkinRouter.get("/checkin",tokenVerification, checkinController.getAll);
checkinRouter.get("/checkin/:id",tokenVerification, checkinController.getById);
checkinRouter.post("/checkin",tokenVerification, checkinController.create);
checkinRouter.put("/checkin/:id",tokenVerification, checkinController.update);
checkinRouter.delete("/checkin/:id",tokenVerification, checkinController.delete);
module.exports = checkinRouter;

