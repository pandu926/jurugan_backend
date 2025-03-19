-- CreateTable
CREATE TABLE "Jadwal" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "tanggal" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,

    CONSTRAINT "Jadwal_pkey" PRIMARY KEY ("id")
);
