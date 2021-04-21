import { userListConstants } from "../constants";

const userListState = {
  users: [],
  currentUserDetails: undefined
};

export function userListReducer(state = userListState, action) {
  switch (action.type) {
    case userListConstants.GET_USERS:
      return {
        ...state,
        users: action.res,
        currentUserDetails: undefined
      };

    case userListConstants.GET_CURRENT_USER_DETAIL:
      return {
        ...state,
        currentUserDetails: action.res
      };
    default:
      return state;
  }
}
