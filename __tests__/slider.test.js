const request = require("supertest");
const express = require("express");
const sliderRouter = require("../src/routes/slider.route");
const sliderController = require("../src/controllers/slider.controller");

// Mock Controller
jest.mock("../src/controllers/slider.controller");

const app = express();
app.use(express.json());
app.use(sliderRouter);

describe("Slider Router Tests", () => {
  let mockData;

  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock sebelum setiap tes

    mockData = {
      id: 1,
      judul: "Slider 1",
      tentang: "Deskripsi",
      background: "image.jpg",
    };
  });

  /** ============================
   *  ROUTE TESTING
   * ============================ */

  test("GET /slider - Mengambil semua slider", async () => {
    sliderController.getAll.mockImplementation((req, res) => {
      res.status(200).json([mockData]);
    });

    const response = await request(app).get("/slider");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockData]);
  });

  test("GET /slider/:id - Mengambil slider berdasarkan ID", async () => {
    sliderController.getById.mockImplementation((req, res) => {
      res.status(200).json(mockData);
    });

    const response = await request(app).get("/slider/1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockData);
  });

  test("POST /slider - Membuat slider baru", async () => {
    const newSlider = {
      id: 2,
      judul: "Slider Baru",
      tentang: "Deskripsi Baru",
      background: "new-image.jpg",
    };

    sliderController.create.mockImplementation((req, res) => {
      res.status(201).json(newSlider);
    });

    const response = await request(app).post("/slider").send(newSlider);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(newSlider);
  });

  test("PUT /slider/:id - Mengupdate slider", async () => {
    const updatedSlider = {
      id: 1,
      judul: "Slider Update",
      tentang: "Updated",
      background: "updated.jpg",
    };

    sliderController.update.mockImplementation((req, res) => {
      res.status(200).json(updatedSlider);
    });

    const response = await request(app).put("/slider/1").send(updatedSlider);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(updatedSlider);
  });

  test("DELETE /slider/:id - Menghapus slider", async () => {
    sliderController.delete.mockImplementation((req, res) => {
      res.status(204).send();
    });

    const response = await request(app).delete("/slider/1");

    expect(response.status).toBe(204);
  });
});
