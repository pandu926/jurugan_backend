const request = require("supertest");
const express = require("express");
const checkinRouter = require("../src/routes/checkin.route");
const checkinController = require("../src/controllers/checkin.controller");

// Mock Controller
jest.mock("../src/controllers/checkin.controller");

const app = express();
app.use(express.json());
app.use(checkinRouter);

describe("Checkin Router Tests", () => {
  let mockData;

  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock sebelum setiap tes

    mockData = {
      id: 1,
      nama: "John Doe",
      createdAt: "2025-03-19T12:00:00.000Z",
      updatedAt: "2025-03-19T12:00:00.000Z",
    };
  });

  /** ============================
   *  ROUTE TESTING
   * ============================ */

  test("GET /checkin - Mengambil semua checkin", async () => {
    checkinController.getAll.mockImplementation((req, res) => {
      res.status(200).json([mockData]);
    });

    const response = await request(app).get("/checkin");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockData]);
  });

  test("GET /checkin/:id - Mengambil checkin berdasarkan ID", async () => {
    checkinController.getById.mockImplementation((req, res) => {
      res.status(200).json(mockData);
    });

    const response = await request(app).get("/checkin/1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockData);
  });

  test("POST /checkin - Membuat checkin baru", async () => {
    const newCheckin = {
      id: 2,
      nama: "Jane Doe",
      createdAt: "2025-03-19T12:10:00.000Z",
      updatedAt: "2025-03-19T12:10:00.000Z",
    };

    checkinController.create.mockImplementation((req, res) => {
      res.status(201).json(newCheckin);
    });

    const response = await request(app).post("/checkin").send(newCheckin);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(newCheckin);
  });

  test("PUT /checkin/:id - Mengupdate checkin", async () => {
    const updatedCheckin = {
      id: 1,
      nama: "John Updated",
      createdAt: "2025-03-19T12:00:00.000Z",
      updatedAt: "2025-03-19T12:20:00.000Z",
    };

    checkinController.update.mockImplementation((req, res) => {
      res.status(200).json(updatedCheckin);
    });

    const response = await request(app).put("/checkin/1").send(updatedCheckin);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(updatedCheckin);
  });

  test("DELETE /checkin/:id - Menghapus checkin", async () => {
    checkinController.delete.mockImplementation((req, res) => {
      res.status(204).send();
    });

    const response = await request(app).delete("/checkin/1");

    expect(response.status).toBe(204);
  });
});
