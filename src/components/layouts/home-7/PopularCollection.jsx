import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import imgTop1 from '../../../assets/images/box-item/collection-item-17.jpg'
import img1Bottom1 from '../../../assets/images/box-item/collection-item-18.jpg'
import img1Bottom2 from '../../../assets/images/box-item/collection-item-19.jpg'
import img1Bottom3 from '../../../assets/images/box-item/collection-item-20.jpg'
import imgAuthor1 from '../../../assets/images/avatar/avt-7.jpg'
import imgTop2 from '../../../assets/images/box-item/collection-item-21.jpg'
import img2Bottom1 from '../../../assets/images/box-item/collection-item-22.jpg'
import img2Bottom2 from '../../../assets/images/box-item/collection-item-23.jpg'
import img2Bottom3 from '../../../assets/images/box-item/collection-item-24.jpg'
import imgAuthor2 from '../../../assets/images/avatar/avt-10.jpg'
import imgTop3 from '../../../assets/images/box-item/collection-item-25.jpg'
import imgAuthor3 from '../../../assets/images/avatar/avt-3.jpg'

const PopularCollection = () => {
    const [data] = useState(
        [
            {
                imgTop: imgTop1,
                imgBottom1: img1Bottom1,
                imgBottom2: img1Bottom2,
                imgBottom3: img1Bottom3,
                imgAuthor: imgAuthor1,
                title: 'Colorful Abstract',
                name: 'Mason Woodward',
                wishlist: '100'
            },
            {
                imgTop: imgTop2,
                imgBottom1: img2Bottom1,
                imgBottom2: img2Bottom2,
                imgBottom3: img2Bottom3,
                imgAuthor: imgAuthor2,
                title: 'Colorful Abstract',
                name: 'Mason Woodward',
                wishlist: '100'
            },
            {
                imgTop: imgTop3,
                imgBottom1: img1Bottom1,
                imgBottom2: img1Bottom2,
                imgBottom3: img1Bottom3,
                imgAuthor: imgAuthor3,
                title: 'Colorful Abstract',
                name: 'Mason Woodward',
                wishlist: '100'
            },
            {
                imgTop: imgTop1,
                imgBottom1: img1Bottom1,
                imgBottom2: img1Bottom2,
                imgBottom3: img1Bottom3,
                imgAuthor: imgAuthor1,
                title: 'Colorful Abstract',
                name: 'Mason Woodward',
                wishlist: '100'
            },
            {
                imgTop: imgTop2,
                imgBottom1: img2Bottom1,
                imgBottom2: img2Bottom2,
                imgBottom3: img2Bottom3,
                imgAuthor: imgAuthor2,
                title: 'Colorful Abstract',
                name: 'Mason Woodward',
                wishlist: '100'
            },
            {
                imgTop: imgTop3,
                imgBottom1: img1Bottom1,
                imgBottom2: img1Bottom2,
                imgBottom3: img1Bottom3,
                imgAuthor: imgAuthor3,
                title: 'Colorful Abstract',
                name: 'Mason Woodward',
                wishlist: '100'
            },
        ]
    )

    const [visible , setVisible] = useState(3);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }
    return (
        <section className="tf-section live-auctions style4 home4 live-auctions-style7">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-box-12">
                        <div className="heading-live-auctions">
                            <h2 className="tf-title pb-40 text-left">
                                Popular Collection</h2>
                            <Link to="/explore-03" className="exp style2 mg-t-23">EXPLORE MORE</Link>
                        </div>
                    </div>
                    {
                        data.slice(0,visible).map((item,index) =>(
                            <div key={index} className="fl-collection fl-item3 col-xl-4 col-md-6">
                                <div className="sc-card-collection style-2 sc-card-style7">
                                    <div className="card-media-h7">
                                        <img src={item.imgTop} alt="Axies" />
                                    </div>
                                    <div className="card-media-h7 style2">
                                        <img src={item.imgBottom1} alt="Axies" />
                                        <img src={item.imgBottom2} alt="Axies" />
                                        <img src={item.imgBottom3} alt="Axies" />
                                    </div>
                                    <div className="card-bottom">
                                        <div className="author">
                                            <div className="content">
                                                <h5><Link to="/authors-01">{item.title}</Link></h5>
                                                <div className="infor">
                                                    <span>Created by</span>
                                                    <span className="name"><Link to="/author-02">{item.name}</Link></span>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to="/login" className="wishlist-button public heart mg-t-6"><span className="number-like">{item.wishlist}</span></Link>
                                    </div>
                                    <div className="sc-author-box style-2">
                                        <div className="author-avatar">
                                            <img src={item.imgAuthor} alt="Axies" className="avatar" />
                                            <div className="badge"><i className="ripple"></i></div>
                                        </div>
                                    </div>
                                </div> 	
                            </div>
                        ))
                    }
                    {
                        visible < data.length && 
                        <div className="col-md-12 wrap-inner load-more text-center mt-10"> 
                            <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                        </div>
                    }
                </div>
            </div>
    </section>
    );
}


export default PopularCollection;
