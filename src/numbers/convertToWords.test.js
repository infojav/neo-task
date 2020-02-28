import { naturalToWords, integerToWords } from "../numbers/convertToWords";
import { test, assert, throwError } from "../utils/tests";

const AMOUNT = {
  "0": "zero",
  "23": "twenty three",
  "101": "one hundred one",
  "1e9 + 1": "one billion",
  "-1": "minus one",
  "-23": "minus twenty three",
  "1e9+1": "one billion one",
  "-1e9-1": "minus one billion one"
};

// "Convert a natural number in words"
export const testNaturalToWords = () => {
  assert(
    throwError(naturalToWords, -1),
    "-1 trigger an Error, number not natural."
  );
  assert(throwError(naturalToWords, "e"), "'e' trigger an Error, not a number");
  assert(AMOUNT["0"] === naturalToWords(0), `0 is "${AMOUNT["0"]}"`);
  assert(AMOUNT["23"] === naturalToWords(23), `23 is "${AMOUNT["23"]}"`);
  assert(AMOUNT["101"] === naturalToWords(101), `101 is "${AMOUNT["101"]}"`);
  assert(
    AMOUNT["1e9+1"] === naturalToWords(1e9 + 1),
    `1e9+1 is "${AMOUNT["1e9+1"]}"`
  );
};

// "Convert an integer number in words"
export const testIntegerToWords = () => {
  assert(AMOUNT["-1"] === integerToWords(-1), `-1 is "${AMOUNT["0"]}"`);
  assert(throwError(integerToWords, "e"), `'e' trigger an Error, not a number`);
  assert(AMOUNT["0"] === integerToWords(0), `0 is "${AMOUNT["0"]}"`);
  assert(AMOUNT["-23"] === integerToWords(-23), `23 is "${AMOUNT["-23"]}"`);
  assert(
    AMOUNT["-1e9-1"] === integerToWords(-1e9 - 1),
    `-1e9-1 is "${AMOUNT["-1e9-1"]}"`
  );
};

// Run test
test("Convert a natural number in words", testNaturalToWords);
test("Convert an integer number in words", testIntegerToWords);
