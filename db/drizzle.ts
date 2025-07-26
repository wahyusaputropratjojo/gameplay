import "@/lib/env";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@/db/schema";

export const db = drizzle({
	connection: {
		connectionString: process.env.DB_URL as string,
	},
	schema: schema,
	casing: "snake_case",
});
