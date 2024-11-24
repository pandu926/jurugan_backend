require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 8000;

const fs = require("fs");
const https = require("https");
const path = require("path");
const cors = require("cors");

const userRoute = require("./src/routes/user.route");
const tiketRoute = require("./src/routes/tiket.route");
const customerRoute = require("./src/routes/customer.route");
const eventRoute = require("./src/routes/event.route");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  return res.send("ya");
});

app.use(userRoute);
app.use(tiketRoute);
app.use(customerRoute);
app.use(eventRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
