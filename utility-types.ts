export type ClassConstructor<T> = {
  new (...args: unknown[]): T;
};

export type TypeFromConstructor<T> = T extends new (
  ...args: unknown[]
) => infer R
  ? R
  : never;

class MyClass {}

function createInstance<T extends ClassConstructor<any>>(
  ctor: T
): TypeFromConstructor<T> {
  return new ctor();
}

const instance = createInstance(MyClass);
