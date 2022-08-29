import React , { useState } from 'react';
import { Link } from 'react-router-dom'

const ExploreItem = props => {
    const data = props.data

    const [visible , setVisible] = useState(6);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 6);
    }
    return (
        <div className='explore'>
            <div className="box-epxlore">
                {
                    data.slice(0,visible).map((item,index) => (
                        <div className={`sc-card-product explode style2 mg-bt ${item.feature ? 'comingsoon' : '' } `} key={index}>
                        <div className="card-media">
                            <Link to="/item-details-01"><img src={item.img} alt="Axies" /></Link>
                            <div className="button-place-bid">
                                <Link to="/wallet-connect" className="sc-button style-place-bid style bag fl-button pri-3"><span>Place Bid</span></Link>
                            </div>
                            <Link to="/login" className="wishlist-button heart"><span className="number-like">{item.wishlist}</span></Link>
                            <div className="coming-soon">{item.feature}</div>
                        </div>
                        <div className="card-title">
                            <h5><Link to="/item-details-01">"{item.title}"</Link></h5>
                        </div>
                        <div className="meta-info">
                            <div className="author">
                                <div className="avatar">
                                    <img src={item.imgAuthor} alt="Axies" />
                                </div>
                                <div className="info">
                                    <span>Creator</span>
                                    <h6> <Link to="/author-02">{item.nameAuthor}</Link> </h6>
                                </div>
                            </div>
                            <div className="tags">{item.tags}</div>
                        </div>
                        <div className="card-bottom style-explode">
                            <div className="price">
                                <span>Price</span>
                                <div className="price-details">
                                    <h5>{item.price}</h5>
                                    <span>= {item.priceChange}</span>
                                </div>
                            </div>
                            <Link to="/activity-01" className="view-history reload">View History</Link>
                        </div>
                    </div>
                    ))
                }
            </div>
            {
                visible < data.length && 
                <div className="btn-auction center"> 
                    <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                </div>
            }
        </div>
    );
}

export default ExploreItem;
