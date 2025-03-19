const request = require("supertest");
const express = require("express");
const userRoutes = require("../src/routes/user.route");
const userService = require("../src/services/user.service"); // Ubah dari controller ke service

jest.mock("../src/services/user.service"); // Mock userService, bukan userController

const app = express();
app.use(express.json());
app.use(userRoutes);

describe("User API Tests", () => {
  let mockData;

  beforeEach(() => {
    jest.clearAllMocks();
    mockData = {
      id: 1,
      username: "admin",
      password: "hashedpassword",
      role: "admin",
    };
  });

  test("GET /user - Mengambil semua user", async () => {
    userService.getAllUsers.mockResolvedValue([mockData]); // Perbaiki: Mock service, bukan controller

    const response = await request(app).get("/user");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockData]);
  });

  test("POST /user - Membuat user baru", async () => {
    const newUser = {
      id: 2,
      username: "user1",
      password: "hashedpassword",
      role: "customer",
    };

    userService.createUser.mockResolvedValue(newUser); // Perbaiki: Mock service, bukan controller

    const response = await request(app).post("/user").send(newUser);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(newUser);
  });
});
