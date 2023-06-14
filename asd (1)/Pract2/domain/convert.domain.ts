export class Converter {
  convert(minute) {
    if (!minute) {
      return "Please enter minute value";
    }

    if (minute < 0) {
      return "Please enter positive value";
    }

    if (typeof minute === "string") {
      return "Please enter number value of minute";
    }

    return minute * 60;
  }
}
