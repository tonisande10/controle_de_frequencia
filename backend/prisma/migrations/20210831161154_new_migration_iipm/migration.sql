/*
  Warnings:

  - You are about to drop the column `published` on the `Coordenador` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Coordenador` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Posto` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Coordenador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coordenador" DROP COLUMN "published",
DROP COLUMN "title",
ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "nome" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Posto" DROP COLUMN "name",
ADD COLUMN     "nome" TEXT;
