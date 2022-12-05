import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Countdown from "react-countdown";

import * as actions from "../../store/actions/collectionActions";
import { sliceAddress, toPriceFormat, toVETFormat } from '../../utils/utils';

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

    return (
        auctions && auctions.length > 0 && (
        <section className="tf-section live-auctions">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-live-auctions">
                            <h2 className="tf-title pb-20">
                                Live Auctions</h2>
                            <Link to="/marketplace" className="exp style2">EXPLORE MORE</Link>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={30}

                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                  },
                                767: {
                                  slidesPerView: 2,
                                },
                                991: {
                                  slidesPerView: 3,
                                },
                                1300: {
                                    slidesPerView: 4,
                                  },
                              }}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        >
                                {
                                    auctions.sort(() => Math.random() - Math.random()).slice(0,7).map((item,index) => (
                                        <SwiperSlide key={index}>
                                                <div className="swiper-container show-shadow carousel auctions">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="slider-item">										
                                                                <div className="sc-card-product">
                                                                    <div className="card-media">
                                                                        <Link to={`/collection/${item.collection.col_name}/${item.details.token_id}`}><img src={item.details.image} alt="axies" /></Link>
                                                                        {item.auctionSale && item.auctionSale.seller !== signer && item.auctionSale.duration > 0 && item.auctionSale.minPrice > 0 && item.auctionSale.finalPrice == 0 &&
                                                                            <div className="featured-countdown">
                                                                                <span className="slogan"></span>
                                                                                <Countdown date={item.auctionSale.startedAt * 1000 + item.auctionSale.duration * 1000}>
                                                                                    <span>Auction is closed.</span>
                                                                                </Countdown>
                                                                            </div>
                                                                        }
                                                                        {/* <div className="button-place-bid">
                                                                            <Link to="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style-place-bid style bag fl-button pri-3"><span>Place Bid</span></Link>
                                                                        </div> */}
                                                                    </div>
                                                                    <div className="card-title">
                                                                        <h5><Link to={`/collection/${item.collection.col_name}/${item.details.token_id}`}>"{item.details.name?item.details.name:(item.collection.name+"#"+item.details.token_id)}"</Link></h5>
                                                                        {/* <div className="tags">{item.details.description}</div> */}
                                                                        {item.details.rank&&
                                                                        <div className="price">
                                                                        <span>Rank</span>
                                                                        <h5 style={{overflow: 'initial'}}>{item.details.rank}</h5>
                                                                        </div>}
                                                                    </div>
                                                                    <div className="meta-info">
                                                                        <div className="author">
                                                                            <div className="info">
                                                                                <span>Owner</span>
                                                                                <h6> <Link to="#">{sliceAddress(item.auctionSale.seller)}
                                                                                </Link> </h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="price">
                                                                            <span>{item.auctionSale.isAuction?'Current Bid':'Price'}</span>
                                                                            <h5> {toVETFormat(item.auctionSale.isAuction?(item.offer&&item.offer.price>0?item.offer.price:item.auctionSale.price):item.auctionSale.price, 0)}</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>    	
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </SwiperSlide>
                                    ))
                                }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>)
    );
}


export default LiveAuction;
