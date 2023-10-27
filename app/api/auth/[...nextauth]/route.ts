import { connectDB } from '@/lib/mongodb'
import User from '@/models/user.model'
import NextAuth, {AuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcrypt'

const options : AuthOptions = {
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_ID || '',
        clientSecret: process.env.GOOGLE_SECRET || '',
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: 'Email', type: 'email'},
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined) {
                console.log(credentials);
                if(!credentials?.email || !credentials?.password) 
                    throw new Error('Invalid credentials')
                await connectDB()
                const user = await User.findOne({email: credentials.email})
                if(!user || !user?.hashedPassword) throw new Error('Invalid credentials')
                const isValidPassword = await bcrypt.compare(credentials.password, user.hashedPassword)
                if(!isValidPassword) throw new Error('Invalid credentials')
                return user
            }
        })      
    ],
    pages: {
        signIn: '/signin',
        signOut: '/',
        newUser: '/register'
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(options)

export { handler as GET, handler as POST }