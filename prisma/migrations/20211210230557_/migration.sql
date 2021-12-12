-- CreateTable
CREATE TABLE "_AnimesToUsers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AnimesToUsers_AB_unique" ON "_AnimesToUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_AnimesToUsers_B_index" ON "_AnimesToUsers"("B");

-- AddForeignKey
ALTER TABLE "_AnimesToUsers" ADD FOREIGN KEY ("A") REFERENCES "Animes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimesToUsers" ADD FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
