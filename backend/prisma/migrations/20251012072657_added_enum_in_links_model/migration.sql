/*
  Warnings:

  - Added the required column `type` to the `Links` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TYPE" AS ENUM ('YOUTUBE', 'TWITTER');

-- AlterTable
ALTER TABLE "Links" ADD COLUMN     "type" "TYPE" NOT NULL;
