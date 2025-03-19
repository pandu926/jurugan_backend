const prisma = require("../utils/prismaClient");

const getAllJadwals = async () => prisma.jadwal.findMany();

const createJadwal = async (data) => prisma.jadwal.create({ data });

const getJadwalById = async (id) =>
  prisma.jadwal.findUnique({ where: { id: parseInt(id, 10) } });

const updateJadwal = async (id, data) =>
  prisma.jadwal.update({
    where: { id: parseInt(id, 10) },
    data,
  });

const deleteJadwal = async (id) =>
  prisma.jadwal.delete({ where: { id: parseInt(id, 10) } });

module.exports = {
  getAllJadwals,
  createJadwal,
  getJadwalById,
  updateJadwal,
  deleteJadwal,
};
