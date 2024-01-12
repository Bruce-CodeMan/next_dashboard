/*
 * @Date: 2024-01-12 14:39:06
 * @Author: Bruce Hsu
 * @Description: 
 */
// src/db/index.ts
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
	return new PrismaClient()
}

declare global {
	var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if(process.env.NODE_ENV !== "production") globalThis.prisma = prisma
