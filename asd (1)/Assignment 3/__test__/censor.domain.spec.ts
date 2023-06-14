import { uncensor } from "../domain/censor.domain";

test("valid value test 1", () => {
  const converter = new uncensor();
  expect(converter.checker("Wh*r* d*d my v*w*ls g*?", "eeioeo")).toEqual(
    "Where did my vowels go?"
  );
});

test("valid value test 2", () => {
  const converter = new uncensor();
  expect(converter.checker("abcd", " ")).toEqual("abcd");
});

test("valid value test 3", () => {
  const converter = new uncensor();
  expect(converter.checker("*PP*RC*S*", "UEAE")).toEqual("UPPERCASE");
});

test("invalid censor string", () => {
  const converter = new uncensor();
  expect(converter.checker(null as any, "UEAE")).toEqual(
    "Please provide censored string !"
  );
});

test("invalid vowels string", () => {
  const converter = new uncensor();
  expect(converter.checker("asd", "")).toEqual("Please provide vowel string !");
});
