import { type Kysely, sql } from 'kysely';

export async function up(db: Kysely<never>): Promise<void> {
  await db.schema
    .createTable('json-test')
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('name', 'varchar', col => col.notNull())
    .addColumn('content', 'json')
    .addColumn('created_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
    .execute();

  await db.schema
    .createTable('jsonb-test')
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('name', 'varchar', col => col.notNull())
    .addColumn('content', 'jsonb')
    .addColumn('created_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
    .execute();
}

export async function down(db: Kysely<never>): Promise<void> {
  await db.schema.dropTable('json-test').execute();
  await db.schema.dropTable('jsonb-test').execute();
}
