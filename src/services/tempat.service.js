const prisma = require("../utils/prismaClient");
exports.getAll = async () => {
  return await prisma.tempat.findMany();
};
exports.getById = async (id) => {
  return await prisma.tempat.findUnique({ where: { id: parseInt(id, 10) } });
};
exports.create = async (data) => {
  return await prisma.tempat.create({ data });
};
exports.update = async (id, data) => {
  return await prisma.tempat.update({
    where: { id: parseInt(id, 10) },
    data,
  });
};
exports.delete = async (id) => {
  await prisma.tempat.delete({ where: { id: parseInt(id, 10) } });
  return true;
};
