const request = require("supertest");
const express = require("express");
const customerRoutes = require("../src/routes/customer.route");
const customerService = require("../src/services/customer.service"); // Ubah dari controller ke service

jest.mock("../src/services/customer.service"); // Mock service, bukan controller

const app = express();
app.use(express.json());
app.use(customerRoutes);

describe("Customer API Tests", () => {
  let mockData;

  beforeEach(() => {
    jest.clearAllMocks();
    mockData = {
      id: 1,
      nama_lengkap: "John Doe",
      nomer_hp: "08123456789",
      alamat: "Jl. Merdeka No.1",
      createdAt: "2025-03-19T12:00:00.000Z",
      updatedAt: "2025-03-19T12:00:00.000Z",
    };
  });

  test("GET /customer - Mengambil semua customer", async () => {
    customerService.getAllCustomers.mockResolvedValue([mockData]);

    const response = await request(app).get("/customer");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockData]);
  });

  test("GET /customer/:id - Mengambil customer berdasarkan ID", async () => {
    customerService.getCustomerById.mockResolvedValue(mockData);

    const response = await request(app).get(`/customer/${mockData.id}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockData);
  });

  test("POST /customer - Membuat customer baru", async () => {
    const newCustomer = {
      id: 2,
      nama_lengkap: "Jane Doe",
      nomer_hp: "08123456780",
      alamat: "Jl. Sudirman No.2",
    };

    customerService.createCustomer.mockResolvedValue(newCustomer);

    const response = await request(app).post("/customer").send(newCustomer);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(newCustomer);
  });

  test("PUT /customer/:id - Mengupdate customer", async () => {
    const updatedCustomer = { ...mockData, nama_lengkap: "John Updated" };

    customerService.updateCustomer.mockResolvedValue(updatedCustomer);

    const response = await request(app)
      .put(`/customer/${mockData.id}`)
      .send(updatedCustomer);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(updatedCustomer);
  });

  test("DELETE /customer/:id - Menghapus customer", async () => {
    customerService.deleteCustomer.mockResolvedValue();

    const response = await request(app).delete(`/customer/${mockData.id}`);

    expect(response.status).toBe(204); // 204 No Content karena berhasil dihapus
    expect(response.body).toEqual({});
  });

  test("GET /customer/:id - Customer tidak ditemukan", async () => {
    customerService.getCustomerById.mockResolvedValue(null);

    const response = await request(app).get("/customer/999"); // ID yang tidak ada

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: "Customer not found" });
  });
});
