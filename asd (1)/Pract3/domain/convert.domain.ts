export class Converter {
  convert(age) {
    if (!age) {
      return "Please enter age value";
    }

    if (age < 0) {
      return "Please enter positive value";
    }

    if (typeof age === "string") {
      return "Please enter number value of age";
    }

    return age * 365;
  }
}
