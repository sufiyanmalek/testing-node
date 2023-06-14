export class uncensor {
  checker(censoredString: string, vowels: string) {
    if (!censoredString) {
      return "Please provide censored string !";
    }

    if (!vowels) {
      return "Please provide vowel string !";
    }

    let uncensorString = "";
    let vowelIndex = 0;
    for (let i in censoredString as any) {
      censoredString[i] === "*"
        ? ((uncensorString += vowels[vowelIndex]), vowelIndex++)
        : (uncensorString += censoredString[i]);
    }

    return uncensorString;
  }
}
