import { naturalToWords, integerToWords } from "../numbers/convertToWords";
import { assert, throwError } from "../utils/tests";

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
    "naturalToWords(-1) should trigger an Error, number not natural."
  );
  assert(
    throwError(naturalToWords, "e"),
    "naturalToWords('e') should trigger an Error, not a number"
  );
  assert(
    AMOUNT["0"] === naturalToWords(0),
    `naturalToWords(0) should return "${AMOUNT["0"]}"`
  );
  assert(
    AMOUNT["23"] === naturalToWords(23),
    `naturalToWords(23) should return "${AMOUNT["23"]}"`
  );
  assert(
    AMOUNT["101"] === naturalToWords(101),
    `naturalToWords(101) should return "${AMOUNT["101"]}"`
  );
  assert(
    AMOUNT["1e9+1"] === naturalToWords(1e9 + 1),
    `naturalToWords(1e9 + 1) should return "${AMOUNT["1e9+1"]}"`
  );
};

// "Convert an integer number in words"
export const testIntegerToWords = () => {
  assert(
    AMOUNT["-1"] === integerToWords(-1),
    `integerToWords(-1) should return "${AMOUNT["0"]}"`
  );
  assert(
    throwError(integerToWords, "e"),
    `integerToWords('e') should trigger an Error, not a number`
  );
  assert(
    AMOUNT["0"] === integerToWords(0),
    `integerToWords(0) should return "${AMOUNT["0"]}"`
  );
  assert(
    AMOUNT["-23"] === integerToWords(-23),
    `integerToWords(-23) should return "${AMOUNT["-23"]}"`
  );
  assert(
    AMOUNT["-1e9-1"] === integerToWords(-1e9 - 1),
    `integerToWords(-1e9 - 1) should return "${AMOUNT["-1e9-1"]}"`
  );
};

// Run test
// test("Convert a natural number in words", testNaturalToWords);
// test("Convert an integer number in words", testIntegerToWords);
