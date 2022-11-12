import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { collectionReducer } from "./collectionReducer";

export default combineReducers({
  profile: profileReducer,
  collections: collectionReducer,
});
