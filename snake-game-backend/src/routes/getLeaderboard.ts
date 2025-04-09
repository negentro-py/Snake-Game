import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getLeaderboard() {
    const leaderboard = await prisma.user.findMany({
        select: {
            name: true,
            picture: true,
            highscore: true,
        },
        orderBy: {
            highscore: "desc",
        },
        take: 10,
    });

    return leaderboard;
}