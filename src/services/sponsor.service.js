const prisma = require("../utils/prismaClient");
exports.getAll = async () => {
  return await prisma.sponsor.findMany();
};
exports.getById = async (id) => {
  return await prisma.sponsor.findUnique({ where: { id: parseInt(id, 10) } });
};
exports.create = async (data) => {
  return await prisma.sponsor.create({ data });
};
exports.update = async (id, data) => {
  return await prisma.sponsor.update({
    where: { id: parseInt(id, 10) },
    data,
  });
};
exports.delete = async (id) => {
  await prisma.sponsor.delete({ where: { id: parseInt(id, 10) } });
  return true;
};
