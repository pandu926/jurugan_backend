require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 8000;

const path = require("path");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./src/config/swagger");

const userRoute = require("./src/routes/user.route");
const tiketRoute = require("./src/routes/tiket.route");
const customerRoute = require("./src/routes/customer.route");
const eventRoute = require("./src/routes/event.route");
const mainpageController = require("./src/routes/mainpage.route");
const sosmedRoute = require("./src/routes/sosmed.route");
const sponsorRoute = require("./src/routes/sponsor.route");
const sliderRoute = require("./src/routes/slider.route");
const tempatRoute = require("./src/routes/tempat.route");
const checkinRoute = require("./src/routes/checkin.route");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  return res.send("ya");
});

app.use(userRoute);
app.use(tiketRoute);
app.use(customerRoute);
app.use(eventRoute);
app.use(mainpageController);
app.use(sosmedRoute);
app.use(tempatRoute);
app.use(sponsorRoute);
app.use(sliderRoute);
app.use(checkinRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
