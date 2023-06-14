export class NameLength {
  checker(Names: string) {
    if (!Names) {
      return "Please provide Name !";
    }

    if (typeof Names != "string") {
      return "only string is accepted";
    }

    let LargestName = "";
    const NameArray = Names.split(",");

    NameArray.map((e) => {
      e.length >= LargestName.length ? (LargestName = e) : null;
    });

    return LargestName.length;
  }
}
