const tiketService = require("../services/tiket.service");

const getAllTickets = async (req, res) => {
  try {
    const tickets = await tiketService.getAllTickets();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTicket = async (req, res) => {
  try {
    const ticket = await tiketService.createTicket(req.body);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTicketById = async (req, res) => {
  try {
    const ticket = await tiketService.getTicketById(req.params.id);
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTicket = async (req, res) => {
  try {
    const ticket = await tiketService.updateTicket(req.params.id, req.body);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTicket = async (req, res) => {
  try {
    await tiketService.deleteTicket(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTickets,
  createTicket,
  getTicketById,
  updateTicket,
  deleteTicket,
};
