import React , { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Countdown from "react-countdown";

import * as actions from "../../../store/actions/collectionActions";
import { sliceAddress, toPriceFormat, toVETFormat } from '../../../utils/utils';
import { BACKEND_URL } from '../../../assets/constants';
import avt from "../../../assets/images/avatar/avt-author-tab.png";
import _ from 'lodash';


const LiveAuction = props => {
    const [auctions, setAuctions] = useState([]);
    const signer = window.localStorage.getItem("vechain_signer");

    const [sort, setSort] = useState(0);
    const sortList = [
      "TokenID (Low to High)", 
      "TokenID (High to Low)", 
      "Rarity (most)", 
      "Rarity (least)",
      "Price (Low to High)",
      "Price (High to Low)",
      "Newly Listed",
    ];
    const [filter, setFilter] = useState(0);
    const [collections, setCollections] = useState(["All"]);
    const [filtered, setFiltered] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchLiveAuctions();
    }, []);

    const fetchLiveAuctions = async () => {
        await setFiltered([]);
        await setIsLoading(true);
        const liveAuctions = await actions.getLiveAuctions();
        
        const _collections = ["All"];
        for ( const auction of liveAuctions ) {
            if ( _collections.indexOf(auction.collection.name) < 0 ) {
                _collections.push(auction.collection.name);
            }
        }
        
        await setCollections(_collections);
        await setFiltered(liveAuctions);
        await setAuctions(liveAuctions);
        await setIsLoading(false);
    }

    useEffect(() => {
      const getFilteredItems = (items) => {
        let filtered_items = items;
        if ( filter > 0 ) {
          filtered_items = items.filter((item) => item.collection.name === collections[filter]);
        }
        if ( sort === 0 )
          filtered_items = _.orderBy(filtered_items, 'details.token_id', 'asc');
        else if ( sort === 1 )
          filtered_items = _.orderBy(filtered_items, 'details.token_id', 'desc');
        else if ( sort === 2 )
          filtered_items = _.orderBy(filtered_items, ['details.rank', 'collection.col_name', 'details.token_id'], ['asc', 'asc', 'asc']);
        else if ( sort === 3 )
          filtered_items = _.orderBy(filtered_items, ['details.rank', 'collection.col_name', 'details.token_id'], ['desc', 'asc', 'asc']);
        else if ( sort === 4 )
          filtered_items = _.orderBy(filtered_items, ['price', 'collection.col_name', 'details.token_id'], ['asc', 'asc', 'asc']);
        else if ( sort === 5 )
          filtered_items = _.orderBy(filtered_items, ['price', 'collection.col_name', 'details.token_id'], ['desc', 'asc', 'asc']);
        else if ( sort === 6 )
          filtered_items = _.orderBy(filtered_items, ['auctionSale.startedAt', 'collection.col_name', 'details.token_id'], ['desc', 'asc', 'asc']);
  
        return filtered_items;
      }
      
      if ( auctions && auctions.length > 0 ) {
        setFiltered(getFilteredItems(auctions));
        setVisible(8);
      }
    }, [sort, filter, auctions, collections])

    const [visible , setVisible] = useState(8);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    return (
        
        <section className="tf-section live-auctions">
            <div className="themesflat-container">
                <div className="w-100 d-block">
                    <div className="seclect-box style3 hidden-md-up" style={{float: 'none'}}>
                        <div className="row w-100 mx-0">
                            <div className="col-5 ml-auto d-flex">
                                <p className="m-auto">Project</p>
                            </div>
                            <div className="col-5 mr-auto d-flex">
                                <p className="m-auto">Sort by</p>
                            </div>
                        </div>
                        <div className="row w-100 my-5 mx-0">
                        <div id="artworks" className="col-5 ml-auto dropdown">
                            <Link to="#" className="btn-selector nolink pr-8 h-100 d-flex">
                                <span className='my-auto'>{collections[filter]}</span>
                            </Link>
                            <ul>
                                {collections.map((item, idx) => (
                                <li className={`${filter==idx?'active':''}`} key={idx} onClick={()=>setFilter(idx)}><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div id="sort-by" className="dropdown col-5 mr-auto">
                            <Link to="#" className="btn-selector nolink pr-8 h-100 d-flex">
                                <span className="my-auto">{sortList[sort]}</span>
                            </Link>
                            <ul>
                                {sortList.map((item, idx) => (
                                <li className={`${sort==idx?'active':''}`} key={idx} onClick={()=>setSort(idx)}><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="seclect-box style3 hidden-sm-down" style={{float: 'none'}}>
                        <div className="mr-5 flex">
                            <p className="m-auto">Select Project</p>
                        </div>
                        <div id="artworks" className="dropdown">
                            <Link to="#" className="btn-selector nolink pr-8">{collections[filter]}</Link>
                            <ul>
                                {collections.map((item, idx) => (
                                <li className={`${filter==idx?'active':''}`} key={idx} onClick={()=>setFilter(idx)}><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
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
                <div className="row mt-5">    
                    {isLoading &&
                    <div className="spinner-container m-auto">
                        <div className="loading-spinner">
                        </div>
                    </div> }      
                    {
                        filtered.slice(0,visible).map((item,index) => (
                            <LiveAuctionItem key={index} item={item} signer={signer} />
                        ))
                    }
                    {
                        visible < filtered.length && 
                        <div className="col-md-12 wrap-inner load-more text-center"> 
                            <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

const LiveAuctionItem = props => (
    <div className="fl-item col-xl-3 col-lg-6 col-md-6">
        <div className="sc-card-product">
            <div className="card-media">
                <Link to={`/collection/${props.item.collection.col_name}/${props.item.details.token_id}`}><img src={props.item.details.image} alt="axies" /></Link>
                {props.item.auctionSale && props.item.auctionSale.seller !== props.signer && props.item.auctionSale.duration > 0 && props.item.auctionSale.minPrice > 0 && props.item.auctionSale.finalPrice == 0 &&
                    <div className="featured-countdown">
                        <span className="slogan"></span>
                        <Countdown date={props.item.auctionSale.startedAt * 1000 + props.item.auctionSale.duration * 1000}>
                            <span>Auction is closed.</span>
                        </Countdown>
                    </div>
                }
            </div>
            <div className="card-title">
                <h5><Link to={`/collection/${props.item.collection.col_name}/${props.item.details.token_id}`}>{props.item.details.name?props.item.details.name:(props.item.collection.name+"#"+props.item.details.token_id)}</Link></h5>
                {props.item.details.rank &&
                <div className="price">
                <span>Rank</span>
                <h5 style={{overflow: 'initial'}}> {props.item.details.rank}</h5>
                </div> }
            </div>
            <div className="meta-info">
                <div className="author">
                    <div className="avatar">
                        <img src={props.item.collection.logoImg?BACKEND_URL + props.item.collection.logoImg:avt} alt="axies" />
                    </div>
                    <div className="info">
                        <h6> <Link to={`/collection/${props.item.collection.symbol}`}>{props.item.collection.name}</Link> </h6>
                    </div>
                </div>
                <div className="price">
                    <span>{props.item.auctionSale.isAuction?'Current Bid':'Price'}</span>
                    <h5> {toVETFormat(props.item.auctionSale.isAuction?(props.item.offer&&props.item.offer.price>0?props.item.offer.price:props.item.auctionSale.price):props.item.auctionSale.price, 0)}</h5>
                </div>
            </div>
        </div>
    </div>
    
    
)

export default LiveAuction;
