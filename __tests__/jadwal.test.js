const request = require("supertest");
const app = require("../app"); // Pastikan ini path ke file utama Express
const prisma = require("../src/utils/prismaClient"); // Sesuaikan dengan prisma instance

describe("Jadwal API", () => {
  let jadwalId;

  beforeAll(async () => {
    // Bersihkan data sebelum test (opsional)
    await prisma.jadwal.deleteMany();
  });

  afterAll(async () => {
    // Tutup koneksi Prisma setelah test selesai
    await prisma.$disconnect();
  });

  test("POST /jadwal - Buat jadwal baru", async () => {
    const response = await request(app).post("/jadwal").send({
      judul: "Rapat Tim",
      tanggal: "2025-04-01",
      deskripsi: "Rapat koordinasi proyek",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    jadwalId = response.body.id;
  });

  test("GET /jadwal - Ambil semua jadwal", async () => {
    const response = await request(app).get("/jadwal");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  test("GET /jadwal/:id - Ambil jadwal by ID", async () => {
    const response = await request(app).get(`/jadwal/${jadwalId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", jadwalId);
  });

  test("PUT /jadwal/:id - Update jadwal", async () => {
    const response = await request(app).put(`/jadwal/${jadwalId}`).send({
      judul: "Rapat Tim (Update)",
      tanggal: "2025-04-02",
      deskripsi: "Rapat koordinasi proyek yang diubah",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("judul", "Rapat Tim (Update)");
  });

  test("DELETE /jadwal/:id - Hapus jadwal", async () => {
    const response = await request(app).delete(`/jadwal/${jadwalId}`);
    expect(response.statusCode).toBe(204);
  });

  test("GET /jadwal/:id - Pastikan jadwal terhapus", async () => {
    const response = await request(app).get(`/jadwal/${jadwalId}`);
    expect(response.statusCode).toBe(404);
  });
});
