class RomanNumeral {
  constructor(num) {
    let array = num
      .toString(10)
      .split("")
      .reverse();
    this.one = array[0];
    //how to do 5s without an ugly hack
    this.ten = array[1];
    //same with 50s
    this.hundred = array[2];
    //500
    this.thousand = array[3];
  }
}

let num = new RomanNumeral(7983);

console.log(num);
