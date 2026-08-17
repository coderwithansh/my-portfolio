import { cookies } from "next/headers";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined");
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

export async function getCurrentAdmin() {
  const cookieStore = await cookies();

  const session = cookieStore.get("admin_session");

  if (!session?.value) {
    return null;
  }

  const admin = await prisma.user.findUnique({
    where: {
      id: session.value,
    },
  });

  if (!admin || admin.role !== "ADMIN") {
    return null;
  }

  return admin;
}