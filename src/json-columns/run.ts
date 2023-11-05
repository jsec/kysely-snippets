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
  const jsonTest = await db.insertInto('json-test').values(record).executeTakeFirstOrThrow();
  const jsonbTest = await db.insertInto('jsonb-test').values(record).executeTakeFirstOrThrow();

  console.log('json-test: ', jsonTest);
  console.log('jsonb-test: ', jsonbTest);
};
