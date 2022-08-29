import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import shape from '../../assets/images/backgroup-secsion/bg_section_h5.png'

const SliderStyle2 = () => {
    const [data] = useState(
        [
            {
                subtitle: 'NFT MARKETPLACE',
                title: 'Discover, find and sell extraordinary monster NFTs',
                description: 'Marketplace for monster character cllections non fungible token NFTs'
            },
            {
                subtitle: 'NFT MARKETPLACE',
                title: 'Discover, find and sell extraordinary monster NFTs',
                description: 'Marketplace for monster character cllections non fungible token NFTs'
            },
            {
                subtitle: 'NFT MARKETPLACE',
                title: 'Discover, find and sell extraordinary monster NFTs',
                description: 'Marketplace for monster character cllections non fungible token NFTs'
            },
        ]
    )
    return (
        <div>
            <section className="flat-title-page home5 mainslider">
                <img className="bg_h5" src={shape} alt="Axies" />
                <div className="overlay"></div>
                <div className="swiper-container mainslider auctions">
                <Swiper
                    modules={[Navigation,  Scrollbar, A11y ]}
                        spaceBetween={0}
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
                </div>                         
            </section>
        </div>
    );
}

const SliderItem = props => (
    <div className="swiper-wrapper">
        <div className="swiper-slide">
            <div className="slider-item">	
                <div className="themesflat-container">
                    <div className="wrap-heading flat-slider">
                        <div className="content">
                            <h4 className="mb-11"><span className="fill">{props.item.subtitle}</span></h4>
                            <h1 className="heading">{props.item.title}                                                                                      
                            </h1>	
                            <p className="sub-heading mg-t-7 mg-bt-39">{props.item.description}
                            </p>
                        </div>
                        <div className="flat-bt-slider style2 flex">
                            <Link to="/create-item" className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Create
                            </span></Link>
                            <Link to="/explore-01" className="sc-button header-slider style style-1 note fl-button pri-1"><span>Explore
                            </span></Link>
                        </div>
                    </div>
                </div>					                           
            </div>
        </div>
    </div>

)


export default SliderStyle2;
