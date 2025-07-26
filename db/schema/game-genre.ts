import { relations } from "drizzle-orm";
import { foreignKey, pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { game } from "@/db/schema/game";
import { genre } from "@/db/schema/genre";

export const gameGenre = pgTable(
	"game_genre",
	{
		gameId: uuid().notNull(),
		genreId: uuid().notNull(),
		...timestamps,
	},
	(table) => [
		primaryKey({
			columns: [table.gameId, table.genreId],
		}),
		foreignKey({
			columns: [table.gameId],
			foreignColumns: [game.id],
		}),
		foreignKey({
			columns: [table.genreId],
			foreignColumns: [genre.id],
		}),
	],
);

export const gameGenreRelations = relations(gameGenre, ({ one }) => ({
	game: one(game, {
		fields: [gameGenre.gameId],
		references: [game.id],
	}),
	genre: one(genre, {
		fields: [gameGenre.genreId],
		references: [genre.id],
	}),
}));
