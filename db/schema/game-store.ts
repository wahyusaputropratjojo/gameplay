import { relations } from "drizzle-orm";
import {
	foreignKey,
	pgTable,
	primaryKey,
	text,
	uuid,
} from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { game } from "@/db/schema/game";
import { store } from "@/db/schema/store";

export const gameStore = pgTable(
	"game_store",
	{
		gameId: uuid().notNull(),
		storeId: uuid().notNull(),
		url: text().notNull(),
		...timestamps,
	},
	(table) => [
		primaryKey({
			columns: [table.gameId, table.storeId],
		}),
		foreignKey({
			columns: [table.gameId],
			foreignColumns: [game.id],
		}),
		foreignKey({
			columns: [table.storeId],
			foreignColumns: [store.id],
		}),
	],
);

export const gameStoreRelations = relations(gameStore, ({ one }) => ({
	game: one(game, {
		fields: [gameStore.gameId],
		references: [game.id],
	}),
	store: one(store, {
		fields: [gameStore.storeId],
		references: [store.id],
	}),
}));
