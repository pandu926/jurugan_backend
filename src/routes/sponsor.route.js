const express = require("express");
const sponsorRouter = express.Router();
const sponsorController = require("../controllers/sponsor.controller");
sponsorRouter.get("/sponsor", sponsorController.getAll);
sponsorRouter.get("/sponsor/:id", sponsorController.getById);
sponsorRouter.post("/sponsor", sponsorController.create);
sponsorRouter.put("/sponsor/:id", sponsorController.update);
sponsorRouter.delete("/sponsor/:id", sponsorController.delete);
module.exports = sponsorRouter;
