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
        <section className="tf-section today-pick">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-live-auctions mg-bt-21">
                            <h2 className="tf-title pb-18">
                                Today's Picks
                            </h2>
                            <Link to="/explore-03" className="exp style2">EXPLORE MORE</Link>
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
        <div className={`sc-card-product explode style2 mg-bt ${props.item.feature ? 'comingsoon' : '' } `}>                               
            <div className="card-media">
                <Link to="/item-details-01"><img src={props.item.img} alt="Axies" /></Link>
                <div className="button-place-bid">
                    <Link to="/wallet-connect" className="sc-button style-place-bid style bag fl-button pri-3"><span>Place Bid</span></Link>
                </div>
                <Link to="/login" className="wishlist-button heart"><span className="number-like">{props.item.wishlist}</span></Link>
                <div className="coming-soon">{props.item.feature}</div>
            </div>
            <div className="card-title">
                <h5><Link to="/item-details-01">"{props.item.title}"</Link></h5>
            </div>
            <div className="meta-info">
                <div className="author">
                    <div className="avatar">
                        <img src={props.item.imgAuthor} alt="Axies" />
                    </div>
                    <div className="info">
                        <span>Creator</span>
                        <h6> <Link to="/authors-02">{props.item.nameAuthor}</Link> </h6>
                    </div>
                </div>
                <div className="tags">{props.item.tags}</div>
            </div>
            <div className="card-bottom style-explode">
                <div className="price">
                    <span>Current Bid</span>
                    <div className="price-details">
                        <h5>{props.item.price}</h5>
                        <span>= {props.item.priceChange}</span>
                    </div>
                </div>
                <Link to="/activity-01" className="view-history reload">View History</Link>
            </div>
        </div>  
    </div>
)

export default TodayPicks;
