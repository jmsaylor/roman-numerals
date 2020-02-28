class RomanNumeral {
  constructor(num) {
    this.thousand = Math.floor(num / 1000);
    this.fiveHundred = Math.floor(num / 500);
    this.hundred = Math.floor(num / 100);
    this.fifty = Math.floor(num / 50);
    this.ten = Math.floor(num / 10);

    this.one = Math.floor(num / 1);
  }
}

function toRomanNumeral(num) {
  console.log(num);
  const thousand = Math.floor(num / 1000);
  num = num - thousand * 1000;
  console.log(num);
  const fiveHundred = Math.floor(num / 500);
  num = num - fiveHundred * 500;
  const hundred = Math.floor(num / 100);
  num = num - hundred * 100;
  const fifty = Math.floor(num / 50);
  num = num - fifty * 50;
  console.log(fifty);
  const ten = Math.floor(num / 10);
  num = num - ten * 10;
  const one = num / 1;
  console.log(one);
}

toRomanNumeral(451);
