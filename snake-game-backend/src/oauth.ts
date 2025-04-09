import { OAuth2Client } from "google-auth-library";

const clientId = process.env["GOOGLE_CLIENT_ID"];

if (!clientId) {
    throw new Error("GOOGLE_CLIENT_ID environment variable is not set");
}

const client = new OAuth2Client(clientId);

export async function verifyToken(token: string) {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: clientId!,
        });

        const payload = ticket.getPayload();

        if (!payload) {
            return null;
        }

        return payload.sub;
    } catch (error) {
        console.error(error);
        return null;
    }
}
