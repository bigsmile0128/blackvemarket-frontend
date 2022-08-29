import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Pagination , Scrollbar, A11y } from 'swiper';
import imgAuthor1 from '../../../assets/images/avatar/avt-1.jpg'
import img1left from '../../../assets/images/box-item/collection-item-6.jpg'
import img1right1 from '../../../assets/images/box-item/collection-item-7.jpg'
import img1right2 from '../../../assets/images/box-item/collection-item-8.jpg'
import imgAuthor2 from '../../../assets/images/avatar/avt-8.jpg'
import img2left from '../../../assets/images/box-item/collection-item-9.jpg'
import img2right1 from '../../../assets/images/box-item/collection-item-12.jpg'
import img2right2 from '../../../assets/images/box-item/collection-item-8.jpg'
import imgAuthor3 from '../../../assets/images/avatar/avt-7.jpg'
import img3left from '../../../assets/images/box-item/collection-item-13.jpg'
import img3right1 from '../../../assets/images/box-item/collection-item-10.jpg'
import img3right2 from '../../../assets/images/box-item/collection-item-8.jpg'

const PopularCollection = () => {
    const [data] = useState(
        [
            {
                title: "Creative Art Collection",
                imgAuthor: imgAuthor1,
                name: "Ralph Garraway",
                imgleft: img1left,
                imgright1: img1right1,
                imgright2: img1right2,
                wishlist: "100",
            },
            {
                title: "Colorful Abstract",
                imgAuthor: imgAuthor2,
                name: "Mason Woodward",
                imgleft: img2left,
                imgright1: img2right1,
                imgright2: img2right2,
                wishlist: "100",
            },
            {
                title: "Modern Art Collection",
                imgAuthor: imgAuthor3,
                name: "Freddie Carpenter",
                imgleft: img3left,
                imgright1: img3right1,
                imgright2: img3right2,
                wishlist: "100",
            },
            {
                title: "Creative Art Collection",
                imgAuthor: imgAuthor1,
                name: "Ralph Garraway",
                imgleft: img1left,
                imgright1: img1right1,
                imgright2: img1right2,
                wishlist: "100",
            },
            {
                title: "Colorful Abstract",
                imgAuthor: imgAuthor2,
                name: "Mason Woodward",
                imgleft: img2left,
                imgright1: img2right1,
                imgright2: img2right2,
                wishlist: "100",
            },
            {
                title: "Modern Art Collection",
                imgAuthor: imgAuthor3,
                name: "Freddie Carpenter",
                imgleft: img3left,
                imgright1: img3right1,
                imgright2: img3right2,
                wishlist: "100",
            },
            {
                title: "Creative Art Collection",
                imgAuthor: imgAuthor1,
                name: "Ralph Garraway",
                imgleft: img1left,
                imgright1: img1right1,
                imgright2: img1right2,
                wishlist: "100",
            },
        ]
    )
    return (
        <section className="tf-section live-auctions style4 home5 bg-style2">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-live-auctions">
                            <h2 className="tf-title pb-22 text-left">
                                Popular Collection</h2>
                            <Link to="/explore-03" className="exp style2">EXPLORE MORE</Link>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="">
                        <Swiper
                            modules={[ Navigation , Pagination, Scrollbar, A11y]}
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
                                data.map((item,index) => (
                                    <SwiperSlide key={index}>
                                        <PopularCollectionItem item={item} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
    );
}


const PopularCollectionItem = props => (
    <div className="swiper-container show-shadow carousel4 button-arow-style">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slider-item">										
                <div className="sc-card-collection style-2 home5">
                    <div className="media-images-collection">
                        <div className="box-left">
                            <img src={props.item.imgleft} alt="Axies" />
                        </div>
                        <div className="box-right">
                            <div className="top-img">
                                <img src={props.item.imgright1} alt="Axies" />
                            </div>
                            <div className="bottom-img">
                                <img src={props.item.imgright2} alt="Axies" />
                            </div>
                        <Link to="/login" className="wishlist-button heart"><span className="number-like">{props.item.wishlist}</span></Link>
                    </div>
                    </div>
                    <div className="author-avatar">
                        <div className="image">
                            <img src={props.item.imgAuthor} alt="Axies" className="avatar" />
                            <div className="badge"><i className="ripple"></i></div>
                        </div>
                    </div>
                    <div className="content">
                        <h4 className="heading">
                            <Link to="/authors-01">{props.item.title}</Link>
                        </h4>
                        <div className="description">
                            <span>Created by</span>
                            <h6 className="name"><Link to="/authors-01">{props.item.name}</Link></h6>
                        </div>
                    </div>
                </div> 		
                </div>
            </div>
        </div>                            
    </div>
)

export default PopularCollection;
