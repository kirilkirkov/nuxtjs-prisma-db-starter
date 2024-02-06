import prisma from "@/lib/prisma";

export default defineEventHandler(async (event) => {
  const posts = await prisma.posts.findMany({});
  return posts;
});
