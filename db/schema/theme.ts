import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { gameTheme } from "@/db/schema/game-theme";

export const theme = pgTable("theme", {
	id: uuid().defaultRandom().primaryKey(),
	name: text().notNull(),
	...timestamps,
});

export const themeRelations = relations(theme, ({ many }) => ({
	gameTheme: many(gameTheme),
}));
