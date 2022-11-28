import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NNICollections from "../components/layouts/NNICollections";

const NNICollectibles = () => {
  return (
    <div className="auctions">
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">No Nerds Inc</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Collections</Link>
                  </li>
                  <li>No Nerds Inc</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NNICollections />
      <Footer />
    </div>
  );
};

export default NNICollectibles;
