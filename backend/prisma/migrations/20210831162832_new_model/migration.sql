/*
  Warnings:

  - You are about to drop the column `ativo` on the `Coordenador` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Coordenador` table. All the data in the column will be lost.
  - You are about to drop the `_CoordenadorToPosto` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `matricula` to the `Coordenador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `Coordenador` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CoordenadorToPosto" DROP CONSTRAINT "_CoordenadorToPosto_A_fkey";

-- DropForeignKey
ALTER TABLE "_CoordenadorToPosto" DROP CONSTRAINT "_CoordenadorToPosto_B_fkey";

-- AlterTable
ALTER TABLE "Coordenador" DROP COLUMN "ativo",
DROP COLUMN "createdAt",
ADD COLUMN     "matricula" TEXT NOT NULL,
ADD COLUMN     "telefone" TEXT NOT NULL,
ALTER COLUMN "postoId" DROP NOT NULL;

-- DropTable
DROP TABLE "_CoordenadorToPosto";

-- CreateTable
CREATE TABLE "Funcionario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "data_de_nascimento" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Frequencia" (
    "id" SERIAL NOT NULL,
    "periodo" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "observacao" TEXT NOT NULL,
    "coordenadorId" TEXT,
    "funcionarioId" TEXT,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Frequencia" ADD FOREIGN KEY ("coordenadorId") REFERENCES "Coordenador"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Frequencia" ADD FOREIGN KEY ("funcionarioId") REFERENCES "Funcionario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
