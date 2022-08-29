import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import avt from '../assets/images/avatar/avt-author-tab.jpg'
import img1 from '../assets/images/box-item/card-item-3.jpg'
import imga1 from '../assets/images/avatar/avt-1.jpg'
import imgCollection1 from '../assets/images/avatar/avt-18.jpg'
import img2 from '../assets/images/box-item/card-item-4.jpg'
import imga2 from '../assets/images/avatar/avt-2.jpg'
import imgCollection2 from '../assets/images/avatar/avt-18.jpg'
import img3 from '../assets/images/box-item/card-item-2.jpg'
import imga3 from '../assets/images/avatar/avt-4.jpg'
import imgCollection3 from '../assets/images/avatar/avt-18.jpg'
import img4 from '../assets/images/box-item/card-item-7.jpg'
import imga4 from '../assets/images/avatar/avt-3.jpg'
import imgCollection4 from '../assets/images/avatar/avt-18.jpg'
import img5 from '../assets/images/box-item/card-item8.jpg'
import imga5 from '../assets/images/avatar/avt-12.jpg'
import imgCollection5 from '../assets/images/avatar/avt-18.jpg'
import img6 from '../assets/images/box-item/card-item-9.jpg'
import imga6 from '../assets/images/avatar/avt-1.jpg'
import imgCollection6 from '../assets/images/avatar/avt-18.jpg'
import img7 from '../assets/images/box-item/image-box-6.jpg'
import imga7 from '../assets/images/avatar/avt-4.jpg'
import imgCollection7 from '../assets/images/avatar/avt-18.jpg'
import img8 from '../assets/images/box-item/image-box-11.jpg'
import imga8 from '../assets/images/avatar/avt-3.jpg'
import imgCollection8 from '../assets/images/avatar/avt-18.jpg'


