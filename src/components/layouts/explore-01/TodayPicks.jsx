import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Connex from "@vechain/connex";
import * as abis from "../../../assets/constants/abis";
import * as actions from "../../../store/actions/collectionActions";
import { NODE, NETWORK } from "../../../assets/constants";
import { useEffect } from "react";
import { numberWithCommas } from "../../../utils/utils";
import NFTItem from "./NFTItem";
import { useDispatch, useSelector } from "react-redux";

const TodayPicks = (props) => {
  const collection = props.collection;
  const [nfts, setNFTs] = useState([]);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(0);

  const [sort, setSort] = useState(0);
  const sortList = ["TokenID (Low to High)", "TokenID (High to Low)", "Rarity (Low to High)", "Rarity (High to Low)"];
  
  const connex = new Connex({
    node: NODE,
    network: NETWORK,
  });

  const getNFTMetaData = async (address, tokenId) => {
    const abiTokenURI = abis.Warbands_ABI.find(
      ({ name }) => name === "tokenURI"
    );

    const result = await connex.thor
      .account(address)
      .method(abiTokenURI)
      .call(tokenId);

    return result.decoded[0];
  };

  const loadNFTs = async (init, sort) => {
    const new_nfts = await actions.getNFTs(
      collection.col_name,
      sort,
      init ? 0 : loaded,
      16
    );
    const updated_nfts = init ? new_nfts : nfts.concat(new_nfts);
    await setNFTs(updated_nfts);
    await setLoaded(updated_nfts.length);
  };

  useEffect(() => {
    if (collection && collection.address && collection.total_supply > 0) {
      loadNFTs(1, sort);
    }
  }, [collection, sort]);

  return (
    <section className="tf-section sc-explore-1">
      {collection && (
        <div className="themesflat-container">
          <div className="row pt-5">
            <div className="col-md-12">
              <div className="wrap-box explore-1 flex mg-bt-40">
                <div className="collection-header">
                  <span>
                    {numberWithCommas(collection.total_supply)} tokens
                  </span>
                </div>
                <div className="seclect-box style-2 box-right hidden-sm-down">
                  <div className="mx-5 flex">
                    <p className="m-auto">Sort by</p>
                  </div>
                  <div id="sort-by" className="dropdown style-2">
                      <Link to="#" className="btn-selector nolink pr-8">{sortList[sort]}</Link>
                      <ul>
                        {sortList.map((item, idx) => (
                          <li className={`${sort==idx?'active':''}`} key={idx} onClick={()=>setSort(idx)}><span>{item}</span></li>
                        ))}
                      </ul>
                  </div>    
                </div>
              </div>
            </div>
            
            {nfts.length === 0 &&
            <div className="spinner-container m-auto">
                <div className="loading-spinner">
                </div>
            </div> }
            {nfts.map((item, index) => (
              <NFTItem key={index} item={item} collection={collection} />
            ))}
            {loaded < collection.total_supply && (
              <div className="col-md-12 wrap-inner load-more text-center">
                <Link
                  to="#"
                  id="load-more"
                  className="sc-button loadmore fl-button pri-3"
                  onClick={() => loadNFTs(0, sort)}
                >
                  <span>Load More</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default TodayPicks;
