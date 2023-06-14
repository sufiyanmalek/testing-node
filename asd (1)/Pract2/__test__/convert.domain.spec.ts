import { Converter } from "../domain/convert.domain";

test("Not passing minute", () => {
  const converter = new Converter();
  expect(converter.convert(null)).toEqual("Please enter minute value");
});

test("Nagative minute", () => {
  const converter = new Converter();
  expect(converter.convert(-30)).toEqual("Please enter positive value");
});

test("Passing string minute", () => {
  const converter = new Converter();
  expect(converter.convert("30")).toEqual(
    "Please enter number value of minute"
  );
});

test("Valid minute value", () => {
  const converter = new Converter();
  expect(converter.convert(5)).toEqual(300);
});