const Authors02 = () => {
    const [menuTab] = useState(
        [
            {
                class: 'active',
                name: 'ALL'
            },
            {
                class: '',
                name: 'ART'
            },
            {
                class: '',
                name: 'MUSIC'
            },
            {
                class: '',
                name: 'COLLECTIBLES'
            },
            {
                class: '',
                name: 'SPORTS'
            },
        ]
    )
    const [panelTab] = useState(
        [
            {
                id: 1,
                dataContent: [
                    {
                        img: img1,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection1,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img2,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection2,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img3,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection3,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img4,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection4,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img5,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection5,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img6,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga6,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection6,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img7,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga7,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection7,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img8,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga8,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection8,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img1,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection1,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img2,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection2,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img3,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection3,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img4,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection4,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img5,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection5,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img6,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga6,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection6,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img7,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga7,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection7,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        img: img8,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga8,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection8,
                        nameCollection: "Creative Art 3D"
                    },
                ]
            },
            {
                id: 2,
                dataContent: [
                    {
                        id: 2,
                        img: img2,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection2,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 3,
                        img: img3,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection3,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 4,
                        img: img4,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection4,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 5,
                        img: img5,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection5,
                        nameCollection: "Creative Art 3D"
                    },
                ]
            },
            {
                id: 3,
                dataContent: [
                    {
                        id: 1,
                        img: img1,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection1,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 3,
                        img: img3,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection3,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 4,
                        img: img4,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection4,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 5,
                        img: img5,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection5,
                        nameCollection: "Creative Art 3D"
                    },
                ]
            },
            {
                id: 4,
                dataContent: [
                    {
                        id: 1,
                        img: img1,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection1,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 2,
                        img: img2,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection2,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 3,
                        img: img3,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection3,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 5,
                        img: img5,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection5,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 7,
                        img: img7,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga7,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection7,
                        nameCollection: "Creative Art 3D"
                    },
                ]
            },
            {
                id: 5,
                dataContent: [
                    {
                        id: 2,
                        img: img2,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection2,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 3,
                        img: img3,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection3,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 4,
                        img: img4,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection4,
                        nameCollection: "Creative Art 3D"
                    },
                    {
                        id: 6,
                        img: img5,
                        title: "The RenaiXance Rising the sun ",
                        tags: "bsc",
                        imgAuthor: imga6,
                        nameAuthor: "SalvadorDali",
                        price: "4.89 ETH",
                        priceChange: "$12.246",
                        wishlist: "100",
                        imgCollection: imgCollection6,
                        nameCollection: "Creative Art 3D"
                    },
                ]
            },
        ]
    )

    const [visible , setVisible] = useState(8);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    return (
        <div className='authors-2'>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Author</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>Author</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-section authors">
                <div className="themesflat-container">
                    <div className="flat-tabs tab-authors">
                        <div className="author-profile flex">
                            <div className="feature-profile">
                                <img src={avt} alt="Axies" className="avatar" />
                            </div>
                            <div className="infor-profile">
                                <span>Author Profile</span>
                                <h2 className="title">Trista Francis</h2>
                                <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                                <form>
                                    <input type="text" className="inputcopy" defaultValue="DdzFFzCqrhshMSxABCdfrge" readOnly />
                                    <button type="button" className="btn-copycode"><i className="icon-fl-file-1"></i></button>
                                </form>
                            </div>
                            <div className="widget-social style-3">
                               <ul>
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li className="style-2"><Link to="#"><i className="fab fa-telegram-plane"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                                    <li className="mgr-none"><Link to="#"><i className="icon-fl-tik-tok-2"></i></Link></li>
                                </ul>
                                <div className="btn-profile"><Link to="/login" className="sc-button style-1 follow">Follow</Link></div>
                            </div>
                        </div>
                        <Tabs>
                            <TabList>
                                {
                                    menuTab.map((item,index) => (
                                        <Tab key={index}>{item.name}</Tab>
                                    ))
                                }
                            </TabList>

                            <div className="content-tab">
                                <div className="content-inner">
                                    <div className="row">
                                    {
                                        panelTab.map((item, index) => (
                                            <TabPanel key={index}>
                                                {
                                                    item.dataContent.slice(0,visible).map((data,index) => (
                                                        <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-12">
                                                            <div className="sc-card-product explode ">
                                                                <div className="card-media">
                                                                    <Link to="/item-details-01"><img src={data.img} alt="Axies" /></Link>
                                                                    <div className="button-place-bid ">
                                                                        <Link to="/wallet-connect" className="sc-button style-place-bid style bag fl-button pri-3"><span>Place Bid</span></Link>
                                                                    </div>
                                                                    <Link to="/login" className="wishlist-button heart"><span className="number-like"> {data.wishlist}</span></Link>
                                                                </div>
                                                                <div className="card-title mg-bt-16">
                                                                    <h5><Link to="/item-details-01">"{data.title}"</Link></h5>
                                                                </div>
                                                                <div className="meta-info">
                                                                    <div className="author">
                                                                        <div className="avatar">
                                                                            <img src={data.imgAuthor} alt="Axies" />
                                                                        </div>
                                                                        <div className="info">
                                                                            <span>Creator</span>
                                                                            <h6> <Link to="/author-02">{data.nameAuthor}</Link> </h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tags">{data.tags}</div>
                                                                </div>
                                                                <div className="card-bottom style-explode">
                                                                    <div className="price">
                                                                        <span>Current Bid</span>
                                                                        <div className="price-details">
                                                                            <h5>{data.price}</h5>
                                                                            <span>= {data.priceChange}</span>
                                                                        </div>
                                                                    </div>
                                                                    <Link to="/activity-01" className="view-history reload">View History</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                                {
                                                    visible < item.dataContent.length && 
                                                    <div className="col-md-12 wrap-inner load-more text-center"> 
                                                        <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                                                    </div>
                                                }
                                            </TabPanel>
                                        ))
                                    }
                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Authors02;
