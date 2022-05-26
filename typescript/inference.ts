export function someFunc<T = string | null>(foo: T, bar: T extends string ? null : string) {
  return {
    foo,
    bar
  }
}

