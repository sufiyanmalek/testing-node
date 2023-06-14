import { calculator } from "../domain/calculator.domain";
import { overtime } from "../model/overtime.model";

test("Valid value", () => {
  const converter = new calculator();
  const Values: overtime = {
    startTime: 9,
    endTime: 18,
    hourlyRate: 30,
    overTimeRate: 1.5,
  };
  expect(converter.calculate(Values)).toEqual(285);
});

test("endtime invalid  value", () => {
  const converter = new calculator();
  const Values: overtime = {
    startTime: 9,
    endTime: 25,
    hourlyRate: 30,
    overTimeRate: 1.5,
  };
  expect(converter.calculate(Values)).toEqual(
    "end time value must be in range of 0 - 24"
  );
});

test("start time invalid  value", () => {
  const converter = new calculator();
  const Values: overtime = {
    startTime: 25,
    endTime: 17,
    hourlyRate: 30,
    overTimeRate: 1.5,
  };
  expect(converter.calculate(Values)).toEqual(
    "start time value must be in range of 0 - 24"
  );
});

test("start greater than end time value", () => {
  const converter = new calculator();
  const Values: overtime = {
    startTime: 23,
    endTime: 17,
    hourlyRate: 30,
    overTimeRate: 1.5,
  };
  expect(converter.calculate(Values)).toEqual("Invalid start and end time");
});
