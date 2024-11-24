const express = require("express");
const eventController = require("../controllers/event.controller");

const eventRoute = express.Router();

eventRoute.get("/event", eventController.getAllEvents);
eventRoute.post("/event", eventController.createEvent);
eventRoute.get("/event/:id", eventController.getEventById);
eventRoute.put("/event/:id", eventController.updateEvent);
eventRoute.delete("/event/:id", eventController.deleteEvent);

module.exports = eventRoute;
