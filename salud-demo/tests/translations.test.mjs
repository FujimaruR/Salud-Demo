import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
const catalog = JSON.parse(
  readFileSync(new URL("../src/site/catalog.json", import.meta.url)),
);
function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? files(join(dir, e.name))
      : /\.(jsx|tsx)$/.test(e.name)
        ? [join(dir, e.name)]
        : [],
  );
}
test("all keys have both languages and matching interpolation variables", () => {
  for (const entry of Object.values(catalog)) {
    assert.deepEqual(Object.keys(entry).sort(), ["en", "es"]);
    for (const locale of ["es", "en"]) assert.ok(entry[locale].length);
    const vars = (s) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();
    assert.deepEqual(vars(entry.es), vars(entry.en));
  }
});
test("every literal translation reference resolves to a complete catalog entry", () => {
  for (const file of files("src"))
    for (const m of readFileSync(file, "utf8").matchAll(
      /\b(?:tr|t)\(['"]([^'"]+)['"]\s*(?:\)|,)/g,
    ))
      assert.ok(catalog[m[1]], file + ": " + m[1]);
});
test("all dynamically selected dental content keys exist in both languages", () => {
  const keys = [
    ...Array.from({ length: 6 }, (_, i) => [
      "service" + (i + 1),
      "service" + (i + 1) + "body",
    ]).flat(),
    ...Array.from({ length: 3 }, (_, i) => [
      "stage" + (i + 1),
      "person" + (i + 1),
      "role" + (i + 1),
      "step" + (i + 1),
      "step" + (i + 1) + "body",
      "trust" + (i + 1),
      "question" + (i + 1),
      "answer" + (i + 1),
    ]).flat(),
  ];
  for (const key of keys)
    for (const locale of ["es", "en"])
      assert.ok(catalog["dental." + key]?.[locale], key + ": " + locale);
});
