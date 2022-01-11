/*
  Warnings:

  - You are about to drop the column `coordenadorId` on the `Frequencia` table. All the data in the column will be lost.
  - You are about to drop the column `funcionarioId` on the `Frequencia` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Posto` table. All the data in the column will be lost.
  - You are about to drop the `Coordenador` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Funcionario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CoordenadorToPosto` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TipoServidor" AS ENUM ('COORDENADOR', 'FUNCIONARIO', 'CARGO');

-- CreateEnum
CREATE TYPE "TipoPosto" AS ENUM ('CAPITAL', 'INTERIOR', 'MOVEL');

-- DropForeignKey
ALTER TABLE "Frequencia" DROP CONSTRAINT "Frequencia_coordenadorId_fkey";

-- DropForeignKey
ALTER TABLE "Frequencia" DROP CONSTRAINT "Frequencia_funcionarioId_fkey";

-- DropForeignKey
ALTER TABLE "Funcionario" DROP CONSTRAINT "Funcionario_postoId_fkey";

-- DropForeignKey
ALTER TABLE "_CoordenadorToPosto" DROP CONSTRAINT "_CoordenadorToPosto_A_fkey";

-- DropForeignKey
ALTER TABLE "_CoordenadorToPosto" DROP CONSTRAINT "_CoordenadorToPosto_B_fkey";

-- AlterTable
ALTER TABLE "Frequencia" DROP COLUMN "coordenadorId",
DROP COLUMN "funcionarioId",
ADD COLUMN     "servidorId" TEXT;

-- AlterTable
ALTER TABLE "Posto" DROP COLUMN "role",
ADD COLUMN     "tipoPosto" "TipoPosto" NOT NULL DEFAULT E'CAPITAL';

-- DropTable
DROP TABLE "Coordenador";

-- DropTable
DROP TABLE "Funcionario";

-- DropTable
DROP TABLE "_CoordenadorToPosto";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "Servidor" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "data_de_nascimento" TEXT NOT NULL,
    "tipoDoServidor" "TipoServidor" NOT NULL DEFAULT E'FUNCIONARIO',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PostoToServidor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostoToServidor_AB_unique" ON "_PostoToServidor"("A", "B");

-- CreateIndex
CREATE INDEX "_PostoToServidor_B_index" ON "_PostoToServidor"("B");

-- AddForeignKey
ALTER TABLE "Frequencia" ADD FOREIGN KEY ("servidorId") REFERENCES "Servidor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostoToServidor" ADD FOREIGN KEY ("A") REFERENCES "Posto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostoToServidor" ADD FOREIGN KEY ("B") REFERENCES "Servidor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
