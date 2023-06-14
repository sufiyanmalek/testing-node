import { PanChecker } from "../domain/PANcheck.domain";

test("Valid PAN value", () => {
  const converter = new PanChecker();
  expect(converter.checker(1324657980)).toEqual(true);
});

test("Invalid PAN value", () => {
  const converter = new PanChecker();
  expect(converter.checker(134657980)).toEqual(false);
});

test("Null value as PAN", () => {
  const converter = new PanChecker();
  expect(converter.checker(null as any)).toEqual("provide PAN value");
});

test("string value as PAN", () => {
  const converter = new PanChecker();
  expect(converter.checker("asd" as any)).toEqual(
    "provide PAN value in number"
  );
});

test("invalid PAN value", () => {
  const converter = new PanChecker();
  expect(converter.checker(13324657980)).toEqual(false);
});
