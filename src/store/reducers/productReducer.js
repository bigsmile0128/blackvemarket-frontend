const initialState = {
  productFixedIt: {},
  productAuctionIt: {},
  collection: {},
  collections: [],
  loading: false,
  failure: false,
  success: false,
  nfts: [],
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case "ITEMS_HAVE_ERROR":
      return { ...state, failure: true };
    case "CREATE_FIXED_ITEM_SUCCESS":
      return { ...state, success: true, productFixedIt: action.payload };
    case "ITEMS_HAVE_LOADING":
      return { ...state, loading: true };
    case "CREATE_COLLECTION_SUCCESS":
      return { ...state, success: true, collection: action.payload };
    case "GET_NFTS":
      return { ...state, nfts: action.payload };
    case "GET_COLLECTIONS_SUCCESS":
      // return state;
      return { ...state, success: true, collections: action.payload };
    case "GET_COLLECTION":
      return { ...state, success: true, collection: action.payload };
    default:
      return state;
  }
}
