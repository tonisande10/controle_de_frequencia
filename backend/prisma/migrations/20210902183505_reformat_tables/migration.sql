/*
  Warnings:

  - You are about to drop the column `postoId` on the `Coordenador` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Coordenador" DROP CONSTRAINT "Coordenador_postoId_fkey";

-- AlterTable
ALTER TABLE "Coordenador" DROP COLUMN "postoId";

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
ALTER TABLE "_CoordenadorToPosto" ADD FOREIGN KEY ("A") REFERENCES "Coordenador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CoordenadorToPosto" ADD FOREIGN KEY ("B") REFERENCES "Posto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
