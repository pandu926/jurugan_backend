const express = require("express");
const customerController = require("../controllers/customer.controller");

const customerRoute = express.Router();

customerRoute.get("/", customerController.getAllCustomers);
customerRoute.post("/", customerController.createCustomer);
customerRoute.get("/:id", customerController.getCustomerById);
customerRoute.put("/:id", customerController.updateCustomer);
customerRoute.delete("/:id", customerController.deleteCustomer);

module.exports = customerRoute;
