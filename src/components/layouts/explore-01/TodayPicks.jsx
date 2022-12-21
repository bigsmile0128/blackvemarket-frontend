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
import FilterTraits from "./FilterTraits";

const TodayPicks = (props) => {
  const collection = props.collection;
  const [nfts, setNFTs] = useState([]);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [length, setLength] = useState(0);
  const [filters, setFilters] = useState({
    'onSale': null,
    'notOnSale': null
  });
  const [traits, setTraits] = useState([]);

  const [sort, setSort] = useState(0);
  const sortList = [
    "TokenID (Low to High)",
    "TokenID (High to Low)",
    "Rarity (most)",
    "Rarity (least)",
    "Price (Low to High)",
    "Price (High to Low)",
    "Newly Listed"
  ];

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

  const loadNFTs = async (init, sort, filters) => {
    if (init == 1) {
      await setNFTs([]);
    }
    await setLoading(true);
    const new_nfts = await actions.getNFTs(
      collection.col_name,
      sort,
      init ? 0 : loaded,
      16,
      filters
    );
    const updated_nfts = init ? new_nfts.nfts : nfts.concat(new_nfts.nfts);
    await setLength(new_nfts.length);
    await setNFTs(updated_nfts);
    await setLoaded(updated_nfts.length);
    await setLoading(false);
  };

  const loadTraits = async () => {
    setTraits(await actions.getTraits(collection.col_name));
  }

  useEffect(() => {
    if (collection && collection.address && collection.total_supply > 0) {
      loadNFTs(1, sort, filters);
    }
    loadTraits();
  }, [collection, sort, filters]);

  const onReset = async () => {
    await setFilters({
      'onSale': null,
      'notOnSale': null
    });
    setIsFilter(false);
    await loadNFTs(1, sort, filters);
  }

  const onFilter = () => {
    setIsFilter(true);
  }

  const toggleFilter = async (val) => {
    let updated_filters = filters;
    updated_filters[val] = updated_filters[val] == 'checked' ? null : 'checked';
    await setFilters(updated_filters);
    await loadNFTs(1, sort, filters);
  }

  return (
    <section className="tf-section sc-explore-1">
      {collection && (
        <div className="themesflat-container">
          <div className="row pt-5">
            <div className="w-100 d-block">
              <div className="seclect-box style3 hidden-md-up" style={{ float: 'none' }}>
                <div className="row w-100 mx-0">
                  <div className="col-5 ml-auto d-flex">
                    <p className="m-auto">Filter</p>
                  </div>
                  <div className="col-5 mr-auto d-flex">
                    <p className="m-auto">Sort by</p>
                  </div>
                </div>
                <div className="row w-100 my-5 mx-0">
                  <div className="col-5 ml-auto d-flex">
                    <Link to="#" className="sc-button my-auto loadmore fl-button pri-3" onClick={() => onFilter()}>
                      <span>
                        Filter
                      </span>
                    </Link>
                  </div>
                  <div id="sort-by" className="dropdown col-5 mr-auto">
                    <Link to="#" className="btn-selector nolink pr-8 h-100 d-flex">
                      <span className="my-auto">{sortList[sort]}</span>
                    </Link>
                    <ul>
                      {sortList.map((item, idx) => (
                        <li className={`${sort == idx ? 'active' : ''}`} key={idx} onClick={() => setSort(idx)}><span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 hidden-sm-down">
              <div className="wrap-box explore-1 flex mg-bt-40">
                <div className="collection-header">
                  <span>
                    {numberWithCommas(length)} tokens
                  </span>
                </div>
                <div className="seclect-box style-2 ml-auto box-right hidden-sm-down">
                  <div className="mx-5 flex">
                    <Link to="#" className="sc-button loadmore fl-button pri-3" onClick={() => onFilter()}>
                      <span>
                        Filter
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="seclect-box style-2 box-right hidden-sm-down">
                  <div className="mx-5 flex">
                    <p className="m-auto">Sort by</p>
                  </div>
                  <div id="sort-by" className="dropdown style-2">
                    <Link to="#" className="btn-selector nolink pr-8">{sortList[sort]}</Link>
                    <ul>
                      {sortList.map((item, idx) => (
                        <li className={`${sort == idx ? 'active' : ''}`} key={idx} onClick={() => setSort(idx)}><span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {nfts.map((item, index) => (
              <NFTItem key={index} item={item} collection={collection} />
            ))}
            {loading &&
              <div className="spinner-container m-auto">
                <div className="loading-spinner">
                </div>
              </div>}
            {loaded < length && (
              <div className="col-md-12 wrap-inner load-more text-center">
                <Link
                  to="#"
                  id="load-more"
                  className="sc-button loadmore fl-button pri-3"
                  onClick={() => loadNFTs(0, sort, filters)}
                >
                  <span>Load More</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      <FilterTraits
        show={isFilter}
        setShow={setIsFilter}
        traits={traits}
        values={filters}
        toggleValues={toggleFilter}
        reset={onReset}
      />
    </section>
  );
};

export default TodayPicks;
