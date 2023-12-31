// auth.ts
import { type DefaultSession, type DefaultUser } from "next-auth"
import {JWT, DefaultJWT} from 'next-auth/jwt'

declare module "next-auth" {
    interface Session {
        user: {
            phone: string
            address: []
            role: string
        } & DefaultSession
    }

    interface User extends DefaultUser {
        phone: string,
        address: [],
        role: string
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        phone: string
        address: []
        role: string
    }
}