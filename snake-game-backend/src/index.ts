import "dotenv/config";
import fastify from "fastify";
import { authenticate } from "./middleware/authenticate.js";
import { getMe } from "./routes/getMe.js";
import { patchMe } from "./routes/patchMe.js";
import { getLeaderboard } from "./routes/getLeaderboard.js";
import cors from '@fastify/cors'

const server = fastify({
    logger: true
});
await server.register(cors, {
    origin: "*",
    methods: ["GET", "PATCH", "POST", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
});
server.get("/me", { preHandler: authenticate }, getMe);

server.patch("/me", { preHandler: authenticate }, patchMe);

server.get("/leaderboard", getLeaderboard);

await server.listen({ port: 3000, host: "0.0.0.0" }).catch(console.error);

console.log("Server listening on port 3000");