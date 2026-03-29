import { betterAuth } from "better-auth";
import { username } from "better-auth/plugins";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "$lib/server/database";
import { sveltekitCookies } from "better-auth/svelte-kit";
import { getRequestEvent } from "$app/server";
import { BETTER_AUTH_URL, BETTER_AUTH_SECRET } from "$env/static/private";

export const auth = betterAuth({
  baseURL: BETTER_AUTH_URL,
  secret: BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(client.db()),
  plugins: [username(), sveltekitCookies(getRequestEvent)],
});

export type Session = typeof auth.$Infer.Session;
