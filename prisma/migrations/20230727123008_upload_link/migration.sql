/*
  Warnings:

  - Added the required column `link` to the `resume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "resume" ADD COLUMN     "link" STRING NOT NULL;
