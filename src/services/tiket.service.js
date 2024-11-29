const prisma = require("../utils/prismaClient");

const getAllTickets = async () =>
  prisma.tiket.findMany({
    include: {
      // Relasi ke Event
      customer: true, // Relasi ke Customer
    },
  });

const createTicket = async (data) => prisma.tiket.create({ data });

const getTicketById = async (id) =>
  prisma.tiket.findUnique({
    where: { id: parseInt(id, 10) },
    include: {
      customer: true,
    },
  });

const updateTicket = async (id, data) =>
  prisma.tiket.update({
    where: { id: parseInt(id, 10) },
    data,
  });

const deleteTicket = async (id) =>
  prisma.tiket.delete({ where: { id: parseInt(id, 10) } });

module.exports = {
  getAllTickets,
  createTicket,
  getTicketById,
  updateTicket,
  deleteTicket,
};
