import React , { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Countdown from "react-countdown";

import * as actions from "../../../store/actions/collectionActions";
import { sliceAddress, toPriceFormat } from '../../../utils/utils';
import { BACKEND_URL } from '../../../assets/constants';
import avt from "../../../assets/images/avatar/avt-author-tab.png";


const LiveAuction = props => {
    const [auctions, setAuctions] = useState([]);
    const signer = window.localStorage.getItem("vechain_signer");

    useEffect(() => {
        fetchLiveAuctions();
    }, []);

    const fetchLiveAuctions = async () => {
        const liveAuctions = await actions.getLiveAuctions();
        setAuctions(liveAuctions);
    }

    const [visible , setVisible] = useState(8);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    return (
        
        <section className="tf-section live-auctions">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="tf-title-heading style-1 ct">Live Auctions</h2>
                    </div>
                    
                    {
                        auctions.slice(0,visible).map((item,index) => (
                            <LiveAuctionItem key={index} item={item} signer={signer} />
                        ))
                    }
                    {
                        visible < auctions.length && 
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
                <h5><Link to={`/collection/${props.item.collection.col_name}/${props.item.details.token_id}`}>{props.item.details.name}</Link></h5>
            </div>
            <div className="meta-info">
                <div className="author">
                    <div className="avatar">
                        <img src={props.item.collection.logoImg?BACKEND_URL + props.item.collection.logoImg:avt} alt="axies" />
                    </div>
                    <div className="info">
                        <h6> <Link to={`/collection/${props.item.collection.col_name}`}>{props.item.collection.name}</Link> </h6>
                    </div>
                </div>
                <div className="price">
                    <span>{props.item.auctionSale.minPrice>0?'Current Bid':'Price'}</span>
                    <h5> {toPriceFormat(props.item.auctionSale.minPrice>0?(props.item.offer&&props.item.offer.offer>0?props.item.offer.offer:props.item.auctionSale.minPrice):props.item.auctionSale.fixedPrice)}</h5>
                </div>
            </div>
        </div>
    </div>
    
    
)

export default LiveAuction;
