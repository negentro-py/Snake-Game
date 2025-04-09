import { PrismaClient } from "@prisma/client";
import type { FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient();

export async function getMe(request: FastifyRequest, reply: FastifyReply) {
    if (!request.sub) {
        return reply.status(401).send({
            error: "Unauthorized",
            message: "No token provided",
        });
    }

    const user = await prisma.user.findUnique({
        where: {
            sub: request.sub,
        },
        select: {
            name: true,
            email: true,
            picture: true,
            highscore: true,
        }
    });

    if (!user) {
        return reply.status(404).send({
            error: "Not Found",
            message: "User not found",
        });
    }

    return user;
}