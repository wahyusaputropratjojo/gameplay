import { relations } from "drizzle-orm";
import { boolean, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { account } from "@/db/schema/account";
import { session } from "@/db/schema/session";

export const user = pgTable("user", {
	id: uuid().defaultRandom().primaryKey(),
	name: text().notNull(),
	email: text().notNull().unique(),
	emailVerified: boolean("email_verified").default(false).notNull(),
	image: text(),
	...timestamps,
});

export const userRelations = relations(user, ({ many }) => ({
	account: many(account),
	session: many(session),
}));
