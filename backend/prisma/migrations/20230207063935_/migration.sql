-- CreateTable
CREATE TABLE "Phone" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "inches" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "raiting" INTEGER NOT NULL,
    "urlImage" TEXT NOT NULL,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);
