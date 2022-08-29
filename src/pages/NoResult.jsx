import React , { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Countdown from "react-countdown";

const NoResult = () => {
    const [data]  = useState(liveAuctionData);
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">No Result</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>No Result</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-no-result tf-section">
                <div className="themesflat-container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                            Sorry, We Couldn’t Find Any Results For This Search.
                        </h2>
                        <h5 className="sub-title help-center mg-bt-32 ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                        </h5>
                        <form action="#" className="help-center-form">
                            <input type="text" placeholder="Type your question here" required />
                            <button>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_1241_902"  maskUnits="userSpaceOnUse" x="1" y="0" width="25" height="24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.666 1.3335H2.23912V23.2653H24.666V1.3335Z" fill="white" stroke="white"/>
                                    </mask>
                                    <g mask="url(#mask0_1241_902)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.4518 3.02254C18.6829 3.02254 22.9387 7.18324 22.9387 12.2988C22.9387 17.4144 18.6829 21.5762 13.4518 21.5762C8.22183 21.5762 3.96601 17.4144 3.96601 12.2988C3.96601 7.18324 8.22183 3.02254 13.4518 3.02254ZM13.4519 23.2653C19.6353 23.2653 24.666 18.3456 24.666 12.2988C24.666 6.25201 19.6353 1.3335 13.4519 1.3335C7.2685 1.3335 2.23889 6.25201 2.23889 12.2988C2.23889 18.3456 7.2685 23.2653 13.4519 23.2653Z" fill="white"/>
                                    <path d="M13.4518 2.52254C18.9484 2.52254 23.4387 6.89655 23.4387 12.2988H22.4387C22.4387 7.46993 18.4174 3.52254 13.4518 3.52254V2.52254ZM23.4387 12.2988C23.4387 17.701 18.9485 22.0762 13.4518 22.0762V21.0762C18.4174 21.0762 22.4387 17.1278 22.4387 12.2988H23.4387ZM13.4518 22.0762C7.95623 22.0762 3.46601 17.701 3.46601 12.2988H4.46601C4.46601 17.1278 8.48742 21.0762 13.4518 21.0762V22.0762ZM3.46601 12.2988C3.46601 6.89659 7.95631 2.52254 13.4518 2.52254V3.52254C8.48734 3.52254 4.46601 7.46989 4.46601 12.2988H3.46601ZM13.4519 22.7653C19.3697 22.7653 24.166 18.059 24.166 12.2988H25.166C25.166 18.6322 19.9008 23.7653 13.4519 23.7653V22.7653ZM24.166 12.2988C24.166 6.53869 19.3698 1.8335 13.4519 1.8335V0.833496C19.9007 0.833496 25.166 5.96533 25.166 12.2988H24.166ZM13.4519 1.8335C7.53406 1.8335 2.73889 6.53862 2.73889 12.2988H1.73889C1.73889 5.9654 7.00294 0.833496 13.4519 0.833496V1.8335ZM2.73889 12.2988C2.73889 18.0591 7.53412 22.7653 13.4519 22.7653V23.7653C7.00288 23.7653 1.73889 18.6322 1.73889 12.2988H2.73889Z" fill="white"/>
                                    </g>
                                    <mask id="mask1_1241_902"  maskUnits="userSpaceOnUse" x="0" y="18" width="8" height="8">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.11719 19.02H1.33216V24.6668H7.11719V19.02Z" fill="white" stroke="white"/>
                                    </mask>
                                    <g mask="url(#mask1_1241_902)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.19553 24.6668C2.41546 24.6668 2.63654 24.5846 2.8058 24.4202L6.86358 20.4633C7.20096 20.1334 7.20211 19.5985 6.86473 19.2686C6.5285 18.9364 5.98155 18.9387 5.64302 19.2663L1.58525 23.2243C1.24787 23.5543 1.24672 24.088 1.5841 24.4179C1.75221 24.5846 1.97444 24.6668 2.19553 24.6668Z" fill="white"/>
                                    <path d="M2.19553 24.6668C2.41546 24.6668 2.63654 24.5846 2.8058 24.4202L6.86358 20.4633C7.20096 20.1334 7.20211 19.5985 6.86473 19.2686C6.5285 18.9364 5.98155 18.9387 5.64302 19.2663L1.58525 23.2244C1.24787 23.5543 1.24672 24.088 1.5841 24.4179C1.75221 24.5846 1.97444 24.6668 2.19553 24.6668" stroke="white"/>
                                    </g>
                                </svg>  
                            </button>
                        </form>
                    </div>
                    </div>                                    
                </div>
            </section>
            <section className="tf-section live-auctions result">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title">
                                Live Auctions</h2>
                            <div className="heading-line"></div>
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
            <Footer />
        </div>
    );
}

const LiveAuctionItem = props => (
    <div className="swiper-container show-shadow carousel auctions">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slider-item">										
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
            </div>
        </div>
    </div>
    
)
export default NoResult;
