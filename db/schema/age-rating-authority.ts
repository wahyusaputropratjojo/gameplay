import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { ageRating } from "@/db/schema/age-rating";

export const ageRatingAuthority = pgTable("age_rating_authority", {
	id: uuid().defaultRandom().primaryKey(),
	name: text().notNull(),
	...timestamps,
});

export const ageRatingAuthorityRelations = relations(
	ageRatingAuthority,
	({ many }) => ({
		ageRating: many(ageRating),
	}),
);
