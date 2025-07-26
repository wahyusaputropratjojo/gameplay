import { relations } from "drizzle-orm";
import { pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { gamePlatform } from "@/db/schema/game-platform";

export const platformType = pgEnum("platform_type", [
	"PC",
	"Mobile",
	"Console",
]);

export const platform = pgTable("platform", {
	id: uuid().defaultRandom().primaryKey(),
	name: text().notNull(),
	type: platformType().notNull(),
	...timestamps,
});

export const platformRelations = relations(platform, ({ many }) => ({
	gamePlatform: many(gamePlatform),
}));
