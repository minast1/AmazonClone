/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[password]` on the table `users`. If there are existing duplicate values, the migration will fail.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users.password_unique" ON "users"("password");
