import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { platform } from "@/db/schema/platform";

export const platformType = pgTable("platform_type", {
	id: uuid().defaultRandom().primaryKey(),
	name: text().notNull(),
	...timestamps,
});

export const platformTypeRelations = relations(platformType, ({ many }) => ({
	platform: many(platform),
}));
