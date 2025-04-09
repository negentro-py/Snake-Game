import { PrismaClient } from "@prisma/client";
import type { FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient();

export async function patchMe(request: FastifyRequest, reply: FastifyReply) {
    if (!request.sub) {
        return reply.status(401).send({
            error: "Unauthorized",
            message: "No token provided",
        });
    }

    const body = request.body as {
        name?: string,
        email?: string,
        picture?: string,
        highscore?: number,
    };

    const existingUser = await prisma.user.findUnique({
        where: {
            sub: request.sub,
        },
        select: {
            id: true,
        }
    });

    if (!existingUser) {
        if (!body.email || !body.name) {
            return reply.status(400).send({
                error: "Bad Request",
                message: "User does not exist, to create, email and name are required",
            });
        }

        const newUser = await prisma.user.create({
            data: {
                sub: request.sub,
                name: body.name,
                email: body.email,
                picture: body.picture || null,
                highscore: body.highscore || 0,
            }
        });

        return newUser;
    }

    const updateData: {
        name?: string,
        email?: string,
        picture?: string,
        highscore?: number,
    } = {};

    if (body.name) {
        updateData.name = body.name;
    }

    if (body.email) {
        updateData.email = body.email;
    }

    if (body.picture) {
        updateData.picture = body.picture;
    }

    if (body.highscore) {
        updateData.highscore = body.highscore;
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: existingUser.id,
        },
        data: updateData,
    });

    return updatedUser;
}