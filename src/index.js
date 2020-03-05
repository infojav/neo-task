import { test } from "./utils/tests";

import { testWriteAmount } from "./currency/amountToWords.test";
import {
  testNaturalToWords,
  testIntegerToWords
} from "./numbers/convertToWords.test";
import { amountToWords } from "./currency/amountToWords";

import "./reset.css";
import "./styles.css";

// Tests
test("Write amount of Money", testWriteAmount);
test("Convert a natural number in words", testNaturalToWords);
test("Convert an integer number in words", testIntegerToWords);

function handleWriteOnEuros() {
  let amountInput = document.getElementById("amount");
  let amountTextElement = document.getElementById("amount-text");

  amountTextElement.style.color = "";

  try {
    amountTextElement.textContent = amountToWords(amountInput.value);
  } catch (e) {
    amountTextElement.style.color = "red";
    amountTextElement.textContent = e.toString();
  }
  return false;
}

// window.onload = () => {
document
  .getElementById("button-write")
  .addEventListener("click", handleWriteOnEuros);
