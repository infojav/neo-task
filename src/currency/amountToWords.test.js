import { amountToWords } from "./amountToWords";
import { test, assert, throwError } from "../utils/tests";

// Amount euros in english
const AMOUNT = {
  "25001": "Twenty five thousand one Euros and zero cents",
  "112.1": "One hundred twelve Euros and ten cents",
  "874327.9":
    "Eight hundred seventy four thousand three hundred twenty seven Euros and ninety cents",
  "978": "Nine hundred seventy eight Euros and zero cents",
  "1.01": "One Euro and one cent"
};

// "Write amount of Money"
export const testWriteAmount = () => {
  assert(
    throwError(amountToWords, -1),
    "-1 trigger an Error, number not natural."
  );
  assert(throwError(amountToWords, "e"), "'e' trigger an Error, not a number");
  assert(
    AMOUNT[25001] ===
      (amountToWords(25001) &&
        amountToWords(25001.0) &&
        amountToWords(+"25001.00")),
    `25001, 25001.0 and 25001.00 are "${AMOUNT["25001"]}"`
  );

  assert(
    AMOUNT["112.1"] === amountToWords(112.1),
    `112.10 is "${AMOUNT["112.1"]}"`
  );
  assert(
    AMOUNT["874327.9"] === amountToWords(874327.9),
    `874327.9 is "${AMOUNT["874327.9"]}"`
  );
  assert(AMOUNT["978"] === amountToWords(978), `978 is "${AMOUNT["978"]}"`);
  assert(AMOUNT["1.01"] === amountToWords(1.01), `1.01 is "${AMOUNT["1.01"]}"`);
};

// Run test
test("Write amount of Money", testWriteAmount);
