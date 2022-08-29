import React , { useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Countdown from "react-countdown";


const LiveAuction = props => {
    const data = props.data;

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
                        data.slice(0,visible).map((item,index) => (
                            <LiveAuctionItem key={index} item={item} />
                        ))
                    }
                    {
                        visible < data.length && 
                        <div className="col-md-12 wrap-inner load-more text-center"> 
                            <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

LiveAuction.propTypes = {
    data: PropTypes.array.isRequired,
}

const LiveAuctionItem = props => (
    <div className="fl-item col-xl-3 col-lg-6 col-md-6">
        <div className="sc-card-product">
            <div className="card-media">
                <Link to="/item-details-01"><img src={props.item.img} alt="axies" /></Link>
                <Link to="/login" className="wishlist-button heart"><span className="number-like">{props.item.wishlist}</span></Link>
                <div className="featured-countdown">
                    <span className="slogan"></span>
                    <Countdown date={Date.now() + 500000000}>
                        <span>You are good to go!</span>
                    </Countdown>
                </div>
                <div className="button-place-bid">
                    <Link to="/wallet-connect" className="sc-button style-place-bid style bag fl-button pri-3"><span>Place Bid</span></Link>
                </div>
            </div>
            <div className="card-title">
                <h5><Link to="/item-details-01">{props.item.title}</Link></h5>
                <div className="tags">{props.item.tags}</div>
            </div>
            <div className="meta-info">
                <div className="author">
                    <div className="avatar">
                        <img src={props.item.imgAuthor} alt="axies" />
                    </div>
                    <div className="info">
                        <span>Creator</span>
                        <h6> <Link to="/authors-02">{props.item.nameAuthor}
                        </Link> </h6>
                    </div>
                </div>
                <div className="price">
                    <span>Current Bid</span>
                    <h5> {props.item.price}</h5>
                </div>
            </div>
        </div>
    </div>
    
    
)

export default LiveAuction;
