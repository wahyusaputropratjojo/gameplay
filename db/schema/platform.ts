import { relations } from "drizzle-orm";
import { foreignKey, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { gamePlatform } from "@/db/schema/game-platform";
import { platformType } from "@/db/schema/platform-type";

export const platform = pgTable(
	"platform",
	{
		id: uuid().defaultRandom().primaryKey(),
		platformTypeId: uuid().notNull(),
		name: text().notNull(),
		...timestamps,
	},
	(table) => [
		foreignKey({
			columns: [table.platformTypeId],
			foreignColumns: [platformType.id],
		}),
	],
);

export const platformRelations = relations(platform, ({ many, one }) => ({
	gamePlatform: many(gamePlatform),
	platformType: one(platformType, {
		fields: [platform.platformTypeId],
		references: [platformType.id],
	}),
}));
