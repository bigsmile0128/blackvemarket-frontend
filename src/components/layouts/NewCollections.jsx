import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";

import * as clt_actions from "../../store/actions/collectionActions";
import { BACKEND_URL } from "../../assets/constants";

const Collections = () => {
  const collections = useSelector((store) => store.collections.collections);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const collection_list = ['concrete_jungles_buildings', 'concrete_jungles_plots', 'banana_crack', 'puraties', 'doodle_thugs'];

  useEffect(() => {
    dispatch(clt_actions.getClts());
  }, []);

  useEffect(() => {
    if ( collections && collections.length > 0 ) {
        const _data = [];
        for ( const collection of collections ) {
            if ( collection_list.indexOf(collection.col_name) >= 0 ) {
                _data.push(collection);
            }
        }
        setData(_data);
    }
  }, [collections]);

  return (
    <section className="tf-section collections">
        <div className="themesflat-container">
            <div className="row">
                <div className="col-md-12">
                    <div className="heading-live-auctions mg-bt-21">
                        <h2 className="tf-title pad-l-7">
                        New Collections
                        </h2>
                        <Link to="/collections" className="exp style2">EXPLORE MORE</Link>
                    </div>
                </div>
                {data.length == 0 ? (
                <h1></h1>
                ) : (
                data.map((item, index) => (
                    <div className="col-xl-3 col-lg-3 col-md-6" key={index}>
                        <SwiperSlide>
                            <PopularCollectionItem item={item} />
                        </SwiperSlide>
                    </div>
                ))
                )}
            </div>
        </div>
    </section>
  );
};

const PopularCollectionItem = (props) => (
  <div className="swiper-container show-shadow carousel4 button-arow-style">
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div className="slider-item">
          <div className="sc-card-collection style-2 home2 fill-height-or-more">
            <Link to={`/collection/${props.item.symbol}`}>
              <div className="media-images-collection">
                <img src={BACKEND_URL + props.item.featureImg} alt="feature" />
              </div>
            </Link>
            <div className="card-bottom flex-grow-1">
              <div className="author">
                <div className="sc-author-box style-2">
                  <div className="author-avatar">
                    <img
                      src={BACKEND_URL + props.item.logoImg}
                      alt=""
                      className="avatar collection-avatar"
                    />
                    <div className="badge collection-badge">
                      <i className="ripple"></i>
                    </div>
                  </div>
                </div>
                <div className="content collection-title">
                  <h4>
                    <Link to={`/collection/${props.item.symbol}`}>
                      {props.item.name.length > 25
                        ? props.item.name.substring(0, 25) + "..."
                        : props.item.name}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Collections;
