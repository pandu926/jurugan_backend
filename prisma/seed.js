const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const service = require("../src/services/user.service");
const mainpageService = require("../src/services/mainpage.service");

const data = {
  username: "owner1",
  password: "owner1",
  role : "owner"
};

const mainpage = {
    slogan: "Juguran Budaya merupakan sebuah acara budaya tahunan yang diselenggarakan untuk merayakan kekayaan budaya Nusantara.",
    background: "/uploads/1733545484652-31646133.png",
    tentang: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia porro laudantium dignissimos optio sequi! Doloremque dolorem consequatur ratione iure, aut unde officia culpa esse aperiam voluptatibus sapiente suscipit impedit hic!",
    tanggal: "20-10-2025"
}
async function main() {
  try {
    await service.createUser(data);
    await mainpageService.create(mainpage)
    console.log("Seeding selesai!");
  } catch (e) {
    console.error("username sudah ada");
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
