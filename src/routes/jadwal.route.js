const express = require("express");
const jadwalController = require("../controllers/jadwal.controller");

const jadwalRoute = express.Router();
const tokenVerification = require("../middleware/tokenVerification")

jadwalRoute.get("/jadwal", jadwalController.getAllJadwals);
jadwalRoute.post("/jadwal",tokenVerification, jadwalController.createJadwal);
jadwalRoute.get("/jadwal/:id", jadwalController.getJadwalById);
jadwalRoute.put("/jadwal/:id",tokenVerification, jadwalController.updateJadwal);
jadwalRoute.delete("/jadwal/:id",tokenVerification, jadwalController.deleteJadwal);

module.exports = jadwalRoute;
