-- AlterTable
ALTER TABLE "Funcionario" ADD COLUMN     "postoId" TEXT;

-- AddForeignKey
ALTER TABLE "Funcionario" ADD FOREIGN KEY ("postoId") REFERENCES "Posto"("id") ON DELETE SET NULL ON UPDATE CASCADE;
