/*
  Warnings:

  - The values [USER,ADMIN] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `Coordenador` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `coordenadorId` on the `Coordenador` table. All the data in the column will be lost.
  - The primary key for the `Posto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Profile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `postoId` to the `Coordenador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('CAPITAL', 'INTERIOR', 'MOVEL');
ALTER TABLE "Posto" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "Posto" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "Posto" ALTER COLUMN "role" SET DEFAULT 'CAPITAL';
COMMIT;

-- DropForeignKey
ALTER TABLE "Coordenador" DROP CONSTRAINT "Coordenador_coordenadorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_postoId_fkey";

-- AlterTable
ALTER TABLE "Coordenador" DROP CONSTRAINT "Coordenador_pkey",
DROP COLUMN "coordenadorId",
ADD COLUMN     "postoId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "Coordenador_id_seq";

-- AlterTable
ALTER TABLE "Posto" DROP CONSTRAINT "Posto_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "role" SET DEFAULT E'CAPITAL',
ADD PRIMARY KEY ("id");
DROP SEQUENCE "Posto_id_seq";

-- AlterTable
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "postoId" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "Profile_id_seq";

-- CreateTable
CREATE TABLE "_CoordenadorToPosto" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CoordenadorToPosto_AB_unique" ON "_CoordenadorToPosto"("A", "B");

-- CreateIndex
CREATE INDEX "_CoordenadorToPosto_B_index" ON "_CoordenadorToPosto"("B");

-- AddForeignKey
ALTER TABLE "Profile" ADD FOREIGN KEY ("postoId") REFERENCES "Posto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coordenador" ADD FOREIGN KEY ("postoId") REFERENCES "Posto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CoordenadorToPosto" ADD FOREIGN KEY ("A") REFERENCES "Coordenador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CoordenadorToPosto" ADD FOREIGN KEY ("B") REFERENCES "Posto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
