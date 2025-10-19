/*
  Warnings:

  - Added the required column `contentId` to the `tag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tag" ADD COLUMN     "contentId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "content"("contentId") ON DELETE RESTRICT ON UPDATE CASCADE;
