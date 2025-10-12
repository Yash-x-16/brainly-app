/*
  Warnings:

  - You are about to drop the column `linkId` on the `content` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[contentId]` on the table `content` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."content_linkId_key";

-- AlterTable
ALTER TABLE "content" DROP COLUMN "linkId",
ADD COLUMN     "contentId" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "content_contentId_key" ON "content"("contentId");
