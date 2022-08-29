import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Pagination , Scrollbar, A11y } from 'swiper';
import imgAuthor1 from '../../../assets/images/avatar/avt-1.jpg'
import img1 from '../../../assets/images/box-item/collection-item-14.jpg'
import imgAuthor2 from '../../../assets/images/avatar/avt-8.jpg'
import img2 from '../../../assets/images/box-item/collection-item-15.jpg'
import imgAuthor3 from '../../../assets/images/avatar/avt-7.jpg'
import img3 from '../../../assets/images/box-item/collection-item-16.jpg'



const PopularCollection = () => {
    const [data] = useState(
        [
            {
                title: "Creative Art Collection",
                imgAuthor: imgAuthor1,
                name: "Ralph Garraway",
                img: img1,
                wishlist: "100",
            },
            {
                title: "Colorful Abstract",
                imgAuthor: imgAuthor2,
                name: "Mason Woodward",
                img: img2,
                wishlist: "100",
            },
            {
                title: "Modern Art Collection",
                imgAuthor: imgAuthor3,
                name: "Freddie Carpenter",
                img: img3,
                wishlist: "100",
            },
            {
                title: "Creative Art Collection",
                imgAuthor: imgAuthor1,
                name: "Ralph Garraway",
                img: img1,
                wishlist: "100",
            },
            {
                title: "Colorful Abstract",
                imgAuthor: imgAuthor2,
                name: "Mason Woodward",
                img: img2,
                wishlist: "100",
            },
            {
                title: "Modern Art Collection",
                imgAuthor: imgAuthor3,
                name: "Freddie Carpenter",
                img: img3,
                wishlist: "100",
            },
        ]
    )
    return (
        <section className="tf-section live-auctions style4 home5">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-live-auctions">
                            <h2 className="tf-title pb-39 text-left">
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
    <div className="slider-item">										
    <div className="sc-card-collection style-2 home2">
        <div className="card-media-h6">
            <img src={props.item.img} alt="Axies" />
        </div>
        <div className="card-bottom">
            <div className="author">
                <div className="sc-author-box style-2">
                    <div className="author-avatar">
                        <img src={props.item.imgAuthor} alt="Axies" className="avatar" />
                        <div className="badge"><i className="ripple"></i></div>
                    </div>
                </div>
                <div className="content">
                    <h4><Link to="/authors-01">{props.item.title}</Link></h4>
                    <div className="infor">
                        <span>Created by</span>
                        <span className="name"><Link to="/author-02">{props.item.name}</Link></span>
                    </div>
                </div>
            </div>
            <Link to="/login" className="wishlist-button public heart mg-t-6"><span className="number-like">{props.item.wishlist}</span></Link>
        </div>
    </div> 		
</div>
)

export default PopularCollection;
