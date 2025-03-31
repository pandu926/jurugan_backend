const express = require("express");
const eventController = require("../controllers/event.controller");

const eventRoute = express.Router();
const tokenVerification = require("../middleware/tokenVerification")

eventRoute.get("/event", eventController.getAllEvents);
eventRoute.post("/event",tokenVerification, eventController.createEvent);
eventRoute.get("/event/:id", eventController.getEventById);
eventRoute.put("/event/:id",tokenVerification, eventController.updateEvent);
eventRoute.delete("/event/:id",tokenVerification, eventController.deleteEvent);

module.exports = eventRoute;
