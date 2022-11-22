import axios from "axios";
import { BASE_URL } from "../../assets/constants";
import {
  GET_COLLECTIONS_SUCCESS,
  CREATE_COLLECTION_SUCCESS,
  ITEMS_HAVE_LOADING,
  ITEMS_HAVE_ERROR,
  GET_COLLECTION,
  GET_NFTS,
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

export function getNFTsSuccess(nfts) {
  return {
    type: GET_NFTS,
    payload: nfts,
  };
}

export function getCollectionsSuccess(collections) {
  return {
    type: GET_COLLECTIONS_SUCCESS,
    payload: collections,
  };
}

export function getCollectionSuccess(collection) {
  return {
    type: GET_COLLECTION,
    payload: collection,
  };
}

export const getCollection = (symbol) => {
  return async (dispatch) => {
    const res = await axios.post(`${BASE_URL}/collections/get-collection`, {
      symbol: symbol,
    });
    if (res.data && res.data.status == "success") {
      dispatch(getCollectionSuccess(res.data.collection));
    }
  };
};

export const getClts = () => {
  return (dispatch) => {
    dispatch(itemsAreLoading());
    axios
      .get(`${BASE_URL}/collections/get-collections`)
      .then((res) => {
        console.log("Actions Collections: ", res.data);
        dispatch(getCollectionsSuccess(res.data.collections));
      })
      .catch(() => dispatch(itemsHaveError(true)));
  };
};

export const createClt = (cltInfo) => {
  return (dispatch) => {
    dispatch(itemsAreLoading());
    axios
      .post(`${BASE_URL}/collections/create-collection`, cltInfo)
      .then((res) => {

        if (res.data) {
          dispatch(createCollectionSuccess(res.data));
        }
      })
      .catch(() => dispatch(itemsHaveError(true)));
  };
};

export const addNFT = (col_name, meta_json, token_id) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/collections/add-nft`, {
        col_name,
        meta_json,
        token_id,
      })
      .then((res) => {});
  };
};

export const updateNFT = (col_name, token_id) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/collections/update-nft`, {
        col_name,
        token_id,
      })
      .then((res) => {});
  };
};

export const getNFTs = async (col_name, start, limit) => {
  console.log("actions: ", start, limit);
  const res = await axios.post(`${BASE_URL}/collections/get-nfts`, {
    col_name,
    start,
    limit,
  });
  if (res.data) {
    if (res.data.status == "success") {
      return res.data.nfts;
    }
  }
  return [];
};

export const storeNftsToReducer = (nfts) => {
  return async (dispatch) => {
    await dispatch(getNFTsSuccess(nfts));
  };
};

export const getItemDetails = async (col_name, token_id) => {
  const res = await axios.post(`${BASE_URL}/collections/get-itdetails`, {
    col_name,
    token_id,
  });
  if (res.data && res.data.status == "success") {
    console.log("actions details: ", res.data);
    return res.data;
  }
  return [];
};

export const getNFTDetail = async (address, token_id) => {
  const res = await axios.post(`${BASE_URL}/collections/nft`, {
    address,
    token_id,
  });
  if (res.data && res.data.status == "success") {
    console.log("actions details: ", res.data);
    return res.data;
  }
  return [];
};

export const getLiveAuctions = async () => {
  const res = await axios.get(`${BASE_URL}/collections/liveAuctions`, {});
  if (res.data && res.data.status == "success") {
    console.log("actions details: ", res.data);
    return res.data.liveAuctions;
  }
  return [];
}

export const getAllNfts = async (col_names, start, limit) => {
  console.log("actions: ", start, limit);
  const res = await axios.post(`${BASE_URL}/collections/get-allnfts`, {
    col_names,
    start,
    limit,
  });

  if (res.data && res.data.status == "success") {
    console.log("actions allnfts: ", res.data.allnfts);
    return res.data.allnfts;
  }

  return [];
};
