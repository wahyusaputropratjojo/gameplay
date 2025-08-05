import { relations } from 'drizzle-orm';
import {
  foreignKey,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import { timestamps } from '@/db/helper/timestamps';
import { user } from '@/db/schema/user';

export const account = pgTable(
  'account',
  {
    id: uuid().defaultRandom().primaryKey(),
    userId: uuid().notNull(),
    accountId: text().notNull(),
    providerId: text().notNull(),
    accessToken: text(),
    refreshToken: text(),
    idToken: text(),
    accessTokenExpiresAt: timestamp(),
    refreshTokenExpiresAt: timestamp(),
    scope: text(),
    password: text(),
    ...timestamps,
  },
  (table) => [
    foreignKey({ columns: [table.userId], foreignColumns: [user.id] }).onDelete(
      'cascade'
    ),
  ]
);

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));
