import axios from "axios";
import { BASE_URL } from "../assets/constants";
import {
  ITEMS_HAVE_SUCCESS,
  ITEMS_HAVE_LOADING,
  ITEMS_HAVE_ERROR,
} from "./types";

export function itemsHaveError() {
  return {
    type: ITEMS_HAVE_ERROR,
  };
}

export function itemsAreLoading() {
  return {
    type: ITEMS_HAVE_LOADING,
  };
}

export function itemsFetchDataSuccess(profiles) {
  return {
    type: ITEMS_HAVE_SUCCESS,
    payload: profiles,
  };
}

export const editProfile = (profiles) => {
  return (dispatch) => {
    console.log("111");
    dispatch(itemsAreLoading());
    console.log("222");
    axios
      .post(`${BASE_URL}/users/edit-profile`, profiles)
      .then((res) => {
        console.log("333");

        if (res.data) {
          console.log("555");
          dispatch(itemsFetchDataSuccess(res.data));
        }
      })
      // .catch(() => dispatch(itemsHaveError(true)));
      .catch(() => console.log("4444"));
  };
};
