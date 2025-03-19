const express = require("express");
const jadwalController = require("../controllers/jadwal.controller");

const jadwalRoute = express.Router();

jadwalRoute.get("/jadwal", jadwalController.getAllJadwals);
jadwalRoute.post("/jadwal", jadwalController.createJadwal);
jadwalRoute.get("/jadwal/:id", jadwalController.getJadwalById);
jadwalRoute.put("/jadwal/:id", jadwalController.updateJadwal);
jadwalRoute.delete("/jadwal/:id", jadwalController.deleteJadwal);

module.exports = jadwalRoute;
