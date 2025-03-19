const request = require("supertest");
const express = require("express");
const eventRoutes = require("../src/routes/event.route");
const eventService = require("../src/services/event.service"); // Ubah dari controller ke service

jest.mock("../src/services/event.service"); // Mock service, bukan controller

const app = express();
app.use(express.json());
app.use(eventRoutes);

describe("Event API Tests", () => {
  let mockData;

  beforeEach(() => {
    jest.clearAllMocks();
    mockData = {
      id: 1,
      nama_event: "Music Fest 2025",
      tanggal: "2025-06-15",
      tempat: "Stadion Utama",
      createdAt: "2025-03-19T12:00:00.000Z",
      updatedAt: "2025-03-19T12:00:00.000Z",
    };
  });

  test("GET /event - Mengambil semua event", async () => {
    eventService.getAllEvents.mockResolvedValue([mockData]); // Mock service, bukan controller

    const response = await request(app).get("/event");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockData]);
  });

  test("POST /event - Membuat event baru", async () => {
    const newEvent = {
      id: 2,
      nama_event: "Tech Expo 2025",
      tanggal: "2025-07-20",
      tempat: "Convention Center",
    };

    eventService.createEvent.mockResolvedValue(newEvent); // Mock service, bukan controller

    const response = await request(app).post("/event").send(newEvent);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(newEvent);
  });
});
