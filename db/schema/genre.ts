import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { gameGenre } from "@/db/schema/game-genre";

export const genre = pgTable("genre", {
	id: uuid().defaultRandom().primaryKey(),
	name: text().notNull(),
	...timestamps,
});

export const genreRelations = relations(genre, ({ many }) => ({
	gameGenre: many(gameGenre),
}));
