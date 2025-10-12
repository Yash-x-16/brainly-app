/*
  Warnings:

  - You are about to drop the `Links` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
ALTER TYPE "TYPE" ADD VALUE 'NOTE';

-- DropForeignKey
ALTER TABLE "public"."Links" DROP CONSTRAINT "Links_userId_fkey";

-- DropTable
DROP TABLE "public"."Links";

-- CreateTable
CREATE TABLE "content" (
    "linkId" SERIAL NOT NULL,
    "type" "TYPE" NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "tag" (
    "tagid" SERIAL NOT NULL,
    "tags" TEXT NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "link" (
    "hash" TEXT NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "content_linkId_key" ON "content"("linkId");

-- CreateIndex
CREATE UNIQUE INDEX "tag_tagid_key" ON "tag"("tagid");

-- CreateIndex
CREATE UNIQUE INDEX "link_userId_key" ON "link"("userId");

-- AddForeignKey
ALTER TABLE "content" ADD CONSTRAINT "content_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
