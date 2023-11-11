import { connectDB } from "@/lib/mongodb";
import User from "@/models/user.model";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

const options: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ) {
        console.log(credentials);
        if (!credentials?.email || !credentials?.password)
          throw new Error("Invalid credentials");
        await connectDB();
        const user = await User.findOne({ email: credentials.email });
        console.log(user);
        if(!user) throw new Error("Email is not registered"); // check auto error redirection
        if (!user?.hashedPassword)
          throw new Error("Invalid credentials");
        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        if (!isValidPassword) throw new Error("Invalid credentials");
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.phone = user.phone;
        token.role = user.role;
      }
      if (trigger === "update") {
        token.name = session.name;
        token.phone = session.phone;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.phone = token.phone;
        session.user.role = token.role;
      }
      return session;
    },
    async signIn({ user, account, profile, credentials }) {
      console.log('user: ', user, 'account: ', account, 'profile: ', profile);
      const email = user?.email;
      const name = user?.name;
      if(account?.provider === 'google') {
        await connectDB();
        const user = await User.findOne({ email });
        if(!user) {
          await User.create({
            email,
            name,
            role: 'user',
            phone: '',
            hashedPassword: '',
          });
        }
      }
      return true;
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
