import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { gameAgeRating } from "@/db/schema/game-age-rating";
import { gameCompany } from "@/db/schema/game-company";
import { gameGenre } from "@/db/schema/game-genre";
import { gameMedia } from "@/db/schema/game-media";
import { gameStore } from "@/db/schema/game-store";
import { gameTheme } from "@/db/schema/game-theme";

export const game = pgTable("game", {
	id: uuid().defaultRandom().primaryKey(),
	slug: text().unique().notNull(),
	name: text().notNull(),
	description: text().notNull(),
	...timestamps,
});

export const gameRelations = relations(game, ({ many }) => ({
	gameMedia: many(gameMedia),
	gameCompany: many(gameCompany),
	gameGenre: many(gameGenre),
	gameTheme: many(gameTheme),
	gameAgeRating: many(gameAgeRating),
	gameStore: many(gameStore),
}));
