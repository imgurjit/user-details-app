import axios from "axios";

const server_url = "https://jsonplaceholder.typicode.com";

export const userListService = {
  getUsers,
  getUserDetailByID
};

function getUsers(success, failure) {
  axios
    .get(server_url + "/users", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(
      (res) => {
        success(res.data);
      },
      (err) => {
        failure(err);
      }
    )
    .catch((err) => {
      failure(err);
    });
}

function getUserDetailByID(id, success, failure) {
  axios
    .get(server_url + "/users/" + id, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(
      (res) => {
        success(res.data);
      },
      (err) => {
        failure(err);
      }
    )
    .catch((err) => {
      failure(err);
    });
}
