const request = require("supertest");
const app = require("../app");
const fs = require("fs");
const path = require("path");

let sosmedId;

describe("Sosmed API", () => {
  test("POST /sosmed - Buat sosmed baru", async () => {
    const response = await request(app)
      .post("/sosmed")
      .field("link", "https://example.com")
      .attach("image", Buffer.from("dummy file"), "image.jpg"); // Simulasi file upload

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    sosmedId = response.body.id;
  });

  test("GET /sosmed/:id - Ambil sosmed by ID", async () => {
    const response = await request(app).get(`/sosmed/${sosmedId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", sosmedId);
  });

  test("PUT /sosmed/:id - Update sosmed", async () => {
    const response = await request(app)
      .put(`/sosmed/${sosmedId}`)
      .field("link", "https://updated-example.com")
      .attach("image", Buffer.from("dummy file"), "new-image.jpg");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("link", "https://updated-example.com");
  });

  test("DELETE /sosmed/:id - Hapus sosmed", async () => {
    const response = await request(app).delete(`/sosmed/${sosmedId}`);
    expect(response.statusCode).toBe(204);
  });

  test("GET /sosmed/:id - Pastikan sosmed terhapus", async () => {
    const response = await request(app).get(`/sosmed/${sosmedId}`);
    expect(response.statusCode).toBe(404);
  });
});
