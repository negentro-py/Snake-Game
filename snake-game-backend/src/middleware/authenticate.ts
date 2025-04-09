import type { FastifyReply, FastifyRequest } from "fastify";
import { verifyToken } from "../oauth.js";

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return reply.status(401).send({
            error: "Unauthorized",
            message: "No token provided",
        });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return reply.status(401).send({
            error: "Unauthorized",
            message: "No token provided",
        });
    }

    const sub = await verifyToken(token);

    if (!sub) {
        return reply.status(401).send({
            error: "Unauthorized",
            message: "Invalid token",
        });
    }

    request.sub = sub;
}

declare module "fastify" {
    interface FastifyRequest {
        sub?: string;
    }
}