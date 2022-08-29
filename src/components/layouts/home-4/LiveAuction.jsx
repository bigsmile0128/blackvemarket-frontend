import React from 'react';
import PropTypes from 'prop-types'
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Countdown from "react-countdown";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const LiveAuction = props => {
    const data = props.data;

    return (
        
        <section className="tf-section live-auctions">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-live-auctions">
                            <h2 className="tf-title pb-20">
                                Live Auctions</h2>
                            <Link to="/explore-03" className="exp style2">EXPLORE MORE</Link>
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
                                data.slice(0,7).map((item,index) => (
                                    <SwiperSlide key={index}>
                                        <LiveAuctionItem item={item} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

LiveAuction.propTypes = {
    data: PropTypes.array.isRequired,
}

const LiveAuctionItem = props => (
    <div className="swiper-container show-shadow carousel auctions">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slider-item">										
                    <div className="sc-card-product menu_card">
                        <div className="meta-info style">
                            <div className="author">
                                <div className="avatar">
                                    <img src={props.item.imgCollection} alt="Axies" />
                                </div>
                                <div className="info">
                                    <span>Collection</span>
                                    <h6> <Link to="/authors-02">{props.item.nameCollection}</Link> </h6>
                                </div>
                            </div>
                            <div className="menu_card">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <i className="fas fa-ellipsis-h"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    Refresh Metadata
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    Share
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    Report
                                </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        </div>
                        <div className="card-media">
                            <Link to="/item-details-01"><img src={props.item.img} alt="Axies" /></Link>
                            <Link to="/login" className="wishlist-button heart"><span className="number-like"> {props.item.wishlist}</span></Link>
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
                            <h5><Link to="/item-details-01">"{props.item.title} "</Link></h5>
                            <div className="tags">{props.item.tags}</div>
                        </div>
                        <div className="meta-info">
                            <div className="author">
                                <div className="avatar">
                                    <img src={props.item.imgAuthor} alt="Axies" />
                                </div>
                                <div className="info">
                                    <span>Creator</span>
                                    <h6> <Link to="/author-02">{props.item.nameAuthor}
                                    </Link> </h6>
                                </div>
                            </div>
                            <div className="price">
                                <span>Current Bid</span>
                                <h5>{props.item.price}</h5>
                            </div>
                        </div>
                    </div>      	
                </div>
            </div>
        </div>
    </div>
    
)

export default LiveAuction;
