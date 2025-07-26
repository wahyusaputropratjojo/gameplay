import { relations } from "drizzle-orm";
import { foreignKey, pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { game } from "@/db/schema/game";
import { media } from "@/db/schema/media";

export const gameMedia = pgTable(
	"game_media",
	{
		gameId: uuid().notNull(),
		mediaId: uuid().notNull(),
		...timestamps,
	},
	(table) => [
		primaryKey({
			columns: [table.gameId, table.mediaId],
		}),
		foreignKey({
			columns: [table.gameId],
			foreignColumns: [game.id],
		}),
		foreignKey({
			columns: [table.mediaId],
			foreignColumns: [media.id],
		}),
	],
);

export const gameMediaRelations = relations(gameMedia, ({ one }) => ({
	game: one(game, {
		fields: [gameMedia.gameId],
		references: [game.id],
	}),
	media: one(media, {
		fields: [gameMedia.mediaId],
		references: [media.id],
	}),
}));
