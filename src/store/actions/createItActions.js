import axios from "axios";
import { BASE_URL } from "../../assets/constants";
import {
  CREATE_FIXED_ITEM_SUCCESS,
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

export function createFixedItemSuccess(products) {
  return {
    type: CREATE_FIXED_ITEM_SUCCESS,
    payload: products,
  };
}

export const createFixedItem = (items) => async (dispatch) => {
  console.log(items);
  console.log("111");
  dispatch(itemsAreLoading());
  console.log("222");
  await axios
    .post(`${BASE_URL}/products/create-item/fixed-price`, items)
    .then((res) => {
      console.log("333");

      if (res.data) {
        console.log("555");
        dispatch(createFixedItemSuccess(res.data));
      }
    })
    // .catch(() => dispatch(itemsHaveError(true)));
    .catch(() => console.log("4444"));
};
