import { getDatabase } from '../db';

const db = getDatabase();

const record = {
  name: 'bob',
  content: {
    nested: {
      numValue: 2,
      stringValue: 'string'
    },
    value: 'another value'
  }
};

const run = async () => {
  const jsonInsert = await db
    .insertInto('json-test')
    .values(record)
    .returningAll()
    .executeTakeFirstOrThrow();

  const jsonbInsert = await db
    .insertInto('jsonb-test')
    .values(record)
    .returningAll()
    .executeTakeFirstOrThrow();

  const json = await db
    .selectFrom('json-test')
    .where('id', '=', jsonInsert.id)
    .selectAll()
    .executeTakeFirstOrThrow();

  const jsonb = await db
    .selectFrom('jsonb-test')
    .where('id', '=', jsonbInsert.id)
    .selectAll()
    .executeTakeFirstOrThrow();

  return { json, jsonb };
};

void run().then(async result => {
  console.log(result);
  await db.destroy();
});
