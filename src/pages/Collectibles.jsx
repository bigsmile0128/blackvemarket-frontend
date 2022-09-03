import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import Collections from "../components/layouts/Collections";
import popularCollectionData from "../assets/fake-data/data-popular-collection";

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
                <h1 className="heading text-center">Colletions</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Explore</Link>
                  </li>
                  <li>Colletions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Collections data={popularCollectionData} />
      <Footer />
    </div>
  );
};

export default Collectibles;
