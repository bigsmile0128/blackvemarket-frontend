import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from '../../../assets/images/avatar/avt-1.jpg'
import img2 from '../../../assets/images/avatar/avt-2.jpg'
import img3 from '../../../assets/images/avatar/avt-3.jpg'
import img4 from '../../../assets/images/avatar/avt-4.jpg'

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
                        img: img1,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img2,
                        name: 'Monica Lucas',
                        price: '214.2 ETH'
                    },
                    {
                        img: img2,
                        name: 'Monica Lucas',
                        price: '214.2 ETH'
                    },
                    {
                        img: img3,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img3,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        price: '214.2 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        price: '214.2 ETH'
                    },
                ]
            },
            {
                id: 2,
                dataTopSellerContent: [
                    {
                        img: img2,
                        name: 'Monica Lucas',
                        price: '214.2 ETH'
                    },
                    {
                        img: img2,
                        name: 'Monica Lucas',
                        price: '214.2 ETH'
                    },
                    {
                        img: img3,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img3,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        price: '214.2 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        price: '214.2 ETH'
                    },
                ]
            },
            {
                id: 3,
                dataTopSellerContent: [
                    {
                        img: img3,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img3,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        price: '214.2 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        price: '214.2 ETH'
                    },
                ]
            },
        ]
    )
    return (
        <div>
            <section className="tf-section top-seller home5 s2 mobie-style bg-style2">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12">
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

                                <div className="content-tab">
                                {
                                    dataTopSellerPanel.map((item) =>(
                                        <TabPanel key={item.id} >
                                            {
                                                item.dataTopSellerContent.map((item,index) => (
                                                    <div className="box-item" key={index}>
                                                    <div className="sc-author-box style-3">
                                                        <div className="author-avatar">
                                                            <Link to="/authors-02">
                                                                <img src={item.img} alt="Axies" className="avatar" />
                                                            </Link>
                                                            <div className="badge"><i className="ripple"></i></div>
                                                        </div>
                                                        <div className="author-infor">
                                                            <h5><Link to="/authors-02">{item.name}</Link></h5>
                                                            <span className="price">{item.price}</span>
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
                        <div className="col-xl-6 col-lg-12">
                            <h2 className="tf-title style2 mb-25 text-left">Top Buyers</h2>
                            <div className="flat-tabs seller-tab tablet-30">
                            <Tabs>
                                <TabList>
                                    {
                                        dataTopSellerTab.map((item,index) =>(
                                            <Tab key={index}>{item.title}</Tab>
                                        ))
                                    }
                                </TabList>

                                <div className="content-tab">
                                {
                                    dataTopSellerPanel.map((item) =>(
                                        <TabPanel key={item.id} >
                                            {
                                                item.dataTopSellerContent.map((item,index) => (
                                                    <div className="box-item" key={index}>
                                                    <div className="sc-author-box style-3">
                                                        <div className="author-avatar">
                                                            <Link to="#">
                                                                <img src={item.img} alt="Axies" className="avatar" />
                                                            </Link>
                                                            <div className="badge"><i className="ripple"></i></div>
                                                        </div>
                                                        <div className="author-infor">
                                                            <h5><Link to="#">{item.name}</Link></h5>
                                                            <span className="price">{item.price}</span>
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
