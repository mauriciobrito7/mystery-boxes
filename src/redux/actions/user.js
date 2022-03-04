import { ADD_BALANCE, DISCOUNT_BALANCE, ADD_GIFT, REMOVE_GIFT } from "../types";

export const addBalance = (amount) => ({
	type: ADD_BALANCE,
	payload: amount,
});

export const discountBalance = (amount) => ({
	type: DISCOUNT_BALANCE,
	payload: amount,
});

export const addGift = (gift) => ({
	type: ADD_GIFT,
	payload: gift,
});

export const removeGift = (gift) => ({
	type: REMOVE_GIFT,
	payload: gift,
});
