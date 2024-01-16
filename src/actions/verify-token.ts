/*
 * @Date: 2024-01-16 10:23:31
 * @Author: Bruce Hsu
 * @Description: 
 */
import jwt from "jsonwebtoken"

interface TokenPayload {
	userId: number;
	username: string;
}

export function verifyJWT(token: string): Promise<TokenPayload> {
	return new Promise((resolve, reject) => {
		const secret = process.env.AUTH_SECRET as string
		if(!secret) {
			reject(new Error("Authentication secret is not set"))
			return
		}

		jwt.verify(token, secret, (err, decoded) => {
			if(err) {
				reject(err)
			}else {
				resolve(decoded as TokenPayload)
			}
		})
	})
}

