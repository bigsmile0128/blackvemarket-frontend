import React from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const TodayPicks = props => {
    const data = props.data;
    return (
        <section className="tf-explore-2 tf-section live-auctions">
        <div className="themesflat-container">
            <div className="row">
                <div className="col-12">
                    <h2 className="tf-title-heading ct style-2 mg-bt-13">
                        NFTs Marketplace
                    </h2>
                    <p className="sub-title ct small mg-bt-20 pad-420">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                    </p>
                    {

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
                                1200: {
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
                                        <TopdayPickItem item={item} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    }
                </div>
            </div>
        </div>
    </section>
    );
}


const TopdayPickItem = props => (
    <div className="swiper-container show-shadow carousel auctions">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slider-item">										
            <div className={`sc-card-product ${props.item.feature ? 'comingsoon' : '' } `}>
            <div className="card-media">
                <Link to="/item-details-01"><img src={props.item.img} alt="axies" /></Link>
                <Link to="/login" className="wishlist-button heart"><span className="number-like">{props.item.wishlist}</span></Link>
                <div className="coming-soon">{props.item.feature}</div>
            </div>
            <div className="card-title">
                <h5 className="style2"><Link to="/item-details-01">"{props.item.title}"</Link></h5>
                <div className="tags">{props.item.tags}</div>
            </div>
            <div className="meta-info">
                <div className="author">
                    <div className="avatar">
                        <img src={props.item.imgAuthor} alt="axies" />
                    </div>
                    <div className="info">
                        <span>Owned By</span>
                        <h6> <Link to="/authors-02">{props.item.nameAuthor}</Link> </h6>
                    </div>
                </div>
                <div className="price">
                    <span>Current Bid</span>
                    <h5> {props.item.price}</h5>
                </div>
            </div>
            <div className="card-bottom">
                <Link to="/wallet-connect" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></Link>
                <Link to="/activity-01" className="view-history reload">View History</Link>
            </div>
        </div>   	
                </div>
            </div>
        </div>
    </div>
    
)
export default TodayPicks;
