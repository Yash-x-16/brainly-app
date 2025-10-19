/*
  Warnings:

  - You are about to drop the column `tagss` on the `content` table. All the data in the column will be lost.
  - Added the required column `tags` to the `content` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "content" DROP COLUMN "tagss",
ADD COLUMN     "tags" TEXT NOT NULL;
