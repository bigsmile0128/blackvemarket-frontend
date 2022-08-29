import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';

import imgfilter1 from '../../../assets/images/icon/menu.png'
import imgfilter2 from '../../../assets/images/icon/rainbow.png'
import imgfilter3 from '../../../assets/images/icon/photo.png'
import imgfilter4 from '../../../assets/images/icon/itunes.png'

import img1 from '../../../assets/images/box-item/image-box-46.jpg'
import imga1 from '../../../assets/images/avatar/avt-10.jpg'
import img2 from '../../../assets/images/box-item/image-box-37.jpg'
import imga2 from '../../../assets/images/avatar/avt-8.jpg'
import img3 from '../../../assets/images/box-item/image-box-38.jpg'
import imga3 from '../../../assets/images/avatar/avt-32.jpg'
import img4 from '../../../assets/images/box-item/image-box-39.jpg'
import imga4 from '../../../assets/images/avatar/avt-2.jpg'
import img5 from '../../../assets/images/box-item/image-box-40.jpg'
import imga5 from '../../../assets/images/avatar/avt-7.jpg'
import img6 from '../../../assets/images/box-item/image-box-41.jpg'
import imga6 from '../../../assets/images/avatar/avt-9.jpg'
import img7 from '../../../assets/images/box-item/image-box-42.jpg'
import imga7 from '../../../assets/images/avatar/avt-3.jpg'
import img8 from '../../../assets/images/box-item/image-box-43.jpg'
import imga8 from '../../../assets/images/avatar/avt-1.jpg'
import img9 from '../../../assets/images/box-item/image-box-44.jpg'
import imga9 from '../../../assets/images/avatar/avt-2.jpg'
import img10 from '../../../assets/images/box-item/image-box-45.jpg'
import imga10 from '../../../assets/images/avatar/avt-10.jpg'

