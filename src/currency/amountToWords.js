import { integerToWords } from "../numbers/convertToWords";
import {
  MIN_AMOUNT,
  MAX_AMOUNT,
  DEFAULT_CURRENCY,
  CENTS,
  CONJUNCTION
} from "./constants";

export const amountToWords = amount => {
  if (isNaN(amount)) {
    throw new Error("Parameter is not a number!");
  } else if (amount < MIN_AMOUNT || amount > MAX_AMOUNT) {
    throw new RangeError(
      `Parameter is not on range ${MIN_AMOUNT}...${MAX_AMOUNT}`
    );
  }

  let sign = Math.sign(amount);
  let integerPart = sign !== -1 ? Math.floor(amount) : Math.ceil(amount) * -1;
  let fractionPart = sign * amount * 100 - integerPart * 100;

  let wordsIntPart =
    integerToWords(sign * integerPart) +
    " " +
    (integerPart === 1 ? DEFAULT_CURRENCY[0] : DEFAULT_CURRENCY[1]);
  let wordsFracPart =
    integerToWords(fractionPart) +
    " " +
    (fractionPart === 1 ? CENTS[0] : CENTS[1]);

  let wordsAmount = wordsIntPart + CONJUNCTION + wordsFracPart;

  return wordsAmount.charAt(0).toUpperCase() + wordsAmount.slice(1);
};
