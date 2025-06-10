import "@/lib/env";
import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle({
	connection: process.env.DB_URL as string,
});
