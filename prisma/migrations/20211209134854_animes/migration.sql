/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Animes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Animes_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Animes_title_key" ON "Animes"("title");
