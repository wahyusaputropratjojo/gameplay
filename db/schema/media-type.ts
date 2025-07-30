import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { media } from "@/db/schema/media";

export const mediaType = pgTable("media_type", {
	id: uuid().defaultRandom().primaryKey(),
	name: text().notNull(),
	...timestamps,
});

export const mediaTypeRelations = relations(mediaType, ({ many }) => ({
	media: many(media),
}));
