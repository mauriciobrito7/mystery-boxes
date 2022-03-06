import * as types from "../types";
import { MY_GIFTS, MY_BALANCE } from "../../constants";
import { getFromLocalStorage, setLocalStorage } from "../../utils";

const INITIAL_STATE = {
	userDetails: {
		name: "Mauricio",
		avatar: "https://avatars.githubusercontent.com/u/12994188?v=4",
		balance: getFromLocalStorage(MY_BALANCE, 2000),
		gifts: getFromLocalStorage(MY_GIFTS, []),
	},
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_BALANCE:
			setLocalStorage(MY_BALANCE, state.userDetails.balance + action.payload);
			return {
				...state,
				userDetails: {
					...state.userDetails,
					balance: state.userDetails.balance + action.payload,
				},
			};

		case types.DISCOUNT_BALANCE:
			setLocalStorage(MY_BALANCE, state.userDetails.balance - action.payload);
			return {
				...state,
				userDetails: {
					...state.userDetails,
					balance: state.userDetails.balance - action.payload,
				},
			};
		case types.ADD_GIFT:
			setLocalStorage(MY_GIFTS, [...state.userDetails.gifts, action.payload]);
			return {
				...state,
				userDetails: {
					...state.userDetails,
					gifts: [...state.userDetails.gifts, action.payload],
				},
			};
		case types.REMOVE_GIFT:
			const filteredGifts = state.userDetails.gifts.filter(
				(gift) => gift.name !== action.payload.name
			);
			setLocalStorage(MY_GIFTS, filteredGifts);
			return {
				...state,
				userDetails: {
					...state.userDetails,
					gifts: filteredGifts,
				},
			};
		default:
			return state;
	}
};

export default userReducer;
