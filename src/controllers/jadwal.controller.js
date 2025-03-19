const jadwalService = require("../services/jadwal.service");

const getAllJadwals = async (req, res) => {
  try {
    const jadwals = await jadwalService.getAllJadwals();
    res.status(200).json(jadwals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createJadwal = async (req, res) => {
  try {
    const jadwal = await jadwalService.createJadwal(req.body);
    res.status(201).json(jadwal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getJadwalById = async (req, res) => {
  try {
    const jadwal = await jadwalService.getJadwalById(req.params.id);
    if (!jadwal) return res.status(404).json({ message: "Jadwal not found" });
    res.status(200).json(jadwal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateJadwal = async (req, res) => {
  try {
    const jadwal = await jadwalService.updateJadwal(req.params.id, req.body);
    res.status(200).json(jadwal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteJadwal = async (req, res) => {
  try {
    await jadwalService.deleteJadwal(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllJadwals,
  createJadwal,
  getJadwalById,
  updateJadwal,
  deleteJadwal,
};
