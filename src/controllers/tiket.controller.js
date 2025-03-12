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
  const { customerId, eventId } = req.body;
  try {
    const tiket = await tiketService.existingTicket(customerId, eventId);
    if (tiket) {
      return res.status(400).json({
        success: false,
        message: "Customer sudah memiliki tiket untuk event ini.",
      });
    }
    const ticket = await tiketService.createTicket(req.body);
    return res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const searchTicket = async (req, res) => {
  const { nomer_hp, eventId } = req.query;
  try {
    const ticket = await tiketService.findTicketByPhoneAndEvent(
      nomer_hp,
      parseInt(eventId, 10)
    );

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Tiket tidak ditemukan",
      });
    }

    res.status(200).json({ success: true, data: ticket });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
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
  searchTicket,
  getAllTickets,
  createTicket,
  getTicketById,
  updateTicket,
  deleteTicket,
};
