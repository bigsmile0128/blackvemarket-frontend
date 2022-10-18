import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/createItActions";
import Connex from "@vechain/connex";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img1 from "../assets/images/box-item/image-box-6.jpg";
import avt from "../assets/images/avatar/avt-9.jpg";
const vendor = new Connex.Vendor("test");

const ListItem = () => {
  const dispatch = useDispatch();
  const walletaddr = useSelector(
    (store) => store.profile.profileInfo.user_wallet_address
  );

  const [dropdownState, setDropdownState] = useState(false);
  const [abstraction, setAbstraction] = useState("");
  const [formData, setFormData] = useState({
    price: "",
    title: "",
    description: "",
    royalties: "",
    size: "",
    abstract: "",
    nft: "",
  });
  const [url, setUrl] = useState(null);

  const data = [
    { id: 0, label: "0x30Ed948178D39bA2d9cdC964878d8cE7A2d8E8B3" },
    { id: 1, label: "0x4448bF43F6D41296327D7fc40c9b77D107149976" },
  ];

  const changeDataState = (item) => {
    setDropdownState(false);
    setFormData({ ...formData, abstract: item.label });
    const firststr = item.label.slice(0, 6);
    const laststr = item.label.slice(-4);
    const marketplace = firststr.concat("...", laststr);
    setAbstraction(marketplace);
  };

  const changeValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createbutton1 = () => {
    console.log("formData:", formData);
    if (walletaddr) {
      dispatch(actions.createFixedItem(formData));
    } else {
      alert("Please Connect Wallet!");
      return false;
    }
  };

  return (
    <div className="create-item">
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">List Item</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
                  <li>List Item</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-create-item tf-section">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-12">
              <h4 className="title-create-item">Preview item</h4>
              <div className="sc-card-product">
                <div className="card-media c-img-area-2">
                  <Link to="/item-details-01">
                    <img src={url ? url : img1} alt="Axies" />
                  </Link>
                  <Link to="/login" className="wishlist-button heart">
                    <span className="number-like"> 100</span>
                  </Link>
                  <div className="featured-countdown">
                    <span className="slogan"></span>
                    <Countdown date={Date.now() + 500000000}>
                      <span>You are good to go!</span>
                    </Countdown>
                  </div>
                </div>
                <div className="card-title">
                  <h5>
                    <Link to="/item-details-01">
                      {formData.title || "Title"}
                    </Link>
                  </h5>
                  <div className="tags">bsc</div>
                </div>
                <div className="meta-info">
                  <div className="author">
                    <div className="avatar">
                      <img src={avt} alt="Axies" />
                    </div>
                    <div className="info">
                      <span>Owned By</span>
                      <h6>
                        {" "}
                        <Link to="/author-02">Freddie Carpenter</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="price">
                    <span>Current Bid</span>
                    <h5> {formData.price || 0} VET</h5>
                  </div>
                </div>
                <div className="card-bottom">
                  <Link
                    to="/wallet-connect"
                    className="sc-button style bag fl-button pri-3"
                  >
                    <span>Place Bid</span>
                  </Link>
                  <Link to="/activity-01" className="view-history reload">
                    View History
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-6 col-md-12 col-12">
              <div className="form-profile">
                <h1>List a Item</h1>
                <div className="flat-tabs tab-create-item mg-t-20">
                  <Tabs>
                    <TabPanel>
                      <form className="form-profile" action="#">
                        <div className="row-form style-3 mg-bt-22">
                          <div className="inner-row-form style-2">
                            <h4 className="title-create-item">Marketplace</h4>
                            <div
                              id="item-create"
                              name="abstraction"
                              className="dropdown"
                              onClick={() => setDropdownState(!dropdownState)}
                            >
                              <Link
                                to="#"
                                className="btn-selector nolink"
                                style={{
                                  width: "200px",
                                }}
                              >
                                {abstraction == ""
                                  ? "Market Address"
                                  : abstraction}
                              </Link>
                              <ul
                                className={
                                  dropdownState === true
                                    ? "ulediter"
                                    : "displayEditer"
                                }
                              >
                                {data.map((item, index) => (
                                  <li
                                    key={index}
                                    onClick={() => changeDataState(item)}
                                  >
                                    <span>{item.label}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <h4 className="title-create-item">Token Name</h4>
                        <input
                          type="text"
                          name="price"
                          placeholder="Enter a NFT Name"
                          onChange={changeValue}
                        />
                        <button
                          className="tf-button-submit mg-t-15"
                          type="button"
                          onClick={() => createbutton1()}
                        >
                          List
                        </button>
                      </form>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListItem;
