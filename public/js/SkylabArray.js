export class SkylabArray {
  arrayLength;

  constructor(arrayLength) {
    arrayLength;
  }

  static checkLength(arrayLength) {
    const SkylabArrayContent = this.arrayLength;
    let count = 0;
    for (const element of Object.keys(SkylabArrayContent)) {
      ++count;
    }
    const message = `The length of the array is ${count}`;
    return message;
  }
}

export default SkylabArray;
