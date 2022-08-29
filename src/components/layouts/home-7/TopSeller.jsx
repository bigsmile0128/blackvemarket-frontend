import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from '../../../assets/images/avatar/avt-31.jpg'
import img2 from '../../../assets/images/avatar/avata_profile.jpg'
import img3 from '../../../assets/images/avatar/avt-4.jpg'
import img4 from '../../../assets/images/avatar/avt-3.jpg'
import img5 from '../../../assets/images/avatar/avt-5.jpg'
import img6 from '../../../assets/images/avatar/avt-8.jpg'
import img7 from '../../../assets/images/avatar/avt-6.jpg'
import img8 from '../../../assets/images/avatar/avt-9.jpg'
import img9 from '../../../assets/images/avatar/avt-7.jpg'
import img10 from '../../../assets/images/avatar/avt-10.jpg'
import img11 from '../../../assets/images/avatar/avt-32.jpg'
import img12 from '../../../assets/images/avatar/avt-33.jpg'

const TopSeller = () => {
    const [dataTopSellerTab] = useState(
        [
            {
                title: '24 Hours',
            },
            {
                title: 'Week',
            },
            {
                title: 'Month',
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
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '1',
                        price: '120.7 ETH'
                    },
                    {
                        img: img2,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '4',
                        price: '120.7 ETH'
                    },
                    {
                        img: img3,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '7',
                        price: '120.7 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '10',
                        price: '120.7 ETH'
                    },
                    {
                        img: img5,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '2',
                        price: '120.7 ETH'
                    },
                    {
                        img: img6,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '5',
                        price: '120.7 ETH'
                    },
                    {
                        img: img7,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '8',
                        price: '120.7 ETH'
                    },
                    {
                        img: img8,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '11',
                        price: '120.7 ETH'
                    },
                    {
                        img: img9,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '3',
                        price: '120.7 ETH'
                    },
                    {
                        img: img10,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '6',
                        price: '120.7 ETH'
                    },
                    {
                        img: img11,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '9',
                        price: '120.7 ETH'
                    },
                    {
                        img: img12,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '12',
                        price: '120.7 ETH'
                    },
                ]
            },
            {
                id: 2,
                dataTopSellerContent: [
                    {
                        img: img1,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '1',
                        price: '120.7 ETH'
                    },
                    {
                        img: img2,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '3',
                        price: '120.7 ETH'
                    },
                    {
                        img: img3,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '5',
                        price: '120.7 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '7',
                        price: '120.7 ETH'
                    },
                    {
                        img: img5,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '2',
                        price: '120.7 ETH'
                    },
                    {
                        img: img6,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '4',
                        price: '120.7 ETH'
                    },
                    {
                        img: img7,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '6',
                        price: '120.7 ETH'
                    },
                    {
                        img: img8,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '8',
                        price: '120.7 ETH'
                    },
                    
                ]
            },
            {
                id: 3,
                dataTopSellerContent: [
                    {
                        img: img1,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '1',
                        price: '120.7 ETH'
                    },
                    {
                        img: img2,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '4',
                        price: '120.7 ETH'
                    },
                    {
                        img: img3,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '7',
                        price: '120.7 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '10',
                        price: '120.7 ETH'
                    },
                    {
                        img: img5,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '2',
                        price: '120.7 ETH'
                    },
                    {
                        img: img6,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '5',
                        price: '120.7 ETH'
                    },
                    {
                        img: img7,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '8',
                        price: '120.7 ETH'
                    },
                    {
                        img: img8,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '11',
                        price: '120.7 ETH'
                    },
                    {
                        img: img9,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '3',
                        price: '120.7 ETH'
                    },
                    {
                        img: img10,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '6',
                        price: '120.7 ETH'
                    },
                    {
                        img: img11,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '9',
                        price: '120.7 ETH'
                    },
                    {
                        img: img12,
                        name: 'Windsor Lane',
                        mail: '@windsorlandhh',
                        top: '12',
                        price: '120.7 ETH'
                    },
                ]
            },
        ]
    )
    return (
        <div>
            <section className="tf-section top-seller home5 bg-style">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="heading-live-auctions">
                                <h2 className="tf-title pb-16">
                                    Top Seller</h2>
                                <a href="/explore-03" className="exp style2 see-all">SEE ALL</a>
                            </div>
                            <div className="flat-tabs seller-tab">
                            <Tabs>
                                <TabList>
                                    {
                                        dataTopSellerTab.map((item,index) =>(
                                            <Tab key={index} >{item.title}</Tab>
                                        ))
                                    }
                                </TabList>

                                <div className="content-tab mg-t-24">
                                {
                                    dataTopSellerPanel.map((item) =>(
                                        <TabPanel key={item.id} >
                                            {
                                                item.dataTopSellerContent.map((item,index) => (
                                                    <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                                                        <div className="box-item">
                                                            <div className="sc-author-box style-3">
                                                            <div className="author-style2 flex">
                                                                <div className="author-avatar">
                                                                    <Link to="#">
                                                                        <img src={item.img} alt="Axies" className="avatar" />
                                                                    </Link>
                                                                    <div className="badge"><i className="ripple"></i></div>
                                                                </div>
                                                                <div className="author-infor">
                                                                    <h5><Link to="#">{item.name}</Link></h5>
                                                                    <div className="tag">{item.mail}</div>
                                                                    <span className="price">{item.price}</span>
                                                                </div>
                                                            </div>
                                                            <div className="action">
                                                                <div className="number">#{item.top}</div>
                                                                <div className="btn-follow">
                                                                    <Link to="/login">Follow</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div> 
                                                    </div>
                                                ))
                                            }
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

export default TopSeller;
