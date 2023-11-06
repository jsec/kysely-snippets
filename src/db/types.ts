import type { ColumnType, Generated } from 'kysely';

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Json = ColumnType<JsonValue, JsonValue, JsonValue>;
export type JsonPrimitive = boolean | number | string | undefined;
export type JsonArray = JsonValue[];
export type JsonObject = {
  [K in string]?: JsonValue;
};

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type JsonbTest = {
  content: Json | undefined;
  created_at: Generated<Timestamp>;
  id: Generated<number>;
  name: string;
};

export type JsonTest = {
  content: Json | undefined;
  created_at: Generated<Timestamp>;
  id: Generated<number>;
  name: string;
};
