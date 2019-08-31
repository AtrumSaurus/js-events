import * as keyBoardEvents from './map';

export const numbersOnlyFilter = [
  ...Object.values(keyBoardEvents.NUMERIC_KEYPAD_KEYS),
];

export const numbersWithNavFilter = [
  ...Object.values(keyBoardEvents.NUMERIC_KEYPAD_KEYS),
  ...Object.values(keyBoardEvents.MODIFIER_KEYS),
  ...Object.values(keyBoardEvents.EDITING_KEYS),
];
