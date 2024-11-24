const prisma = require("../utils/prismaClient");

const getAllCustomers = async () => prisma.customer.findMany();

const createCustomer = async (data) => prisma.customer.create({ data });

const getCustomerById = async (id) =>
  prisma.customer.findUnique({ where: { id: parseInt(id, 10) } });

const updateCustomer = async (id, data) =>
  prisma.customer.update({
    where: { id: parseInt(id, 10) },
    data,
  });

const deleteCustomer = async (id) =>
  prisma.customer.delete({ where: { id: parseInt(id, 10) } });

module.exports = {
  getAllCustomers,
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
