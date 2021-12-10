-- CreateTable
CREATE TABLE "Animes" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "releaseDate" TEXT NOT NULL,
    "pg" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "episodes" TEXT NOT NULL,
    "studio" TEXT NOT NULL,
    "director" TEXT NOT NULL,

    CONSTRAINT "Animes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Animes_id_key" ON "Animes"("id");
