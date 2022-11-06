import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Explore from "../components/layouts/explore-04/Explore";
import widgetSidebarData from "../assets/fake-data/data-widget-sidebar";
import * as clt_actions from "../store/actions/createCltActions";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const NFTs = () => {
    const [sidebarData, setSidebarData] = useState([]);
    const collections = useSelector((store) => store.product.collections);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clt_actions.getClts());
    }, []);

    useEffect(() => {
        if ( collections && collections.length > 0 ) {
            const collectionList = [];
            for ( const collection of collections ) {
                collectionList.push({
                    field: collection.name,
                    _id: collection._id
                });
            }
            setSidebarData([
                {
                    id: 1,
                    title: "Status",
                    content: [
                        {
                            field: "Buy Now",
                            checked: "checked",
                        },
                        {
                            field: "On Auction",
                        },
                        {
                            field: "Not for sale",
                        },
                    ],
                },
                {
                    id: 2,
                    title: "Collections",
                    content: collectionList
                }
            ]);
        }
    }, [collections]);

  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">All NFTs</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>All NFTs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Explore data={sidebarData} />
      <Footer />
    </div>
  );
};

export default NFTs;
