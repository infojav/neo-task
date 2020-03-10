import {
  NUMBERS,
  NATURAL_POSTFIX,
  INTEGER_PREFIX,
  MAX_VALUE
} from "./constants";

/**
 * Convert a natural number in to words
 * @param {number} number
 */
export function naturalToWords(number) {
  // Check is not a fraccion.
  if (isNaN(number)) {
    throw new Error("Parameter is not a number!");
  } else if (number <= -1 || number > MAX_VALUE) {
    throw new RangeError(`Parameter is not on range 0...${MAX_VALUE}`);
  }

  if (NUMBERS[number]) {
    return NUMBERS[number];
  }

  let exp =
    number >= 1e12
      ? 1e12
      : 0 || number >= 1e9
      ? 1e9
      : 0 || number >= 1e6
      ? 1e6
      : 0 || number >= 1e3
      ? 1e3
      : 0 || number >= 1e2
      ? 1e2
      : 1e1;
  let floor = Math.floor(number / exp);
  let module = number % exp;

  return (
    (NUMBERS[floor * exp] ? NUMBERS[floor * exp] : naturalToWords(floor)) +
    NATURAL_POSTFIX[exp] +
    (module ? " " + naturalToWords(module) : "")
  );
}

/**
 * Convert an integer number into words.
 * @param {number} number
 */
export function integerToWords(number) {
  if (number <= -1) {
    return INTEGER_PREFIX.negativeValue + " " + naturalToWords(-1 * number);
  }
  return naturalToWords(number);
}