const TodayPicks = () => {
    const [data] = useState(
        [
            {
                img: img1,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga1,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img2,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga2,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img3,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga3,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img4,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga4,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img5,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga5,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img6,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga6,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img7,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga7,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img8,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga8,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img9,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga9,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img10,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga10,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img1,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga1,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img2,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga2,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img3,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga3,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img4,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga4,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img5,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga5,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img6,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga6,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img7,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga7,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img8,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga8,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img9,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga9,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: img10,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: imga10,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },

        ]
    )

    const [visible , setVisible] = useState(10);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 5);
    }

    return (
        <section className="tf-section today-pick">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-live-auctions mg-bt-21">
                            <h2 className="tf-title">
                                Top Picks
                            </h2>
                            <Link to="/explore-03" className="exp style2">EXPLORE MORE</Link>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="tf-soft">
                        <div className="soft-left">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Category</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    <div className='sort-filter active'>
                                        <span><img src={imgfilter1} alt="" /> All</span>
                                        <i className="fal fa-check"></i>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <div className='sort-filter'>
                                        <span><img src={imgfilter2} alt="" /> Art</span>
                                        <i className="fal fa-check"></i>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <div className='sort-filter'>
                                        <span><img src={imgfilter3} alt="" /> Photography</span>
                                        <i className="fal fa-check"></i>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <div className='sort-filter'>
                                        <span><img src={imgfilter4} alt="" /> Music</span>
                                        <i className="fal fa-check"></i>
                                    </div>
                                </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 6V18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg> 
                                    <span>Price range</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    <div className='sort-filter'>
                                        <span>Price: Low to High</span>
                                        <i className="fal fa-check"></i>
                                    </div></Dropdown.Item>
                                <Dropdown.Item href="#"><div className='sort-filter'>
                                        <span>Price: High to Low</span>
                                        <i className="fal fa-check"></i>
                                    </div></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.0901 12.2799H6.1801V19.4799C6.1801 21.1599 7.0901 21.4999 8.2001 20.2399L15.7701 11.6399C16.7001 10.5899 16.3101 9.7199 14.9001 9.7199H11.8101V2.5199C11.8101 0.839898 10.9001 0.499897 9.7901 1.7599L2.2201 10.3599C1.3001 11.4199 1.6901 12.2799 3.0901 12.2799Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Sale type</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#"> Timed auction</Dropdown.Item>
                                <Dropdown.Item href="#">Fixed price</Dropdown.Item>
                                <Dropdown.Item href="#">Not for sale</Dropdown.Item>
                                <Dropdown.Item href="#">Open for offers</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.16992 7.44043L11.9999 12.5504L20.7699 7.47043" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 21.61V12.54" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9.92965 2.48028L4.58965 5.44028C3.37965 6.11028 2.38965 7.79028 2.38965 9.17028V14.8203C2.38965 16.2003 3.37965 17.8803 4.58965 18.5503L9.92965 21.5203C11.0696 22.1503 12.9396 22.1503 14.0796 21.5203L19.4196 18.5503C20.6296 17.8803 21.6196 16.2003 21.6196 14.8203V9.17028C21.6196 7.79028 20.6296 6.11028 19.4196 5.44028L14.0796 2.47028C12.9296 1.84028 11.0696 1.84028 9.92965 2.48028Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Blockchain</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#"> Ethereum</Dropdown.Item>
                                <Dropdown.Item href="#">Flow</Dropdown.Item>
                                <Dropdown.Item href="#">Tezos</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="soft-right">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 7H21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                        <path d="M6 12H18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                        <path d="M10 17H14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                    <span>Sort By: Recently Added</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    <h6>Sort by</h6>
                                    <Link className="sort-filter" to="#">
                                        <span>Recently added</span>
                                        <i className="fal fa-check"></i>
                                    </Link>
                                    <Link className="sort-filter active" to="#">
                                        <span>Price: Low to High</span>
                                        <i className="fal fa-check"></i>
                                    </Link>
                                    <Link className="sort-filter" to="#">
                                        <span>Price: High to Low</span>
                                        <i className="fal fa-check"></i>
                                    </Link>
                                    <Link className="sort-filter" to="#">
                                        <span>Auction ending soon</span>
                                        <i className="fal fa-check"></i>
                                    </Link>
                                    <h6>Options</h6>
                                    <Link className="sort-filter" to="#">
                                        <span>Auction ending soon</span>
                                        <input className="check" type="checkbox" value="checkbox" name="check" checked="" />
                                    </Link>
                                    <Link className="sort-filter" to="#">
                                        <span>Show lazy minted</span>
                                        <input className="check" type="checkbox" value="checkbox" name="check" />
                                    </Link>
                                </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                            
                        </div>
                    </div>
                    <div className='content-inner'>
                        {
                            data.slice(0,visible).map((item,index) => (
                                <TodayPicksItem key={index} item={item} />
                            ))
                        }
                    </div>
                    {
                        visible < data.length && 
                        <div className="col-md-12 wrap-inner load-more text-center"> 
                            <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3 mt-21" onClick={showMoreItems}><span>Load More</span></Link>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

const TodayPicksItem = props => (
    <div className={`sc-card-product menu_card style-h7 ${props.item.feature ? 'comingsoon' : '' } `}>
    <div className="meta-info style">
        <div className="author">
            <div className="avatar">
                <img src={props.item.imgAuthor} alt="Axies" />
            </div>
            <div className="info">
                <span>Creator</span>
                <h6> <Link to="/author-02">{props.item.nameAuthor}</Link> </h6>
            </div>
        </div>
        <Link to="/login" className="wishlist-button heart"><span className="number-like">{props.item.wishlist}</span></Link>
    </div>
    <div className="card-media">
        <Link to="/item-details-01"><img src={props.item.img} alt="Axies" /></Link>
    </div>
    <div className="card-title">
        <h5><Link to="/item-details-01">"{props.item.title}</Link></h5>
    </div>
    <div className="meta-info">
        <div className="author">
            <div className="info style2">
                <span>Current Bid</span>
                <span className="pricing">{props.item.price}</span>
            </div>
        </div>
        <div className="tags">{props.item.tags}</div>
    </div>
    <div className="card-bottom">
        <Link to="/wallet-connect" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></Link>
        <Link to="/activity-01" className="view-history reload">View History</Link>
    </div>
</div>
)

export default TodayPicks;
