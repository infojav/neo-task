import { test } from "./utils/tests";

import { testWriteAmount } from "./currency/amountToWords.test";
import {
  testNaturalToWords,
  testIntegerToWords
} from "./numbers/convertToWords.test";
// import { amountToWords } from "./currency/amountToWords";

import "./reset.css";
import "./styles.css";

// Tests
test("Write amount of Money", testWriteAmount);
test("Convert a natural number in words", testNaturalToWords);
test("Convert an integer number in words", testIntegerToWords);

// function handleWriteOnEuros() {
//   let amountInput = document.getElementById("amount");
//   let amountText = "";
//   try {
//     amountText = amountToWords(amountInput);
//   } catch (e) {
//     amountText = e.msg;
//   }

//   console.log(amountText);
//   return false;
// }

window.onload = () => {
  document
    .getElementById("buttonWrite")
    .addEventListener("onclick", e => console.log(e));
};
