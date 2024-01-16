/*
 * @Date: 2024-01-16 10:09:33
 * @Author: Bruce Hsu
 * @Description: 
 */
import jwt from "jsonwebtoken"

interface TokenPayload {
	userId: number;
	username: string;
}

export function generateJWT({ userId, username }: TokenPayload): string {
	const payload: TokenPayload = {
		userId,
		username
	}
	const secret = process.env.AUTH_SECRET as string
	const expiresIn = process.env.AUTH_EXPIRESIN
	return jwt.sign(payload, secret, { expiresIn })
}