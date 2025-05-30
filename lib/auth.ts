import { db } from "@/db/db";
import { account } from "@/db/schema/account";
import { session } from "@/db/schema/session";
import { user } from "@/db/schema/user";
import { verification } from "@/db/schema/verification";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: {
			user,
			session,
			account,
			verification,
		},
		usePlural: false,
	}),

	emailAndPassword: {
		enabled: true,
	},
});
