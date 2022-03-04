import * as types from "../types";

const INITIAL_STATE = {
	userDetails: {
		name: "Mauricio",
		avatar: "https://avatars.githubusercontent.com/u/12994188?v=4",
		balance: 2000,
		gifts: [],
	},
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_BALANCE:
			return {
				...state,
				userDetails: {
					...state.userDetails,
					balance: state.userDetails.balance + action.payload,
				},
			};

		case types.DISCOUNT_BALANCE:
			return {
				...state,
				userDetails: {
					...state.userDetails,
					balance: state.userDetails.balance - action.payload,
				},
			};
		case types.ADD_GIFT:
			return {
				...state,
				userDetails: {
					...state.userDetails,
					gifts: [...state.userDetails.gifts, action.payload],
				},
			};
		case types.REMOVE_GIFT:
			return {
				...state,
				userDetails: {
					...state.userDetails,
					gifts: state.userDetails.gifts.filter(
						(gift) => gift.name !== action.payload.name
					),
				},
			};
		default:
			return state;
	}
};

export default userReducer;
