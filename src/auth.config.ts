import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import prisma from "./lib/prisma";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
  pages: {
    signIn: "/login",
  },
} satisfies NextAuthConfig;
