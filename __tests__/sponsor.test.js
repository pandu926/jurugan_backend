const request = require("supertest");
const express = require("express");
const sponsorRoutes = require("../src/routes/sponsor.route");
const sponsorController = require("../src/controllers/sponsor.controller");

// Mock Controller
jest.mock("../src/controllers/sponsor.controller");

const app = express();
app.use(express.json());
app.use(sponsorRoutes);

describe("Sponsor API Tests", () => {
  let mockData;

  beforeEach(() => {
    jest.clearAllMocks();
    mockData = {
      id: 1,
      nama: "Coca Cola",
      background: "coca-cola.jpg",
    };
  });

  test("GET /sponsor - Mengambil semua sponsor", async () => {
    sponsorController.getAll.mockImplementation((req, res) => {
      res.status(200).json([mockData]);
    });

    const response = await request(app).get("/sponsor");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockData]);
  });

  test("GET /sponsor/:id - Mengambil sponsor berdasarkan ID", async () => {
    sponsorController.getById.mockImplementation((req, res) => {
      res.status(200).json(mockData);
    });

    const response = await request(app).get("/sponsor/1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockData);
  });

  test("POST /sponsor - Membuat sponsor baru", async () => {
    const newSponsor = {
      id: 2,
      nama: "Pepsi",
      background: "pepsi.jpg",
    };

    sponsorController.create.mockImplementation((req, res) => {
      res.status(201).json(newSponsor);
    });

    const response = await request(app).post("/sponsor").send(newSponsor);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(newSponsor);
  });

  test("PUT /sponsor/:id - Mengupdate sponsor", async () => {
    const updatedSponsor = { ...mockData, nama: "Coca Cola Updated" };

    sponsorController.update.mockImplementation((req, res) => {
      res.status(200).json(updatedSponsor);
    });

    const response = await request(app).put("/sponsor/1").send(updatedSponsor);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(updatedSponsor);
  });

  test("DELETE /sponsor/:id - Menghapus sponsor", async () => {
    sponsorController.delete.mockImplementation((req, res) => {
      res.status(204).send();
    });

    const response = await request(app).delete("/sponsor/1");

    expect(response.status).toBe(204);
  });
});
