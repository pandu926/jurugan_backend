const prisma = require("../utils/prismaClient");

const getAllEvents = async () => prisma.event.findMany();

const createEvent = async (data) => prisma.event.create({ data });

const getEventById = async (id) =>
  prisma.event.findUnique({ where: { id: parseInt(id, 10) } });

const updateEvent = async (id, data) =>
  prisma.event.update({
    where: { id: parseInt(id, 10) },
    data,
  });

const deleteEvent = async (id) =>
  prisma.event.delete({ where: { id: parseInt(id, 10) } });

module.exports = {
  getAllEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
};
