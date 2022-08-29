import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { Navigation, Pagination, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import img1 from '../../assets/images/box-item/img_cart_item3.png'
import img2 from '../../assets/images/box-item/img_cart_item4.png'
import img3 from '../../assets/images/box-item/img_cart_item5.png'


const SliderStyle2 = () => {
    const [data] = useState(
        [
            {
                title: 'CYBER ART',
                category: 'Graphic Art 3D',
                img: img1
            },
            {
                title: 'HOT lAVA',
                category: 'Graphic Art 3D',
                img: img2
            },
            {
                title: 'LIVE ARTS',
                category: 'Graphic Art 3D',
                img: img3
            },
            {
                title: 'CYBER ART',
                category: 'Graphic Art 3D',
                img: img1
            },
            {
                title: 'HOT lAVA',
                category: 'Graphic Art 3D',
                img: img2
            },
            {
                title: 'LIVE ARTS',
                category: 'Graphic Art 3D',
                img: img3
            },
        ]
    )
    return (
        <div>
            <section className="flat-cart-item home6 style2 mainslider">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                        <Swiper
                            modules={[Navigation, Pagination,  Scrollbar, A11y ]}
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
                                        <SwiperSlide key={index} >
                                            <SliderItem item={item}  />
                                        </SwiperSlide>
                                    ))
                                }

                        </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const SliderItem = props => (
    <div className="swiper-wrapper">
        <div className="swiper-slide">
            <div className="slider-item">	
                <div className="wrap-cart">
                    <div className="cart_item style2 style3">
                        <div className="inner-cart">
                            <div className="overlay"></div>
                            <img src={props.item.img} alt="Axies" />
                            <div className="content">
                                <div className="fs-16"><Link to="/item-details-01">{props.item.title}</Link></div>
                                <p>{props.item.category}</p>
                            </div>   
                        </div>
                    </div>
                </div> 	
            </div>
        </div>
    </div>

)


export default SliderStyle2;
