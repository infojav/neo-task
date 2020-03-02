// import { test } from "./utils/tests";

// import { testWriteAmount } from "./currency/amountToWords.test";
// import {
//   testNaturalToWords,
//   testIntegerToWords
// } from "./numbers/convertToWords.test";
import { amountToWords } from "./currency/amountToWords";

import "./reset.css";
import "./styles.css";

// Tests
// test("Write amount of Money", testWriteAmount);
// test("Convert a natural number in words", testNaturalToWords);
// test("Convert an integer number in words", testIntegerToWords);

function handleWriteOnEuros() {
  let amountInput = document.getElementById("amount");
  let amountTextElement = document.getElementById("amount-text");
  let amountText = "";
  try {
    amountText = amountToWords(amountInput.value);
  } catch (e) {
    amountText = e.toString();
    console.log(e);
  }

  amountTextElement.textContent = amountText;
  return false;
}

// window.onload = () => {
document
  .getElementById("button-write")
  .addEventListener("click", handleWriteOnEuros);
