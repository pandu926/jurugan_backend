const express = require("express");
const tiketController = require("../controllers/tiket.controller");

const tiketRoute = express.Router();
const tokenVerification = require("../middleware/tokenVerification")



tiketRoute.get("/tiket",tokenVerification, tiketController.getAllTickets);
tiketRoute.post("/tiket", tiketController.createTicket);
tiketRoute.get("/tiket/search", tiketController.searchTicket);
tiketRoute.get("/tiket/:id", tiketController.getTicketById);
tiketRoute.put("/tiket/:id", tiketController.updateTicket);
tiketRoute.delete("/tiket/:id", tiketController.deleteTicket);

module.exports = tiketRoute;
