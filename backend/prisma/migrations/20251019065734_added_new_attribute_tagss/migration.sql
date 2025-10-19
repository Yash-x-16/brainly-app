/*
  Warnings:

  - Added the required column `tagss` to the `content` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "content" ADD COLUMN     "tagss" TEXT NOT NULL;
