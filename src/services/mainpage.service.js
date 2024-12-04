const prisma = require("../utils/prismaClient");

exports.getAll = async () => {
  return await prisma.mainpage.findMany();
};
exports.getById = async (id) => {
  return await prisma.mainpage.findUnique({ where: { id: parseInt(id, 10) } });
};
exports.create = async (data) => {
  return await prisma.mainpage.create({ data });
};
exports.update = async (id, data) => {
  return await prisma.mainpage.update({
    where: { id: parseInt(id, 10) },
    data,
  });
};
exports.delete = async (id) => {
  await prisma.mainpage.delete({ where: { id: parseInt(id, 10) } });
  return true;
};
