/*
  Warnings:

  - You are about to drop the `tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."tag" DROP CONSTRAINT "tag_contentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."tag" DROP CONSTRAINT "tag_userId_fkey";

-- DropTable
DROP TABLE "public"."tag";
