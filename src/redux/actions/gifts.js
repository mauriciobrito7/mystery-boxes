import { SET_GIFTS_BY_FILTER } from "../types";

export const setGiftsByFilter = (id) => ({
  type: SET_GIFTS_BY_FILTER,
  payload: id,
});
