import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import img1 from '../../assets/images/backgroup-secsion/img_sliderhome7.png'
import shape1 from '../../assets/images/backgroup-secsion/bg-gradient1.png'
import shape2 from '../../assets/images/backgroup-secsion/bg-gradient2.png'
import shape3 from '../../assets/images/backgroup-secsion/bg-gradient3.png'

const SliderStyle4 = () => {
    const [data] = useState(
        [
            {
                img: img1,
                title_1: "Discover, find,",
                title_2: "Sell extraordinary",
                title_3: "Monster NFTs",
                description: "Marketplace for monster character cllections non fungible token NFTs",
            },
            {
                img: img1,
                title_1: "Discover, find,",
                title_2: "Sell extraordinary",
                title_3: "Monster NFTs",
                description: "Marketplace for monster character cllections non fungible token NFTs",
            },
            {
                img: img1,
                title_1: "Discover, find,",
                title_2: "Sell extraordinary",
                title_3: "Monster NFTs",
                description: "Marketplace for monster character cllections non fungible token NFTs",
            },
        ]
    )
    return (
        <div>
            <section className="flat-title-page style3 mainslider">
                <img className="bgr-gradient gradient1" src={shape1} alt="Axies" />
                <img className="bgr-gradient gradient2" src={shape2} alt="Axies" />
                <img className="bgr-gradient gradient3" src={shape3} alt="Axies" />
                <div className="overlay"></div>
                <Swiper
                            modules={[Navigation,  Scrollbar, A11y ]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation
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
            </section>
        </div>
    );
}

const SliderItem = props => (
    <div className="swiper-container mainslider home auctions">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slider-item">	
                    <div className="themesflat-container ">
                        <div className="wrap-heading flat-slider flex">
                            <div className="content">
                                <h2 className="heading mt-15">{props.item.title_1}
                                </h2>	
                                <h1 className="heading mb-style"><span className="tf-text s1">{props.item.title_2}</span>                                          
                                </h1>
                                <h1 className="heading">{props.item.title_3}</h1>
                                <p className="sub-heading mt-19 mb-40">{props.item.description}
                                </p>
                                <div className="flat-bt-slider flex style2">
                                    <Link to="/explore-01" className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Explore
                                    </span></Link>
                                    <Link to="/create-item" className="sc-button header-slider style style-1 note fl-button pri-1"><span>Create
                                    </span></Link>
                                </div>
                            </div>
                            <div className="wrap-image">
                                <div className="overlay-style2"></div>
                                <img src={props.item.img} alt="Axies" />
                            </div>
                        </div>
                        
                    </div>					                           
                </div>
            </div>
        </div>
    </div>
)

export default SliderStyle4;
