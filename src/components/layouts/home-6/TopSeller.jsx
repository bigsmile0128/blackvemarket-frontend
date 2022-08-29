import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import img1 from '../../../assets/images/avatar/avt-1.jpg'
import img2 from '../../../assets/images/avatar/avt-2.jpg'
import img3 from '../../../assets/images/avatar/avt-4.jpg'
import img4 from '../../../assets/images/avatar/avt-5.jpg'
import img5 from '../../../assets/images/avatar/avt-3.jpg'
import img6 from '../../../assets/images/avatar/avt-8.jpg'
import img7 from '../../../assets/images/avatar/avt-6.jpg'
import img8 from '../../../assets/images/avatar/avt-9.jpg'
import img9 from '../../../assets/images/avatar/avt-7.jpg'

const TopSeller = () => {
    const [dataTopSellerTab] = useState(
        [
            {
                title: '1 Day',
            },
            {
                title: '1 Week',
            },
            {
                title: '1 Month',
            },
        ]
    )
    const [dataTopSellerPanel] = useState(
        [
            {
                id: 1,
                dataTopSellerContent: [
                    {
                        img: img1,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img2,
                        name: 'Samson Frost',
                        price: '205.43 ETH'
                    },
                    {
                        img: img3,
                        name: 'Tommy Alvarez',
                        price: '170.3 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        price: '120.7 ETH'
                    },
                    {
                        img: img5,
                        name: 'Andy Hurlbutt',
                        price: '82.79 ETH'
                    },
                    {
                        img: img6,
                        name: 'Blake Banks',
                        price: '68.2 ETH'
                    },
                    {
                        img: img7,
                        name: 'Monica Lucas',
                        price: '52.8 ETH'
                    },
                    {
                        img: img8,
                        name: 'Matt Ramos',
                        price: '38.4 ETH'
                    },
                    {
                        img: img9,
                        name: 'Harper Wilcher',
                        price: '29.2 ETH'
                    },
                    {
                        img: img1,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img2,
                        name: 'Samson Frost',
                        price: '205.43 ETH'
                    },
                    {
                        img: img3,
                        name: 'Tommy Alvarez',
                        price: '170.3 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        price: '120.7 ETH'
                    },
                    {
                        img: img5,
                        name: 'Andy Hurlbutt',
                        price: '82.79 ETH'
                    },
                    {
                        img: img6,
                        name: 'Blake Banks',
                        price: '68.2 ETH'
                    },
                ]
            },
            {
                id: 2,
                dataTopSellerContent: [
                    {
                        img: img1,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img2,
                        name: 'Samson Frost',
                        price: '205.43 ETH'
                    },
                    {
                        img: img3,
                        name: 'Tommy Alvarez',
                        price: '170.3 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        price: '120.7 ETH'
                    },
                    {
                        img: img5,
                        name: 'Andy Hurlbutt',
                        price: '82.79 ETH'
                    },
                    {
                        img: img6,
                        name: 'Blake Banks',
                        price: '68.2 ETH'
                    },
                    {
                        img: img7,
                        name: 'Monica Lucas',
                        price: '52.8 ETH'
                    },
                    {
                        img: img8,
                        name: 'Matt Ramos',
                        price: '38.4 ETH'
                    },
                    {
                        img: img9,
                        name: 'Harper Wilcher',
                        price: '29.2 ETH'
                    },
                    {
                        img: img1,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img2,
                        name: 'Samson Frost',
                        price: '205.43 ETH'
                    },
                    {
                        img: img3,
                        name: 'Tommy Alvarez',
                        price: '170.3 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        price: '120.7 ETH'
                    },
                    {
                        img: img5,
                        name: 'Andy Hurlbutt',
                        price: '82.79 ETH'
                    },
                    {
                        img: img6,
                        name: 'Blake Banks',
                        price: '68.2 ETH'
                    },
                ]
            },
            {
                id: 3,
                dataTopSellerContent: [
                    {
                        img: img1,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img2,
                        name: 'Samson Frost',
                        price: '205.43 ETH'
                    },
                    {
                        img: img3,
                        name: 'Tommy Alvarez',
                        price: '170.3 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        price: '120.7 ETH'
                    },
                    {
                        img: img5,
                        name: 'Andy Hurlbutt',
                        price: '82.79 ETH'
                    },
                    {
                        img: img6,
                        name: 'Blake Banks',
                        price: '68.2 ETH'
                    },
                    {
                        img: img7,
                        name: 'Monica Lucas',
                        price: '52.8 ETH'
                    },
                    {
                        img: img8,
                        name: 'Matt Ramos',
                        price: '38.4 ETH'
                    },
                    {
                        img: img9,
                        name: 'Harper Wilcher',
                        price: '29.2 ETH'
                    },
                    {
                        img: img1,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img2,
                        name: 'Samson Frost',
                        price: '205.43 ETH'
                    },
                    {
                        img: img3,
                        name: 'Tommy Alvarez',
                        price: '170.3 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        price: '120.7 ETH'
                    },
                    {
                        img: img5,
                        name: 'Andy Hurlbutt',
                        price: '82.79 ETH'
                    },
                    {
                        img: img6,
                        name: 'Blake Banks',
                        price: '68.2 ETH'
                    },
                ]
            },
        ]
    )
    return (
        <div>
            <section className="tf-section top-seller home5 s2 ">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <h2 className="tf-title style2 mb-25 text-left">Top Sellers</h2>
                            <div className="flat-tabs seller-tab tablet-30">
                            <Tabs>
                                <TabList>
                                    {
                                        dataTopSellerTab.map((item,index) =>(
                                            <Tab key={index}>{item.title}</Tab>
                                        ))
                                    }
                                </TabList>

                                <div className="content-tab mg-t-24">
                                {
                                    dataTopSellerPanel.map((item) =>(
                                        <TabPanel key={item.id} >
                                            <Swiper
                                                modules={[Navigation,  Scrollbar, A11y ]}
                                                    spaceBetween={30}
                                                    breakpoints={{
                                                        0: {
                                                            slidesPerView: 2,
                                                        },
                                                        767: {
                                                        slidesPerView: 5,
                                                        },
                                                        1050: {
                                                            slidesPerView: 7,
                                                        },
                                                        1200: {
                                                            slidesPerView: 8,
                                                        },
                                                        1350: {
                                                        slidesPerView: 9,
                                                        },
                                                    }}
                                                    navigation
                                                    scrollbar={{ draggable: true }}>
                                                {
                                                    item.dataTopSellerContent.map((item,index) => (
                                                        <SwiperSlide key={index} >
                                                            <SliderItem item={item}  />
                                                        </SwiperSlide>
                                                    ))
                                                }

                                            </Swiper>
                                        </TabPanel>
                                    ))
                                }
                                </div>

                            </Tabs>
                            </div> 
                        </div>
                    </div>
                </div>     
            </section>
        </div>
    );
}
const SliderItem = props => (
    
    <div className="sc-author-box style-2">
        <div className="author-avatar">
                <img src={props.item.img} alt="Axies" className="avatar" />
            <div className="badge"></div>
        </div>
        <div className="author-infor">
            <h5><Link to="/author-02">{props.item.name}</Link></h5>
            <span className="price">{props.item.price}</span>
        </div>
    </div>    
)

export default TopSeller;
