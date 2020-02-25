import { NUMBERS, NATURAL_POSTFIX, INTEGER_PREFIX } from "./constants";

export function naturalToWords(number) {
  if (number <= -1) {
    return "minus " + naturalToWords(-1 * number);
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
      return " - OUT OF RANGE - ";
    }

    if (condition) {
      let floor = Math.floor(number / div);
      let module = number % div;

      if (NUMBERS[number]) {
        return NUMBERS[number];
      }

      if (NUMBERS[floor * div]) {
        return (
          NUMBERS[floor * div] + " " + NATURAL_POSTFIX[exp] + NUMBERS[module]
        );
      }

      return (
        naturalToWords(floor) +
        NATURAL_POSTFIX[exp] +
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
