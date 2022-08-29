import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

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
                        <h2 className="tf-title style4">
                            Top Seller</h2>
                        <p className="tf-sub-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                    </div>
                    <div className="col-md-12">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={30}

                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                  },
                                767: {
                                  slidesPerView: 5,
                                },
                                991: {
                                  slidesPerView: 7,
                                },
                                1300: {
                                    slidesPerView: 9,
                                  },
                              }}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        >
                                {
                                    data.map((item,index) => (
                                        <SwiperSlide key={index}>
                                            <TopSellerItem item={item} />
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

const TopSellerItem = props => (
    <div className="swiper-container seller seller-slider">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slider-item">										
                    <div className="sc-author-box style-2">
                        <div className="author-avatar">
                                <img src={props.item.img} alt="" className="avatar" />
                            <div className="badge"></div>
                        </div>
                        <div className="author-infor">
                            <h5><Link to="/author-02">{props.item.name}</Link></h5>
                            <span className="price">{props.item.price}</span>
                        </div>
                    </div>    	
                </div>
            </div>
        </div>
    </div>
    
)

export default LiveAuction;
