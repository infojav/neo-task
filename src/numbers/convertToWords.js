import { NUMBERS, NATURAL_POSTFIX, INTEGER_PREFIX } from "./constants";

export function naturalToWords(number) {
  if (isNaN(number)) {
    throw new Error("Parameter is not a number!");
  } else if (number <= -1) {
    throw new Error("Natural numbers are always positive");
  }

  for (let exp = 0; exp < 6; exp++) {
    let div = +("1e" + exp);
    let condition = false;

    if (exp < 3) {
      condition = number < +(div * 10) ? true : false;
    } else if (exp < 10) {
      div = +("1000e" + Math.floor(exp / 3));
      condition = number < +("1e" + 3 * (exp - 1)) ? true : false;
    } else {
      exp = 6;
      throw new RangeError("Parameter is not on range 0...999999999");
    }

    if (condition) {
      let floor = Math.floor(number / div);
      let module = number % div;

      console.log(number, floor, div, exp, NATURAL_POSTFIX[exp - 1]);

      if (NUMBERS[number]) {
        return NUMBERS[number];
      }

      if (NUMBERS[floor * div]) {
        return (
          NUMBERS[floor * div] +
          " " +
          NATURAL_POSTFIX[exp - 1] +
          NUMBERS[module]
        );
      }

      return (
        naturalToWords(floor) +
        NATURAL_POSTFIX[exp - 1] +
        (module ? " " + naturalToWords(module) : "")
      );
    }
  }
}

export function integerToWords(number) {
  if (number <= -1) {
    return INTEGER_PREFIX.negativeValue + " " + naturalToWords(-1 * number);
  }
  return naturalToWords(number);
}
