const request = require("supertest");
const app = require("../app"); // Pastikan path sesuai
const tiketService = require("../src/services/tiket.service");

// 🔹 Mocking tiketService agar tidak akses database langsung
jest.mock("../src/services/tiket.service");

describe("Tiket API Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Pastikan tidak ada sisa mock dari test sebelumnya
  });

  const newTiket = {
    tiket_nomer: "TKT123456",
    customerId: "cst-uuid-123",
    eventId: 1,
    status: "valid",
  };

  // 🔹 TEST: Membuat tiket baru
  it("POST /tiket - Membuat tiket baru", async () => {
    // Simulasikan tidak ada tiket sebelumnya
    tiketService.existingTicket.mockResolvedValue(null);
    tiketService.createTicket.mockResolvedValue(newTiket);

    const response = await request(app).post("/tiket").send(newTiket);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(newTiket);
    expect(tiketService.existingTicket).toHaveBeenCalledWith(
      newTiket.customerId,
      newTiket.eventId
    );
    expect(tiketService.createTicket).toHaveBeenCalledWith(newTiket);
  });

  // 🔹 TEST: Membuat tiket tetapi customer sudah memiliki tiket sebelumnya
  it("POST /tiket - Gagal karena customer sudah memiliki tiket untuk event ini", async () => {
    tiketService.existingTicket.mockResolvedValue(newTiket); // Simulasi tiket sudah ada

    const response = await request(app).post("/tiket").send(newTiket);

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      message: "Customer sudah memiliki tiket untuk event ini.",
    });
    expect(tiketService.existingTicket).toHaveBeenCalledWith(
      newTiket.customerId,
      newTiket.eventId
    );
  });

  // 🔹 TEST: Get Tiket By ID
  it("GET /tiket/:id - Mendapatkan tiket berdasarkan ID", async () => {
    tiketService.getTicketById.mockResolvedValue(newTiket);

    const response = await request(app).get("/tiket/1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(newTiket);
    expect(tiketService.getTicketById).toHaveBeenCalledWith("1");
  });

  // 🔹 TEST: Tiket tidak ditemukan
  it("GET /tiket/:id - Tiket tidak ditemukan", async () => {
    tiketService.getTicketById.mockResolvedValue(null);

    const response = await request(app).get("/tiket/99");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: "Ticket not found" });
  });
});
