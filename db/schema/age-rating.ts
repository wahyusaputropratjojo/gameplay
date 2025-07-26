import { relations } from "drizzle-orm";
import { foreignKey, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { ageRatingAuthority } from "@/db/schema/age-rating-authority";
import { gameAgeRating } from "@/db/schema/game-age-rating";

export const ageRating = pgTable(
	"age_rating",
	{
		id: uuid().defaultRandom().primaryKey(),
		authorityId: uuid().notNull(),
		name: text().notNull(),
		description: text().notNull(),
		...timestamps,
	},
	(table) => [
		foreignKey({
			columns: [table.authorityId],
			foreignColumns: [ageRatingAuthority.id],
		}),
	],
);

export const ageRatingRelations = relations(ageRating, ({ one, many }) => ({
	ageRatingAuthority: one(ageRatingAuthority, {
		fields: [ageRating.authorityId],
		references: [ageRatingAuthority.id],
	}),
	gameAgeRating: many(gameAgeRating),
}));
