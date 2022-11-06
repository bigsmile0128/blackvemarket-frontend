import axios from "axios";
import { BASE_URL } from "../../assets/constants";
import {
    GET_COLLECTIONS_SUCCESS,
    CREATE_COLLECTION_SUCCESS,
    ITEMS_HAVE_LOADING,
    ITEMS_HAVE_ERROR,
    GET_COLLECTION,
    GET_NFTS,
    CLEAR_NFTS,
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
        console.log("111:");
        dispatch(itemsAreLoading());
        console.log("222");
        axios
            .get(`${BASE_URL}/collections/get-collections`)
            .then((res) => {
                console.log("333");
                console.log("Response: ", res.data);
                dispatch(getCollectionsSuccess(res.data.collections));
            })
            .catch(() => dispatch(itemsHaveError(true)));
    };
};

export const createClt = (cltInfo) => {
    return (dispatch) => {
        console.log("111");
        dispatch(itemsAreLoading());
        console.log("222");
        axios
            .post(`${BASE_URL}/collections/create-collection`, cltInfo)
            .then((res) => {
                console.log("333");

                if (res.data) {
                    console.log("555");
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

export const getNFTs = async (col_name, start, limit) => {
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
