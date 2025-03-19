const prisma = require("../utils/prismaClient"); // Prisma client instance
const bcrypt = require("bcrypt");

const getAllUsers = async () => {
  return prisma.user.findMany();
};

const createUser = async (data) => {
  const saltRounds = 10; // Bisa disesuaikan dengan kebutuhan

  // Enkripsi password menggunakan bcrypt
  const hashedPassword = await bcrypt.hash(data.password, 10);
  console.log(hashedPassword, saltRounds);

  // Simpan user dengan password yang sudah terenkripsi
  const user = await prisma.user.create({
    data: {
      username: data.username,
      password: hashedPassword,
      role: data.role,
    },
  });

  return user;
};
const getUserById = async (id) => {
  return prisma.user.findUnique({ where: { id: parseInt(id, 10) } });
};

const updateUser = async (id, data) => {
  return prisma.user.update({
    where: { id: parseInt(id, 10) },
    data,
  });
};

const deleteUser = async (id) => {
  return prisma.user.delete({ where: { id: parseInt(id, 10) } });
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
