import React from 'react';
import { Link } from 'react-router-dom'


const TopSeller = props => {
    const data = props.data;
    return (
        <section className="tf-section top-seller">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-live-auctions">
                            <h2 className="tf-title mb-25">
                                Top Seller</h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="tf-box">
                            {
                                data.slice(0,10).map((item,index) => (
                                    <TopSellerItem key={index} item={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const TopSellerItem = props => (
    <div className={`box-item ${props.item.classPadding}`}>
        <div className="sc-author-box style-3 pd-0">
            <div className="author-avatar">
                <Link to="/authors-02">
                    <img src={props.item.img} alt="axies" className="avatar" />
                </Link>
                <div className="badge"><i className="ripple"></i></div>
            </div>
            <div className="author-infor">
                <h5 className="fs-16"><Link to="/authors-02">{props.item.name}</Link></h5>
                <span className="price">{props.item.price}</span>
            </div>
        </div>
    </div>  
)

export default TopSeller;
