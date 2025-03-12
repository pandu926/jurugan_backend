const prisma = require("../utils/prismaClient");

const getAllTickets = async () =>
  prisma.tiket.findMany({
    include: {
      // Relasi ke Event
      customer: true, // Relasi ke Customer
    },
  });

const createTicket = async (data) => {
  const { tiket_nomer, customerId, eventId, status } = data;

  return await prisma.tiket.create({
    data: { tiket_nomer, customerId, eventId, status },
  });
};
const existingTicket = async (customerId, eventId) => {
  return prisma.tiket.findFirst({
    where: { customerId, eventId },
  });
};
const findTicketByPhoneAndEvent = async (nomer_hp, eventId) => {
  return prisma.tiket.findFirst({
    where: {
      customer: { nomer_hp }, // Relasi ke customer berdasarkan nomor HP
      eventId: eventId, // Event yang dicari
    },
    include: {
      customer: true, // Ambil data customer juga
      event: true, // Ambil data event juga
    },
  });
};

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
  findTicketByPhoneAndEvent,
  existingTicket,
  getAllTickets,
  createTicket,
  getTicketById,
  updateTicket,
  deleteTicket,
};
