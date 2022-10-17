const initialState = {
  productFixedIt: {},
  productAuctionIt: {},
  loading: false,
  failure: false,
  success: false,
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case "ITEMS_HAVE_ERROR":
      return { ...state, failure: true };
    case "ITEMS_HAVE_SUCCESS":
      return { ...state, success: true, productFixedIt: action.payload };
    case "ITEMS_HAVE_LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
}
