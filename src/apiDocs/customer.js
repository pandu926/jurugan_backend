/**
 *  @swagger
 * /customer:
 *  get:
 *      tags:
 *          - customer
 *      summary: Get All Customers
 *      description: Mengambil semua data customer
 *      responses:
 *              '200':
 *                 description: Customer berhasil ditemukan
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
 *                                    name:
 *                                       type: string
 *                                       example: John Doe
 *                                    email:
 *                                       type: string
 *                                       example: john.doe@example.com
 *                                    phone:
 *                                       type: string
 *                                       example: 123-456-789
 *                                    createdAt:
 *                                       type: string
 *                                       example: 2024-12-05T10:00:00Z
 *  post:
 *      tags:
 *          - customer
 *      summary: Create Customer
 *      description: API untuk membuat customer baru
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           name:
 *                              type: string
 *                              example: John Doe
 *                           email:
 *                              type: string
 *                              example: john.doe@example.com
 *                           phone:
 *                              type: string
 *                              example: 123-456-789
 *      responses:
 *              '201':
 *                 description: Customer berhasil dibuat
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                id:
 *                                   type: integer
 *                                   example: 1
 *                                name:
 *                                   type: string
 *                                   example: John Doe
 *                                email:
 *                                   type: string
 *                                   example: john.doe@example.com
 *                                phone:
 *                                   type: string
 *                                   example: 123-456-789
 *                                createdAt:
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
 *                                      example: Data tidak valid
 */
