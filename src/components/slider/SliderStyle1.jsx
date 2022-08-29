import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import shape1 from '../../assets/images/backgroup-secsion/bg-gradient1.png'
import shape2 from '../../assets/images/backgroup-secsion/bg-gradient2.png'
import shape3 from '../../assets/images/backgroup-secsion/bg-gradient3.png'
import imgbg from '../../assets/images/backgroup-secsion/img_bg_page_title.jpg'

const SliderStyle1 = props => {
    const data = props.data
    return (
        <div className="mainslider" >
            <Swiper
                modules={[Navigation,  Scrollbar, A11y ]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: true }}
                >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SliderItem item={item} />
                        </SwiperSlide>
                        
                    ))
                }
        </Swiper>
        </div>
    );
}

SliderStyle1.propTypes = {
    data: PropTypes.array.isRequired,
}
const SliderItem = props => (
    <div className="flat-title-page" style={{backgroundImage: `url(${imgbg})`}}>
        <img className="bgr-gradient gradient1" src={shape1} alt="Axies" />
        <img className="bgr-gradient gradient2" src={shape2} alt="Axies" />
        <img className="bgr-gradient gradient3" src={shape3} alt="Axies" />
        <div className="shape item-w-16"></div>
        <div className="shape item-w-22"></div>
        <div className="shape item-w-32"></div>
        <div className="shape item-w-48"></div>
        <div className="shape style2 item-w-51"></div>
        <div className="shape style2 item-w-51 position2"></div>
        <div className="shape item-w-68"></div>
        <div className="overlay"></div>
        <div className="swiper-container mainslider home">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="slider-item">	
                        <div className="themesflat-container ">
                            <div className="wrap-heading flat-slider flex">
                                <div className="content">
                                    <h2 className="heading">{props.item.title_1}</h2>	
                                    <h1 className="heading mb-style"><span className="">{props.item.title_2}</span>                                          
                                    </h1>
                                    <h1 className="heading"><span className='fill'>{props.item.title_3}</span>{props.item.title_4}</h1>
                                    <p className="sub-heading">{props.item.description}
                                    </p>
                                    <div className="flat-bt-slider flex style2">
                                        <Link to="/explore-01" className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Explore
                                        </span></Link>
                                        <Link to="/create-item" className="sc-button header-slider style style-1 note fl-button pri-1"><span>Create
                                        </span></Link>
                                    </div>
                                </div>
                                <div className="image">
                                    <img className="img-bg" src={props.item.imgbg} alt="axies" />
                                    <img src={props.item.img} alt="axies" />
                                </div>
                            </div>   
                        </div>					                           
                    </div>
                </div>
            </div>
        </div>        
    </div>
    
)
export default SliderStyle1;
