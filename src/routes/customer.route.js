const express = require("express");
const customerController = require("../controllers/customer.controller");

const customerRoute = express.Router();

customerRoute.get("/customer", customerController.getAllCustomers);
customerRoute.post("/customer", customerController.createCustomer);
customerRoute.get("/customer/:id", customerController.getCustomerById);
customerRoute.put("/customer/:id", customerController.updateCustomer);
customerRoute.delete("/customer/:id", customerController.deleteCustomer);

module.exports = customerRoute;
