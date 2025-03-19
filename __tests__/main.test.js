const request = require("supertest");
const app = require("../app");
const mainpageService = require("../src/services/mainpage.service");
const prisma = require("../src/utils/prismaClient");

jest.mock("../src/services/mainpage.service");

describe("Mainpage API", () => {
  let mainpageId;

  test("POST /main - Buat mainpage baru", async () => {
    mainpageService.create.mockResolvedValue({
      id: 1,
      slogan: "Test Slogan",
      background: "uploads/test.jpg",
      tentang: "Test tentang",
    });

    const response = await request(app)
      .post("/main")
      .field("slogan", "Test Slogan")
      .field("tentang", "Test tentang")
      .attach("image", Buffer.from("dummy file"), "test.jpg");

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    mainpageId = response.body.id;
  });

  test("GET /main - Ambil semua mainpage", async () => {
    mainpageService.getAll.mockResolvedValue([
      {
        id: 1,
        slogan: "Test Slogan",
        background: "uploads/test.jpg",
        tentang: "Test tentang",
      },
    ]);

    const response = await request(app).get("/main");

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  test("GET /main/:id - Ambil mainpage by ID", async () => {
    mainpageService.getById.mockResolvedValue({
      id: mainpageId,
      slogan: "Test Slogan",
      background: "uploads/test.jpg",
      tentang: "Test tentang",
    });

    const response = await request(app).get(`/main/${mainpageId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", mainpageId);
  });

  test("PUT /main/:id - Update mainpage", async () => {
    mainpageService.update.mockResolvedValue({
      id: mainpageId,
      slogan: "Updated Slogan",
      background: "uploads/updated.jpg",
      tentang: "Updated tentang",
    });

    const response = await request(app)
      .put(`/main/${mainpageId}`)
      .field("slogan", "Updated Slogan")
      .field("tentang", "Updated tentang")
      .attach("image", Buffer.from("dummy file"), "updated.jpg");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("slogan", "Updated Slogan");
  });

  test("DELETE /main/:id - Hapus mainpage", async () => {
    mainpageService.delete.mockResolvedValue(true);

    const response = await request(app).delete(`/main/${mainpageId}`);
    expect(response.statusCode).toBe(204);
  });
});
