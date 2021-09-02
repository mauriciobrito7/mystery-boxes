import { SET_BOX_BY_FILTER } from "../types";

export const setBoxByFilter = (id) => ({
  type: SET_BOX_BY_FILTER,
  payload: {
    id,
  },
});
