import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { productReducer } from "./productReducer";

export default combineReducers({
  profile: profileReducer,
  product: productReducer,
});
