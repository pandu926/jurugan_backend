const prisma = require("../utils/prismaClient");
exports.getAll = async () => {
  return await prisma.slider.findMany();
};
exports.getById = async (id) => {
  return await prisma.slider.findUnique({ where: { id: parseInt(id, 10) } });
};
exports.create = async (data) => {
  return await prisma.slider.create({ data });
};
exports.update = async (id, data) => {
  return await prisma.slider.update({
    where: { id: parseInt(id, 10) },
    data,
  });
};
exports.delete = async (id) => {
  await prisma.slider.delete({ where: { id: parseInt(id, 10) } });
  return true;
};
