const initialState = {
  profileInfo: {},
  loading: false,
  failure: false,
  success: false,
  isAuthenticated: false,
};
export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "ITEMS_HAVE_ERROR":
      return { ...state, failure: true };
    case "ITEMS_HAVE_SUCCESS":
      return { ...state, success: true, profileInfo: action.payload.user };
    case "ITEMS_HAVE_LOADING":
      return { ...state, loading: true };
    case "WALLET_CONNECT_SUCCESS":
      return {
        ...state,
        success: true,
        isAuthenticated: true,
        profileInfo: { ...state.profileInfo, ...action.payload.user },
      };
    case "WALLET_DISCONNECT_SUCCESS":
      return {
        ...state,
        success: true,
        isAuthenticated: false,
        profileInfo: {},
      };
    default:
      return state;
  }
}
