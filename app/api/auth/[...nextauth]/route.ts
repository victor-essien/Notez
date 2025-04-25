// [...nextauth].ts
import NextAuth, { NextAuthOptions, DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Extend the DefaultSession type to include the `id` property
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt", // ✅ Important: switch to JWT
    maxAge: 365 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 365 * 24 * 60 * 60, // Set token expiration to 1 year (in seconds)
  },
  debug:true,
  secret: process.env.NEXTAUTH_SECRET, // ✅ Required for JWT sessions

  callbacks: {
    async session({ session, token }) {
      // ✅ Attach user info from token into session
      if (session?.user) {
        session!.user.id = token.sub ?? "";
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.image = token.picture;
      }
      return session;
    },
    async jwt({ token, account, user }) {
      // ✅ Attach user info to token when logging in
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
