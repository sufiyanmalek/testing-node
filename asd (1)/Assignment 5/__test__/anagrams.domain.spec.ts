import { Anagrams } from "../domain/anagrams.domain";

test("valid in anagram", () => {
  const converter = new Anagrams();
  expect(converter.checker("Mary", "Myra")).toEqual(true);
});

test("invalid in anagram", () => {
  const converter = new Anagrams();
  expect(converter.checker("Mary", "May")).toEqual(false);
});

test("invalid word value pass", () => {
  const converter = new Anagrams();
  expect(converter.checker(null as any, "asd")).toEqual(
    "Invalid word type, provide string only"
  );
});

test("invalid check value pass", () => {
  const converter = new Anagrams();
  expect(converter.checker("asd", null as any)).toEqual(
    "Invalid check type, provide string only"
  );
});
