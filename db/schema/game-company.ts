import { relations } from "drizzle-orm";
import {
	foreignKey,
	pgEnum,
	pgTable,
	primaryKey,
	uuid,
} from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helper/timestamps";
import { company } from "@/db/schema/company";
import { game } from "@/db/schema/game";

export const gameCompanyRole = pgEnum("game_company_role", [
	"Developer",
	"Publisher",
]);

export const gameCompany = pgTable(
	"game_company",
	{
		gameId: uuid().notNull(),
		companyId: uuid().notNull(),
		role: gameCompanyRole().notNull(),
		...timestamps,
	},
	(table) => [
		primaryKey({
			columns: [table.gameId, table.companyId],
		}),
		foreignKey({
			columns: [table.gameId],
			foreignColumns: [game.id],
		}),
		foreignKey({
			columns: [table.companyId],
			foreignColumns: [company.id],
		}),
	],
);

export const gameCompanyRelations = relations(gameCompany, ({ one }) => ({
	game: one(game, {
		fields: [gameCompany.gameId],
		references: [game.id],
	}),
	company: one(company, {
		fields: [gameCompany.companyId],
		references: [company.id],
	}),
}));
