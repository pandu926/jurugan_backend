-- DropForeignKey
ALTER TABLE "Tiket" DROP CONSTRAINT "Tiket_customerId_fkey";

-- AlterTable
ALTER TABLE "Tiket" ALTER COLUMN "customerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tiket" ADD CONSTRAINT "Tiket_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
