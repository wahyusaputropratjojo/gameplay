import { relations } from "drizzle-orm";
import { foreignKey, pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { ageRating } from "@/db/schema/age-rating";
import { game } from "@/db/schema/game";

export const gameAgeRating = pgTable(
	"game_age_rating",
	{
		gameId: uuid().notNull(),
		ageRatingId: uuid().notNull(),
		...timestamps,
	},
	(table) => [
		primaryKey({
			columns: [table.gameId, table.ageRatingId],
		}),
		foreignKey({
			columns: [table.gameId],
			foreignColumns: [game.id],
		}),
		foreignKey({
			columns: [table.ageRatingId],
			foreignColumns: [ageRating.id],
		}),
	],
);

export const gameAgeRatingRelations = relations(gameAgeRating, ({ one }) => ({
	game: one(game, {
		fields: [gameAgeRating.gameId],
		references: [game.id],
	}),
	ageRating: one(ageRating, {
		fields: [gameAgeRating.ageRatingId],
		references: [ageRating.id],
	}),
}));
