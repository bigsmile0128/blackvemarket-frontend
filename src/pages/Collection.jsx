import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TodayPicks from "../components/layouts/explore-01/TodayPicks";
import todayPickData from "../assets/fake-data/data-today-pick";
import * as actions from "../store/actions/collectionActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND_URL } from "../assets/constants";

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
      <section className="flat-title-page inner collection-title-page">
        <div className="collection-overlay">
          <img src={BACKEND_URL + collection.bannerImg} alt="cover"/>
          <img
            src={BACKEND_URL + collection.logoImg}
            className="collection-logo"
            alt="logo"
          />
        </div>
        <div className="themesflat-container" style={{ paddingTop: "20px" }}>
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">{collection.name}</h1>
              </div>
              <div className="page-title-description">
                <span>{collection.description}</span>
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
