import dotenv from 'dotenv';
import { type ColumnType, type Generated, Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';

import { type Json } from './types';

dotenv.config();

export type JsonTable = {
  id: Generated<number>;
  name: string;
  content: Json;
  createdAt: ColumnType<Date, string | undefined, never>;
};

export type JsonbTable = {
  id: Generated<number>;
  name: string;
  content: Json;
  createdAt: ColumnType<Date, string | undefined, never>;
};

export type Database = {
  'json-test': JsonTable;
  'jsonb-test': JsonbTable;
};

export const getDatabase = (): Kysely<Database> => {
  return new Kysely<Database>({
    dialect: new PostgresDialect({
      pool: new Pool({
        connectionString: process.env.DATABASE_URL
      })
    })
  });
};
