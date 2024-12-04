const prisma = require("../utils/prismaClient");
exports.getAll = async () => {
  return await prisma.checkin.findMany();
};
exports.getById = async (id) => {
  return await prisma.checkin.findUnique({ where: { id: parseInt(id, 10) } });
};
exports.create = async (data) => {
  return await prisma.checkin.create({ data });
};
exports.update = async (id, data) => {
  return await prisma.checkin.update({
    where: { id: parseInt(id, 10) },
    data,
  });
};
exports.delete = async (id) => {
  await prisma.checkin.delete({ where: { id: parseInt(id, 10) } });
  return true;
};
