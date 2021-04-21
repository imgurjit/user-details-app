import { userListConstants } from "../constants";
import { userListService } from "../services";

export const userListActions = {
  getUsers,
  getUserDetailByID
};

function getUsers() {
  return (dispatch) => {
    userListService.getUsers(
      (res) => {
        dispatch({ type: userListConstants.GET_USERS, res });
      },
      (err) => {}
    );
  };
}

function getUserDetailByID(id, failure) {
  return (dispatch) => {
    userListService.getUserDetailByID(
      id,
      (res) => {
        dispatch({ type: userListConstants.GET_CURRENT_USER_DETAIL, res });
      },
      (err) => {
        failure();
      }
    );
  };
}
