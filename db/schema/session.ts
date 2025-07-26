import { relations } from "drizzle-orm";
import {
	foreignKey,
	pgTable,
	text,
	timestamp,
	uuid,
} from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { user } from "@/db/schema/user";

export const session = pgTable(
	"session",
	{
		id: uuid().defaultRandom().primaryKey(),
		userId: uuid().notNull(),
		token: text().notNull().unique(),
		ipAddress: text(),
		userAgent: text(),
		expiresAt: timestamp().notNull(),
		...timestamps,
	},
	(table) => [
		foreignKey({ columns: [table.userId], foreignColumns: [user.id] }).onDelete(
			"cascade",
		),
	],
);

export const sessionRelations = relations(session, ({ one }) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id],
	}),
}));
