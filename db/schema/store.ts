import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { gameStore } from "@/db/schema/game-store";

export const store = pgTable("store", {
	id: uuid().defaultRandom().primaryKey(),
	name: text().notNull(),
	...timestamps,
});

export const storeRelations = relations(store, ({ many }) => ({
	gameStore: many(gameStore),
}));
