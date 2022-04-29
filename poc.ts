type Schema = {};
type Primitive = null | boolean | number | string;
type Flatten<T> = T extends any ? { [K in keyof T]: T[K] } : never;
type Assigned<T extends Schema, U extends {}> = Flatten<Omit<T, keyof U> & U>;

const assign = <T extends Schema, U extends {}>(a: T, b: U): Assigned<T, U> =>
  ({ ...a, ...b } as any);

const boolean = <T extends Schema>(schema: T) =>
  assign(schema, { type: "boolean" as const });

const default_ =
  <U extends Primitive>(defaultValue: U) =>
  <T extends Schema>(schema: T) =>
    assign(schema, { default: defaultValue });

const x = boolean(boolean({ ...boolean({ a: 1, type: null }), b: 2 }));

const y = default_(1)({ default: null });
export {};
