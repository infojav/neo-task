import { amountToWords } from "./amountToWords";
import { assert, throwError } from "../utils/tests";

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
    "amountToWords(-1) should trigger an Error, number not natural."
  );
  assert(
    throwError(amountToWords, "e"),
    "amountToWords('e') should trigger an Error, not a number"
  );
  assert(
    AMOUNT[25001] ===
      (amountToWords(25001) &&
        amountToWords(25001.0) &&
        amountToWords(25001.0)),
    `amountToWords(25001), amountToWords(25001.0) and amountToWords(25001.00) should return "${
      AMOUNT["25001"]
    }"`
  );

  assert(
    AMOUNT["112.1"] === amountToWords(112.1),
    `amountToWords(112.1) should return "${AMOUNT["112.1"]}"`
  );
  assert(
    AMOUNT["874327.9"] === amountToWords(874327.9),
    `amountToWords(874327.9) should return "${AMOUNT["874327.9"]}"`
  );
  assert(
    AMOUNT["978"] === amountToWords(978),
    `amountToWords(978) should return "${AMOUNT["978"]}"`
  );
  assert(
    AMOUNT["1.01"] === amountToWords(1.01),
    `amountToWords(1.01) should return "${AMOUNT["1.01"]}"`
  );
};

// Run test
// test("Write amount of Money", testWriteAmount);
