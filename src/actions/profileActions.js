import axios from "axios";
import { BASE_URL } from "../assets/constants";
import {
  ITEMS_HAVE_SUCCESS,
  ITEMS_HAVE_LOADING,
  ITEMS_HAVE_ERROR,
  WALLET_CONNECT_SUCCESS,
  WALLET_DISCONNECT_SUCCESS,
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

export function walletConnectSuccess(profiles) {
  return {
    type: WALLET_CONNECT_SUCCESS,
    payload: profiles,
  };
}

export function walletDisconnectSuccess(profiles) {
  return {
    type: WALLET_DISCONNECT_SUCCESS,
    payload: profiles,
  };
}

export const editProfile = (profiles) => {
  console.log(profiles);
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

export const userRegister = (walletaddr) => {
  return (dispatch) => {
    console.log("111: ", walletaddr);
    dispatch(itemsAreLoading());
    console.log("222");
    axios
      .post(`${BASE_URL}/users/user-register`, { walletaddr: walletaddr })
      .then((res) => {
        console.log("333");

        if (res.data) {
          console.log(res.data);
          dispatch(walletConnectSuccess(res.data));
        }
      })
      .catch(() => dispatch(itemsHaveError(true)));
  };
};

export const logout = (walletaddr) => {
  return (dispatch) => {
    dispatch(walletDisconnectSuccess(walletaddr));
  };
};
