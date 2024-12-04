/**
 *  @swagger
 * /tiket:
 *  get:
 *      tags:
 *          - tiket
 *      summary: Get All Tikets
 *      description: Mengambil semua tiket
 *      responses:
 *              '200':
 *                 description: Tiket berhasil ditemukan
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                    id:
 *                                       type: integer
 *                                       example: 1
 *                                    tiket_nomer:
 *                                       type: string
 *                                       example: TKT001
 *                                    customerId:
 *                                       type: integer
 *                                       example: 1
 *                                    status:
 *                                       type: string
 *                                       example: pending
 *                                    createdAt:
 *                                       type: string
 *                                       example: 2024-12-05T10:00:00Z
 *                                    updatedAt:
 *                                       type: string
 *                                       example: 2024-12-05T10:00:00Z
 *              '404':
 *                 description: Tidak ada tiket ditemukan
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      example: Tidak ada tiket ditemukan
 *  post:
 *      tags:
 *          - tiket
 *      summary: Create Tiket
 *      description: API untuk membuat tiket baru
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           tiket_nomer:
 *                              type: string
 *                              example: TKT001
 *                           customerId:
 *                              type: integer
 *                              example: 1
 *                           status:
 *                              type: string
 *                              example: pending
 *      responses:
 *              '201':
 *                 description: Tiket berhasil dibuat
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                id:
 *                                   type: integer
 *                                   example: 1
 *                                tiket_nomer:
 *                                   type: string
 *                                   example: TKT001
 *                                customerId:
 *                                   type: integer
 *                                   example: 1
 *                                status:
 *                                   type: string
 *                                   example: pending
 *                                createdAt:
 *                                   type: string
 *                                   example: 2024-12-05T10:00:00Z
 *                                updatedAt:
 *                                   type: string
 *                                   example: 2024-12-05T10:00:00Z
 *              '400':
 *                 description: Bad Request - Data tidak valid
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      example: Tiket nomer sudah ada
 *
 * /tiket/{id}:
 *  get:
 *      tags:
 *          - tiket
 *      summary: Get Tiket by ID
 *      description: Mengambil data tiket berdasarkan ID
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: ID tiket
 *            schema:
 *              type: integer
 *      responses:
 *              '200':
 *                 description: Tiket berhasil ditemukan
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                id:
 *                                   type: integer
 *                                   example: 1
 *                                tiket_nomer:
 *                                   type: string
 *                                   example: TKT001
 *                                customerId:
 *                                   type: integer
 *                                   example: 1
 *                                status:
 *                                   type: string
 *                                   example: pending
 *                                createdAt:
 *                                   type: string
 *                                   example: 2024-12-05T10:00:00Z
 *                                updatedAt:
 *                                   type: string
 *                                   example: 2024-12-05T10:00:00Z
 *              '404':
 *                 description: Tiket tidak ditemukan
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      example: Tiket tidak ditemukan
 *  put:
 *      tags:
 *          - tiket
 *      summary: Update Tiket
 *      description: Memperbarui data tiket berdasarkan ID
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: ID tiket yang ingin diperbarui
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           tiket_nomer:
 *                              type: string
 *                              example: TKT001
 *                           customerId:
 *                              type: integer
 *                              example: 1
 *                           status:
 *                              type: string
 *                              example: confirmed
 *      responses:
 *              '200':
 *                 description: Tiket berhasil diperbarui
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                id:
 *                                   type: integer
 *                                   example: 1
 *                                tiket_nomer:
 *                                   type: string
 *                                   example: TKT001
 *                                customerId:
 *                                   type: integer
 *                                   example: 1
 *                                status:
 *                                   type: string
 *                                   example: confirmed
 *                                createdAt:
 *                                   type: string
 *                                   example: 2024-12-05T10:00:00Z
 *                                updatedAt:
 *                                   type: string
 *                                   example: 2024-12-05T10:15:00Z
 *              '400':
 *                 description: Bad Request - Data tidak valid
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      example: Data tidak valid
 *              '404':
 *                 description: Tiket tidak ditemukan
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      example: Tiket tidak ditemukan
 *  delete:
 *      tags:
 *          - tiket
 *      summary: Delete Tiket
 *      description: Menghapus tiket berdasarkan ID
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: ID tiket yang ingin dihapus
 *            schema:
 *              type: integer
 *      responses:
 *              '200':
 *                 description: Tiket berhasil dihapus
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                                      example: Tiket berhasil dihapus
 *              '404':
 *                 description: Tiket tidak ditemukan
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      example: Tiket tidak ditemukan
 */
