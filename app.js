class RomanNumeral {
  constructor(num) {
    this.thousand = Math.floor(num / 1000);
    num = num - this.thousand * 1000;
    this.fiveHundred = Math.floor(num / 500);
    num = num - this.fiveHundred * 500;
    this.hundred = Math.floor(num / 100);
    num = num - this.hundred * 100;
    this.fifty = Math.floor(num / 50);
    num = num - this.fifty * 50;
    this.ten = Math.floor(num / 10);
    num = num - this.ten * 10;
    this.five = Math.floor(num / 5);
    num = num - this.five * 5;
    this.one = Math.floor(num / 1);
  }

  getRoman() {
    let numeral = "";
    for (let x = 0; x < this.thousand; x++) {
      numeral += "M";
    }
    for (let x = 0; x < this.fiveHundred; x++) {
      numeral += "L";
    }
    for (let x = 0; x < this.hundred; x++) {
      numeral += "C";
    }
    for (let x = 0; x < this.fifty; x++) {
      numeral += "D";
    }
    for (let x = 0; x < this.ten; x++) {
      numeral += "X";
    }
    if (this.one == 4 && this.five == 0) {
      numeral += "IV";
    } else if (this.one == 4 && this.five == 1) {
      numeral += "IX";
    } else {
      for (let x = 0; x < this.five; x++) {
        numeral += "V";
      }
      for (let x = 0; x < this.one; x++) {
        numeral += "I";
      }
    }
    return numeral;
  }
}

let args = process.argv;

let romanNumeral = new RomanNumeral(args[2]);

console.log(romanNumeral);
console.log(romanNumeral.getRoman());
