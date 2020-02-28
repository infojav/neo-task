import { test } from "./utils/tests";

import { testWriteAmount } from "./currency/amountToWords.test";
import "./numbers/convertToWords.test";
import "./styles.css";

test("Write amount of Money", testWriteAmount);
