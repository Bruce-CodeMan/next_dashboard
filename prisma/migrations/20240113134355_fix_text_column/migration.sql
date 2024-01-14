/*
  Warnings:

  - Added the required column `desc` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `desc` TEXT NOT NULL;
