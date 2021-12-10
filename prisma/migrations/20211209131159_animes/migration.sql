/*
  Warnings:

  - Changed the type of `pg` on the `Animes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `episodes` on the `Animes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Animes" DROP COLUMN "pg",
ADD COLUMN     "pg" INTEGER NOT NULL,
DROP COLUMN "episodes",
ADD COLUMN     "episodes" INTEGER NOT NULL;
