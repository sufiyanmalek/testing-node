import { NameLength } from "../domain/name.domain";

test("name in array", () => {
  const converter = new NameLength();
  expect(converter.checker(["asd", "raj", "vatsal"] as any)).toEqual(
    "only string is accepted"
  );
});

test("invalid names string", () => {
  const converter = new NameLength();
  expect(converter.checker("")).toEqual("Please provide Name !");
});

test("valid input", () => {
  const converter = new NameLength();
  expect(converter.checker("vatsal,asd,raj")).toEqual(6);
});
