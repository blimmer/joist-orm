function makeTsDocComment(...lines: string[]): string {
  return ["/**", ...lines.map((l) => `* ${l}`), "*/"].join("\n");
}

export const tsdocComments = {
  entity: {
    setPartial: makeTsDocComment(
      "Partial update taking any subset of the entities fields.",
      "",
      'Unlike `set`, null is used as a marker to mean "unset this field", and undefined',
      "is left as untouched.",
      "",
      "Collections are exhaustively set to the new values, however,",
      "{@link https://joist-orm.io/docs/features/partial-update-apis#incremental-collection-updates | Incremental collection updates} are supported. ",
      "",
      "@example",
      "```",
      "entity.setPartial({",
      "  firstName: 'foo' // updated",
      "  lastName: undefined // do nothing",
      "  age: null // unset, (i.e. set it as undefined)",
      "});",
      "```",
      "@see {@link https://joist-orm.io/docs/features/partial-update-apis | Partial Update APIs} on the Joist docs ",
    ),
    changes: makeTsDocComment(
      "Details the field changes of the entity within the current unit of work.",
      "",
      "@see {@link https://joist-orm.io/docs/features/changed-fields | Changed Fields} on the Joist docs ",
    ),
    load: makeTsDocComment(
      "Traverse from this entity using a lens, and load the result.",
      "",
      "@see {@link https://joist-orm.io/docs/advanced/lenses | Lens Traversal} on the Joist docs",
    ),
    populate: makeTsDocComment(
      "Hydrate this entity using a load hint",
      "",
      "@see {@link https://joist-orm.io/docs/features/loading-entities#1-object-graph-navigation | Loading entities} on the Joist docs",
    ),
    isLoaded: makeTsDocComment(
      "Given a load hint, checks if it is loaded within the unit of work.",
      "",
      "Type Guarded via Loaded<>",
      "",
    ),
    toJSON: makeTsDocComment(
      "Build a type-safe, loadable and relation aware POJO from this entity, given a hint.",
      "",
      "Note: As the hint might load, this returns a Promise",
      "",
      "@example",
      "```",
      "const payload = await a.toJSON({",
      "  id: true,",
      "  books: { id: true, reviews: { rating: true } }",
      "});",
      "```",
      "@see {@link https://joist-orm.io/docs/advanced/json-payloads | Json Payloads} on the Joist docs",
    ),
  },
};
