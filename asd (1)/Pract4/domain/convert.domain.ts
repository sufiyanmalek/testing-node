export class Converter {
  Array: (string | number)[][] = [];

  convert(Obj: {}) {
    for (let i in Obj) {
      const NewArray = [i, Obj[i]];
      this.Array.push(NewArray);
    }
    return this.Array;
  }
}
