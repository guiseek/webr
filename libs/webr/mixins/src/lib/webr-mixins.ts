/**
 * That applies mixins into the base class via the JS at runtime
 *
 * @param {*} derivedCtor Main class
 * @param {any[]} constructors Classes to be extended
 * @example
 * ```ts
 * class Jumpable {
 *   jump() { }
 * }
 * class Duckable {
 *   duck() {}
 * }
 * class Sprite {
 *   x = 0;
 *   y = 0;
 * }
 * interface Sprite extends Jumpable, Duckable {}
 * applyMixins(Sprite, [Jumpable, Duckable])
 * ```
 */
export function webrApplyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      )
    })
  })
}

/**
 * Decorator to keep things simple
 * @param {any[]} constructors Classes to be extended
 */
export function WebrMixins(constructors: any[]) {
  // Apply mixins into the base class
  return (ctor: Function) => webrApplyMixins(ctor, constructors)
}
