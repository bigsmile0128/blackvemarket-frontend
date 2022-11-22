import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import BVMCollections from "../components/layouts/BVMCollections";

const BVMCollectibles = () => {
  return (
    <div className="auctions">
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">BVM Studio</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Collections</Link>
                  </li>
                  <li>BVM Studios</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BVMCollections />
      <Footer />
    </div>
  );
};

export default BVMCollectibles;
