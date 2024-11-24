const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.auth = async (username) => {
  return await prisma.user.findUnique({
    where: {
      username,
    },
  });
};
