import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const game = pgTable("game", {
	id: uuid().defaultRandom().primaryKey(),
	title: text(),
});
