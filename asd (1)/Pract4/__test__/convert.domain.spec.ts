import { Converter } from "../domain/convert.domain";

test("Valid age value", () => {
  const converter = new Converter();
  expect(converter.convert({})).toEqual([]);
});
