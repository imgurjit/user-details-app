import axios from "axios";
import { data } from "./dummyData";

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
        // Using Dummy data because the API does not work sometimes
        success(data);
      }
    )
    .catch((err) => {
      // Using Dummy data because the API does not work sometimes
      success(data);
    });
}

function getUserDetailByID(id, success, failure) {
  let x = data.filter((d) => {
    if (d.id == id) return d;
    else return null;
  });

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
        // Using Dummy data because the API does not work sometimes
        success(x[0]);
      }
    )
    .catch((err) => {
      // Using Dummy data because the API does not work sometimes
      success(x[0]);
    });
}
