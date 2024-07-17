/*
  Warnings:

  - You are about to drop the `_CategoryToJoke` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToJoke" DROP CONSTRAINT "_CategoryToJoke_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToJoke" DROP CONSTRAINT "_CategoryToJoke_B_fkey";

-- DropTable
DROP TABLE "_CategoryToJoke";

-- DropTable
DROP TABLE "categories";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
