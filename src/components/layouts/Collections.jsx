import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import * as clt_actions from "../../store/actions/createCltActions";
import { BACKEND_URL } from "../../assets/constants";

const Collections = () => {
  const collections = useSelector((store) => store.product.collections);
  const dispatch = useDispatch();
  console.log("Here is render");
  const data = collections;
  const [visible, setVisible] = useState(8);

  useEffect(() => {
    console.log("Here is useEffect");
    dispatch(clt_actions.getClts());
  }, []);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  return (
    <section className="tf-section live-auctions">
      <div className="themesflat-container">
        <div className="col-md-12">
          <h2 className="tf-title style-1 ct">Collections</h2>
        </div>

        <div className="collection">
          <div className="row">
            {data.length == 0 ? (
              <h1>No Collections on Marketplace</h1>
            ) : (
              data.slice(0, visible).map((item, index) => (
                <div className="col-xl-3 col-lg-3 col-md-6" key={index}>
                  <SwiperSlide>
                    <PopularCollectionItem item={item} />
                  </SwiperSlide>
                </div>
              ))
            )}

            {visible < data.length && (
              <div className="col-md-12 wrap-inner load-more text-center">
                <Link
                  to="#"
                  id="load-more"
                  className="sc-button loadmore fl-button pri-3"
                  onClick={showMoreItems}
                >
                  <span>Load More</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
Collections.propTypes = {
  data: PropTypes.array.isRequired,
};

const PopularCollectionItem = (props) => (
  <div className="swiper-container show-shadow carousel4 button-arow-style">
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div className="slider-item">
          <div className="sc-card-collection style-2 home2 fill-height-or-more">
            <Link to="/authors-02">
              <div className="media-images-collection">
                <img src={BACKEND_URL + props.item.featureImg} />
              </div>
            </Link>
            <div className="card-bottom flex-grow-1">
              <div className="author">
                <div className="sc-author-box style-2">
                  <div className="author-avatar">
                    <img
                      src={BACKEND_URL + props.item.logoImg}
                      alt=""
                      className="avatar"
                    />
                    <div className="badge">
                      <i className="ripple"></i>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h4>
                    <Link to="/authors-01">
                      {props.item.name.length > 25
                        ? props.item.name.substring(0, 25) + "..."
                        : props.item.name}
                    </Link>
                  </h4>
                  {/* <div className="infor">
                    <span>Created by</span>
                    <span className="name">
                      <Link to="/authors-02">
                        {props.item.name.substring(0, 25) + "..."}
                      </Link>
                    </span>
                  </div> */}
                </div>
              </div>
              {/* <Link to="/login" className="wishlist-button public heart">
                <span className="number-like"> 100</span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Collections;
