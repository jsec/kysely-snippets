import { type Expression, type OperationNode, sql } from 'kysely';

class JsonBase<T> implements Expression<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  get expressionType(): T | undefined {
    return undefined;
  }

  toOperationNode(): OperationNode {
    throw new Error('Not Implemented');
  }
}

export class JsonValue<T> extends JsonBase<T> {
  toOperationNode(): OperationNode {
    const json = JSON.stringify(this.value);
    return sql`CAST(${json} AS JSON)`.toOperationNode();
  }
}

export class JsonbValue<T> extends JsonBase<T> {
  toOperationNode(): OperationNode {
    const json = JSON.stringify(this.value);
    return sql`CAST(${json} AS JSONB)`.toOperationNode();
  }
}
