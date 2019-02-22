import { FETCH_USERS, DELETE_USER } from "./types";
import axios from "axios";

export function fetchUsers(): any {
  return (disaptch: any) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(resp => {
      disaptch({
        type: FETCH_USERS,
        payload: resp.data
      });
    });
  };
}

export const deleteUser = (id: number): any => {
  return {
    type: DELETE_USER,
    payload: id
  };
};
