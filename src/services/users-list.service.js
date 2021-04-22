// Please note JSONHOLDER APIs are not working so I am using dummy data

// GITHUB Issue : https://github.com/typicode/jsonplaceholder/issues/135

import axios from "axios";
import { data } from "./dummyData";

const server_url = "https://jsonplaceholder.typicode.com";

export const userListService = {
  getUsers,
  getUserDetailByID
};

function getUsers(success, failure) {
  success(data);
  // axios
  //   .get(server_url + "/users", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     }
  //   })
  //   .then(
  //     (res) => {
  //       success(res.data);
  //     },
  //     (err) => {
  //
  //       success(data);
  //     }
  //   )
  //   .catch((err) => {
  //     success(data);
  //   });
}

function getUserDetailByID(id, success, failure) {
  let x = data.filter((d) => {
    if (d.id == id) return d;
    else return null;
  });

  success(x[0]);
  // axios
  //   .get(server_url + "/users/" + id, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     }
  //   })
  //   .then(
  //     (res) => {
  //       success(res.data);
  //     },
  //     (err) => {
  //       success(x[0]);
  //     }
  //   )
  //   .catch((err) => {
  //     success(x[0]);
  //   });
}
