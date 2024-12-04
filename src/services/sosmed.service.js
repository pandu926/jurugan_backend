const prisma = require("../utils/prismaClient");
exports.getAll = async () => {
  return await prisma.sosmed.findMany();
};
exports.getById = async (id) => {
  return await prisma.sosmed.findUnique({ where: { id: parseInt(id, 10) } });
};
exports.create = async (data) => {
  return await prisma.sosmed.create({ data });
};
exports.update = async (id, data) => {
  return await prisma.sosmed.update({
    where: { id: parseInt(id, 10) },
    data,
  });
};
exports.delete = async (id) => {
  await prisma.sosmed.delete({ where: { id: parseInt(id, 10) } });
  return true;
};
