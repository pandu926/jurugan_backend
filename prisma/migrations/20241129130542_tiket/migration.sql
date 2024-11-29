/*
  Warnings:

  - You are about to drop the column `eventId` on the `Tiket` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nomer_hp]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `status` to the `Tiket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Tiket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tiket" DROP CONSTRAINT "Tiket_eventId_fkey";

-- AlterTable
ALTER TABLE "Tiket" DROP COLUMN "eventId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_nomer_hp_key" ON "Customer"("nomer_hp");
