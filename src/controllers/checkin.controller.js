const checkinService = require("../services/checkin.service");

exports.getAll = async (req, res) => {
  try {
    const checkins = await checkinService.getAll();
    res.json(checkins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const checkin = await checkinService.getById(req.params.id);
    if (!checkin) return res.status(404).json({ error: "checkin not found" });
    res.json(checkin);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.create = async (req, res) => {
  try {
    const checkin = await checkinService.create(req.body);
    res.status(201).json(checkin);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.update = async (req, res) => {
  try {
    const ticket = await checkinService.update(req.params.id, req.body);
    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.delete = async (req, res) => {
  try {
    const success = await checkinService.delete(req.params.id);
    if (!success) return res.status(404).json({ error: "checkin not found" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
