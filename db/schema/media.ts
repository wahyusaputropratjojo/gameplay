import { pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";

export const mediaType = pgEnum("media_type", [
	"Trailer",
	"Logo",
	"Grid",
	"Hero",
	"Screenshot",
	"Other",
]);

export const media = pgTable("media", {
	id: uuid().defaultRandom().primaryKey(),
	url: text().notNull(),
	type: mediaType().notNull(),
	...timestamps,
});
