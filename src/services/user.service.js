const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const add = async (data_user) => {
  const { name, email, phoneNumber, password } = data_user;
  return await prisma.user.create({
    data: {
      name,
      email,
      phoneNumber,
      password,
    },
  });
};
const getSingle = async (id) => {
  return await prisma.user.findUnique(id);
};

const getAll = async () => {
  return await prisma.user.findMany();
};
const update = async (id, data_user) => {
  return await prisma.user.update(data_user, {
    where: { id },
  });
};
const remove = () => {};

const service = {
  add,
  getSingle,
  getAll,
  remove,
  update,
};

module.exports = service;
