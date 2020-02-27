import { naturalToWords, integerToWords } from "../numbers/convertToWords";
import { test, assert, throwError } from "../utils/tests";

test("Convert a natural number in words", () => {
  assert(
    throwError(naturalToWords, -1),
    "-1 trigger an Error, number not natural."
  );
  assert(throwError(naturalToWords, "e"), "'e' trigger an Error, not a number");
  assert("zero" === naturalToWords(0), "0 is 'zero'");
  assert("twenty three" === naturalToWords(23), "23 is 'twenty three'");
  assert("one hundred one" === naturalToWords(101), "101 is 'one hundred one'");
  assert(
    "one billion one" === naturalToWords(1e9 + 1),
    "1e9+1 'one billion one'"
  );
});

test("Convert an integer number in words", () => {
  assert("minus one" === integerToWords(-1), "-1 is 'minus 1'.");
  assert(throwError(integerToWords, "e"), "'e' trigger an Error, not a number");
  assert("zero" === integerToWords(0), "0 is 'zero'");
  assert(
    "minus twenty three" === integerToWords(-23),
    "23 is 'minus twenty three'"
  );
  assert(
    "minus one billion one" === integerToWords(-1e9 - 1),
    "-1e9-1 'minus one billion one'"
  );
});
