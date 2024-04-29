import { PrismaClient } from "@prisma/client";
import { enhance } from "@zenstackhq/runtime";
import { softDeleteExtension } from "./extensions/soft-delete";

/**
 * @warn This client should not be used directly in the application.
 *
 * This is the bare Prisma client that is used to create the enhanced Prisma client.
 */
const barePrismaClient = new PrismaClient();

/**
 * @warn This client should only be used when we need to bypass Zenstack (ie, during login or migrations).
 *
 * This is the Prisma client that is used in the application when Zenstack is not needed.
 * It has been extended with additional functionality, namely soft delete.
 */
export const prisma = barePrismaClient.$extends(softDeleteExtension);

/**
 * Gets new enhanced Prisma client with the user object.
 * "Enhanced" means that the client has been extended with additional functionality, namely soft delete.
 * It also applies any access control rules that are defined by Zenstack.
 *
 * @param user current session user
 * @returns Zenstack-enhanced Prisma client
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- This is a dynamic type definition
export const getEnhancedPrismaClient = (user: Record<string, unknown>) => {
  return enhance(barePrismaClient, { user }).$extends(softDeleteExtension);
};

export type EnhancedPrismaClient = ReturnType<typeof getEnhancedPrismaClient>;
