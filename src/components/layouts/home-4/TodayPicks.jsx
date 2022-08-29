import React , { useState } from 'react';
import PropTypes from 'prop-types'
import { Dropdown } from 'react-bootstrap';
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
                            <h2 className="tf-title pad-l-7">
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
        <div className={`sc-card-product menu_card style2 ${props.item.feature ? 'comingsoon' : '' } `}>
            <div className="meta-info style">
                <div className="author">
                    <div className="avatar">
                        <img src={props.item.imgCollection} alt="Axies" />
                    </div>
                    <div className="info">
                        <span>Collection</span>
                        <h6> <Link to="/author-02">{props.item.nameCollection}</Link> </h6>
                    </div>
                </div>
                <div className="menu_card">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            <i className="fas fa-ellipsis-h"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="#">
                            Refresh Metadata
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            Share
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            Report
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="card-media">
                <Link to="/item-details-01"><img src={props.item.img} alt="Axies" /></Link>
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
                        <img src={props.item.imgAuthor} alt="Axies" />
                    </div>
                    <div className="info">
                        <span>Owned By</span>
                        <h6> <Link to="/author-02">{props.item.nameAuthor}</Link> </h6>
                    </div>
                </div>
                <div className="price">
                    <span>Current Bid</span>
                    <h5>{props.item.price}</h5>
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
