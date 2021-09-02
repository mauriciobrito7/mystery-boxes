import { ADD_BALANCE, DISCOUNT_BALANCE } from "../types";

export const addBalance = (amount) => ({
  type: ADD_BALANCE,
  payload: amount,
});

export const discountBalance = (amount) => ({
  type: DISCOUNT_BALANCE,
  payload: amount,
});
