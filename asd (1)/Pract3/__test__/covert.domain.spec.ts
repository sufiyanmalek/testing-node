import { Converter } from "../domain/convert.domain";

test("Not passing age", () => {
  const converter = new Converter();
  expect(converter.convert(null)).toEqual("Please enter age value");
});

test("Nagative age", () => {
  const converter = new Converter();
  expect(converter.convert(-30)).toEqual("Please enter positive value");
});

test("Passing string age", () => {
  const converter = new Converter();
  expect(converter.convert("30")).toEqual("Please enter number value of age");
});

test("Valid age value", () => {
  const converter = new Converter();
  expect(converter.convert(65)).toEqual(23725);
});
