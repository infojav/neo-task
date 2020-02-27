import { NUMBERS, NATURAL_POSTFIX, INTEGER_PREFIX } from "./constants";

export function naturalToWords(number) {
  if (isNaN(number)) {
    throw new Error("Parameter is not a number!");
  } else if (number <= -1 || number > 999999999) {
    throw new RangeError("Parameter is not on range 0...999999999");
  }

  let exp = 0;
  let div = 1;

  while (number && number > +(div * 10)) {
    exp += exp < 3 ? 1 : 3;
    div = +("1e" + exp);
    console.log(`number: ${number}, exp: ${exp}, div: ${div}`);
  }

  let floor = Math.floor(number / div);
  let module = number % div;

  console.log(
    `number: ${number}, module: ${module}, floor: ${floor}, floor*div: ${floor *
      div}`
  );

  if (NUMBERS[floor * div]) {
    console.log("here 1");
    return (
      NUMBERS[floor * div] +
      " " +
      NATURAL_POSTFIX[exp - 1] +
      naturalToWords(module)
    );
  }

  console.log("here 2");

  if (NUMBERS[number]) {
    return NUMBERS[number];
  }

  return (
    naturalToWords(floor) +
    " " +
    NATURAL_POSTFIX[exp] +
    (module ? " " + naturalToWords(module) : "")
  );
}

export function integerToWords(number) {
  if (number <= -1) {
    return INTEGER_PREFIX.negativeValue + " " + naturalToWords(-1 * number);
  }
  return naturalToWords(number);
}
