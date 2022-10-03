import axios from "axios";
import { BASE_URL } from "../../constants";
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
  dispatch(itemsAreLoading());

  axios
    .post(`${BASE_URL}/users/edit-profile`, profiles)
    .then((res) => {
      if (res.data) {
        dispatch(itemsFetchDataSuccess(res.data));
      }
    })
    .catch(() => dispatch(itemsHaveError(true)));
};
