export class SkylabArray {
  arrayLength;

  constructor(arrayLength) {
    arrayLength;
  }

  static checkLength() {
    let count = 0;
    for (const element of Object.keys(this.arrayLength)) {
      ++count;
    }
    const message = `The length of the array is ${count}`;
    return message;
  }
}

export default SkylabArray;
