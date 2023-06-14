export class PanChecker {
  checker(PAN: number) {
    if (!PAN) {
      return "provide PAN value";
    }

    if (typeof PAN != "number") {
      return "provide PAN value in number";
    }

    const Test = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const splitArray = PAN.toString().split("");

    let valid = true;

    for (let i in Test) {
      !splitArray.includes(i) ? (valid = false) : null;
    }

    for (let index = 0; index < splitArray.length; index++) {
      splitArray[index] === splitArray[index + 1] ? (valid = false) : null;
    }

    return valid ? true : false;
  }
}
