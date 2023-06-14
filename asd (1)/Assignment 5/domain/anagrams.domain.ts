export class Anagrams {
  checker(Word: string, Check: string) {
    if (typeof Word != "string")
      return "Invalid word type, provide string only";
    if (typeof Check != "string")
      return "Invalid check type, provide string only";

    let SortWord = Word.toLowerCase().split("").sort().join("");
    let SortCheck = Check.toLowerCase().split("").sort().join("");

    return SortCheck === SortWord ? true : false;
  }
}
