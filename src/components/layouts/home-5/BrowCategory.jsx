import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import img1 from '../../../assets/images/box-item/imgslider2category.jpg'
import img2 from '../../../assets/images/box-item/imgslider3category.jpg'
import img3 from '../../../assets/images/box-item/imgslider4category.jpg'
import img4 from '../../../assets/images/box-item/imgslider5category.jpg'
import img5 from '../../../assets/images/box-item/imgslider6category.jpg'
import img6 from '../../../assets/images/box-item/imgslider1category.jpg'

const BrowCategory = () => {
    const [data] = useState(
        [
            {
                title: 'Music',
                img:  img1
            },
            {
                title: 'Domain Names',
                img:  img2
            },
            {
                title: 'Virutal world',
                img:  img3
            },
            {
                title: 'Utility',
                img:  img4
            },
            {
                title: 'Sports',
                img:  img5
            },
            {
                title: 'Art',
                img:  img6
            },
        ]
    )
    return (
        <section className="tf-section brow-category home5 bg-style2">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-live-auctions">
                            <h2 className="tf-title text-left pb-40">
                                Brow By Category</h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <Swiper
                            modules={[ Scrollbar, A11y ]}
                                spaceBetween={32}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        },
                                    767: {
                                        slidesPerView: 2,
                                    },
                                    991: {
                                        slidesPerView: 4,
                                    },
                                    }}
                                loop={{ draggable: true }}
                                scrollbar={{ draggable: true }}
                                >
                                {
                                    data.map((item,index) => (
                                        <SwiperSlide key={index} >
                                            <div className="swiper-slide">
                                                <div className="slider-item">										
                                                    <div className="sc-card-product explode style2">
                                                        <div className="type-title">
                                                            <h3>{item.title}</h3>
                                                        </div>
                                                        <div className="card-media">
                                                            <Link to="/item-details-01"><img src={item.img} alt="Axies" /></Link>
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
        </section>
    );
}

export default BrowCategory;
