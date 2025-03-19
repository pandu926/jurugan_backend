const request = require("supertest");
const express = require("express");
const tempatRoutes = require("../src/routes/tempat.route");
const tempatController = require("../src/controllers/tempat.controller");

// Mock Controller
jest.mock("../src/controllers/tempat.controller");

const app = express();
app.use(express.json());
app.use(tempatRoutes);

describe("Tempat API Tests", () => {
  let mockData;

  beforeEach(() => {
    jest.clearAllMocks();
    mockData = {
      id: 1,
      nama: "Pantai Indah",
      background: "pantai.jpg",
      waktu: "08:00 - 18:00",
      createdAt: "2025-03-19T12:00:00.000Z",
      updatedAt: "2025-03-19T12:00:00.000Z",
    };
  });

  test("GET /tempat - Mengambil semua tempat", async () => {
    tempatController.getAll.mockImplementation((req, res) => {
      res.status(200).json([mockData]);
    });

    const response = await request(app).get("/tempat");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockData]);
  });

  test("GET /tempat/:id - Mengambil tempat berdasarkan ID", async () => {
    tempatController.getById.mockImplementation((req, res) => {
      res.status(200).json(mockData);
    });

    const response = await request(app).get("/tempat/1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockData);
  });

  test("POST /tempat - Membuat tempat baru", async () => {
    const newTempat = {
      id: 2,
      nama: "Gunung Sejuk",
      background: "gunung.jpg",
      waktu: "06:00 - 17:00",
      createdAt: "2025-03-19T13:00:00.000Z",
      updatedAt: "2025-03-19T13:00:00.000Z",
    };

    tempatController.create.mockImplementation((req, res) => {
      res.status(201).json(newTempat);
    });

    const response = await request(app).post("/tempat").send(newTempat);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(newTempat);
  });

  test("PUT /tempat/:id - Mengupdate tempat", async () => {
    const updatedTempat = { ...mockData, nama: "Pantai Indah Updated" };

    tempatController.update.mockImplementation((req, res) => {
      res.status(200).json(updatedTempat);
    });

    const response = await request(app).put("/tempat/1").send(updatedTempat);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(updatedTempat);
  });

  test("DELETE /tempat/:id - Menghapus tempat", async () => {
    tempatController.delete.mockImplementation((req, res) => {
      res.status(204).send();
    });

    const response = await request(app).delete("/tempat/1");

    expect(response.status).toBe(204);
  });
});
