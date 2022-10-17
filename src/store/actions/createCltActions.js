import axios from "axios";
import { BASE_URL } from "../../assets/constants";
import {
  CREATE_COLLECTION_SUCCESS,
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

export function createCollectionSuccess(cltInfo) {
  return {
    type: CREATE_COLLECTION_SUCCESS,
    payload: cltInfo,
  };
}

export const createClt = (cltInfo) => {
  return (dispatch) => {
    console.log("111");
    dispatch(itemsAreLoading());
    console.log("222");
    axios
      .post(`${BASE_URL}/products/create-collection`, cltInfo)
      .then((res) => {
        console.log("333");

        if (res.data) {
          console.log("555");
          dispatch(createCollectionSuccess(res.data));
        }
      })
      // .catch(() => dispatch(itemsHaveError(true)));
      .catch(() => console.log("4444"));
  };
};
