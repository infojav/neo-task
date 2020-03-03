export const MIN_AMOUNT = 0;
export const MAX_AMOUNT = 1e6 - 1;

export const CURRENCIES = {
  // currency name: [ singular, plural ]
  euro: ["Euro", "Euros"],
  dollar: ["Dollar", "Dollars"],
  pound: ["Pound", "Pounds"]
};

export const VALID_FORMAT = [
  "^0$",
  "^0\\.[0-9]{1,2}$",
  "^[1-9][0-9]{0,5}$",
  "^[1-9][0-9]{0,5}\\.[0-9]{1,2}$"
];
export const CENTS = ["cent", "cents"];
export const DEFAULT_CURRENCY = CURRENCIES["euro"];
export const CONJUNCTION = " and ";
