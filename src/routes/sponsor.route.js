const express = require("express");
const sponsorRouter = express.Router();
const sponsorController = require("../controllers/sponsor.controller");
const tokenVerification = require("../middleware/tokenVerification")

sponsorRouter.get("/sponsor", sponsorController.getAll);
sponsorRouter.get("/sponsor/:id", sponsorController.getById);
sponsorRouter.post("/sponsor",tokenVerification, sponsorController.create);
sponsorRouter.put("/sponsor/:id",tokenVerification, sponsorController.update);
sponsorRouter.delete("/sponsor/:id",tokenVerification, sponsorController.delete);
module.exports = sponsorRouter;
