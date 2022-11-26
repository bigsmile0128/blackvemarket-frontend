import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Collections from "../components/layouts/Collections";

const Collectibles = () => {
  return (
    <div className="auctions">
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Collections</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Collections</Link>
                  </li>
                  <li>All Collections</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Collections />
      <Footer />
    </div>
  );
};

export default Collectibles;
