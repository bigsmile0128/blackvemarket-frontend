import axios from "axios";
import { BASE_URL } from "../../assets/constants";
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

export const getProfile = async (walletaddr) => {
  const res = await axios.post(`${BASE_URL}/users/get-profile`, {walletaddr});
  if (res.data && res.data.status == "success") {
    console.log("actions details: ", res.data);
    return res.data.user;
  }
  return null;
}

export const getCollected = async (walletaddr) => {
  const res = await axios.get(`${BASE_URL}/users/get-collected/${walletaddr}`, {});
  if ( res.data && res.data.status == "success" ) {
    console.log("collected result", res.data);
    return res.data.nft_list;
  }
  return [];
}

export const fetchProfile = (walletaddr) => {
    return async (dispatch) => {
        const res = await axios.post(`${BASE_URL}/users/get-profile`, {
            walletaddr,
        });
        if (res.data) {
            if (res.data.status == "success") {
              if ( res.data.user ) {
                dispatch(walletConnectSuccess(res.data));
              }
            }
        }
    };
};

export const editProfile = async (profiles) => {
  const res = await axios
                    .post(`${BASE_URL}/users/edit-profile`, profiles);
  if ( res.data ) {
    console.log("edit profile actions: ", res.data);
  }
};

export const userRegister = (walletaddr) => {
  return (dispatch) => {
    dispatch(itemsAreLoading());
    axios
      .post(`${BASE_URL}/users/user-register`, { walletaddr: walletaddr })
      .then((res) => {
        if (res.data) {
          console.log("register actions: ", res.data);
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
