import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TodayPicks from "../components/layouts/explore-01/TodayPicks";
import * as actions from "../store/actions/collectionActions";
import { BACKEND_URL } from "../assets/constants";
import CustomImage from "../components/layouts/CustomImage";

const Collection = () => {
  const { symbol } = useParams();
  const collection = useSelector((store) => store.collections.collection);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getCollection(symbol));
  }, [symbol]);

  return (
    <div>
      <Header />
      <section className="flat-title-page inner" style={{padding: '0px', height: '80px'}}>
          <div className="overlay"></div>
      </section>
      <section className="flat-title-page inner collection-title-page collection-detail-page pt-0">
        <div className="collection-overlay">
          <CustomImage src={BACKEND_URL + collection.bannerImg} alt="cover"/>
          <CustomImage src={BACKEND_URL + collection.logoImg} alt="logo" customClassName="collection-logo" />
        </div>
        <div className="themesflat-container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-heading mg-bt-12">
                        <h1 className="heading collection-heading text-center">{collection?.name} {collection?.minting?"(Minting)":""}</h1>
                    </div>
                    <div className="page-title-description">
                      <span>{collection?.description}</span>
                    </div>
                </div>
            </div>
        </div>
      </section>
      {collection && collection._id && <TodayPicks collection={collection} />}
      <Footer />
    </div>
  );
};

export default Collection;
