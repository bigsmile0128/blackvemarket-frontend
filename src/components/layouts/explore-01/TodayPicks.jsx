import React , { useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const TodayPicks = props => {
    const data = props.data;

    const [visible , setVisible] = useState(8);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    return (
        <section className="tf-section sc-explore-1">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="wrap-box explore-1 flex mg-bt-40">
                            <div className="seclect-box style-1">
                                <div id="item_category" className="dropdown">
                                    <Link to="#" className="btn-selector nolink">All categories</Link>
                                    <ul >
                                        <li><span>Art</span></li>
                                        <li className="active"><span>Music</span></li>
                                        <li><span>Domain Names</span></li>
                                        <li><span>Virtual World</span></li>
                                        <li><span>Trading Cards</span></li>
                                        <li><span>Sports</span></li>
                                        <li><span>Utility</span></li>
                                    </ul>
                                </div>
                                <div id="buy" className="dropdown">
                                    <Link to="#" className="btn-selector nolink">Buy Now</Link>
                                    <ul >
                                        <li><span>On Auction</span></li>
                                        <li><span>Has Offers</span></li>
                                    </ul>
                                </div>
                                <div id="all-items" className="dropdown">
                                    <Link to="#" className="btn-selector nolink">All Items</Link>
                                    <ul >
                                        <li><span>Single Items</span></li>
                                        <li><span>Bundles</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="seclect-box style-2 box-right">
                                <div id="artworks" className="dropdown">
                                    <Link to="#" className="btn-selector nolink">All Artworks</Link>
                                    <ul >
                                        <li><span>Abstraction</span></li>
                                        <li><span>Skecthify</span></li>
                                        <li><span>Patternlicious</span></li>
                                        <li><span>Virtuland</span></li>
                                        <li><span>Papercut</span></li>
                                    </ul>
                                </div>
                                <div id="sort-by" className="dropdown">
                                    <Link to="#" className="btn-selector nolink">Sort by</Link>
                                    <ul >
                                        <li><span>Top rate</span></li>
                                        <li><span>Mid rate</span></li>
                                        <li><span>Low rate</span></li>
                                    </ul>
                                </div>    
                            </div>
                        </div>
                    </div>
                    {
                        data.slice(0,visible).map((item,index) => (
                            <TodayPicksItem key={index} item={item} />
                        ))
                    }
                    {
                        visible < data.length && 
                        <div className="col-md-12 wrap-inner load-more text-center"> 
                            <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}



TodayPicks.propTypes = {
    data: PropTypes.array.isRequired,
}

const TodayPicksItem = props => (
    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <div className={`sc-card-product ${props.item.feature ? 'comingsoon' : '' } `}>
            <div className="card-media">
                <Link to="/item-details-01"><img src={props.item.img} alt="axies" /></Link>
                <Link to="/login" className="wishlist-button heart"><span className="number-like">{props.item.wishlist}</span></Link>
                <div className="coming-soon">{props.item.feature}</div>
            </div>
            <div className="card-title">
                <h5 className="style2"><Link to="/item-details-01">"{props.item.title}"</Link></h5>
                <div className="tags">{props.item.tags}</div>
            </div>
            <div className="meta-info">
                <div className="author">
                    <div className="avatar">
                        <img src={props.item.imgAuthor} alt="axies" />
                    </div>
                    <div className="info">
                        <span>Owned By</span>
                        <h6> <Link to="/authors-02">{props.item.nameAuthor}</Link> </h6>
                    </div>
                </div>
                <div className="price">
                    <span>Current Bid</span>
                    <h5> {props.item.price}</h5>
                </div>
            </div>
            <div className="card-bottom">
                <Link to="/wallet-connect" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></Link>
                <Link to="/activity-01" className="view-history reload">View History</Link>
            </div>
        </div>
    </div>
)

export default TodayPicks;
