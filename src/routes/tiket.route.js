const express = require("express");
const tiketController = require("../controllers/tiket.controller");

const tiketRoute = express.Router();

tiketRoute.get("/", tiketController.getAllTickets);
tiketRoute.post("/", tiketController.createTicket);
tiketRoute.get("/:id", tiketController.getTicketById);
tiketRoute.put("/:id", tiketController.updateTicket);
tiketRoute.delete("/:id", tiketController.deleteTicket);

module.exports = tiketRoute;
