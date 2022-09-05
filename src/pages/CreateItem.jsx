import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img1 from "../assets/images/box-item/image-box-6.jpg";
import avt from "../assets/images/avatar/avt-9.jpg";

const CreateItem = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    price: "",
    title: "",
    description: "",
    royalties: "",
    size: "",
    abstract: "",
  });
  const [formData1, setFormData1] = useState({
    bid_starting_date: "",
    title: "",
    description: "",
    bid_expiration_date: "",
    minimum_bid: "",
  });
  const [url, setUrl] = useState(null);

  const [formData2, setFormData2] = useState({
    minimum_bid: "",
    bid_starting_date: "",
    title: "",
    description: "",
    bid_expiration_date: "",
  });

  const onFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
    setUrl(URL.createObjectURL(e.target.files[0]));
  };

  const changeValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const changeValue1 = (e) => {
    setFormData1({ ...formData1, [e.target.name]: e.target.value });
  };

  const changeValue2 = (e) => {
    setFormData2({ ...formData2, [e.target.name]: e.target.value });
  };

  const createbutton1 = () => {
    console.log("formData:", formData);
  };

  const createbutton2 = () => {
    console.log("formData1:", formData1);
  };

  const createbutton3 = () => {
    console.log("formData2:", formData2);
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
                <h1 className="heading text-center">Create Item</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
                  <li>Create Item</li>
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
                      {formData.title ||
                        formData1.title ||
                        formData2.title ||
                        "Title"}
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
                    <h5> {formData.price || formData2.price || 0} ETH</h5>
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
                <h1>Create a Item</h1>
                <form action="#">
                  <h4 className="title-create-item mg-t-20">Upload file</h4>
                  <label className="uploadFile">
                    <span className="filename">
                      PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                    </span>
                    <input
                      type="file"
                      className="inputfile form-control"
                      onChange={onFileUpload}
                      name="file"
                    />
                  </label>
                </form>
                <div className="flat-tabs tab-create-item">
                  <h4 className="title-create-item">Select method</h4>
                  <Tabs>
                    <TabList>
                      <Tab>
                        <span className="icon-fl-tag"></span>Fixed Price
                      </Tab>
                      <Tab>
                        <span className="icon-fl-clock"></span>Time Auctions
                      </Tab>
                      <Tab>
                        <span className="icon-fl-icon-22"></span>Open For Bids
                      </Tab>
                    </TabList>

                    <TabPanel>
                      <form className="form-profile" action="#">
                        <h4 className="title-create-item">Price</h4>
                        <input
                          type="text"
                          name="price"
                          placeholder="Enter price for one item (ETH)"
                          onChange={changeValue}
                        />

                        <h4 className="title-create-item">Title</h4>
                        <input
                          type="text"
                          placeholder="Item Name"
                          name="title"
                          onChange={changeValue}
                        />

                        <h4 className="title-create-item">Description</h4>
                        <textarea
                          placeholder="e.g. “This is very limited item”"
                          name="description"
                          onChange={changeValue}
                        ></textarea>

                        <div className="row-form style-3 mg-bt-22">
                          <div className="inner-row-form">
                            <h4 className="title-create-item">Royalties</h4>
                            <input
                              type="text"
                              placeholder="5%"
                              name="royalties"
                              onChange={changeValue}
                            />
                          </div>
                          <div className="inner-row-form">
                            <h4 className="title-create-item">Size</h4>
                            <input
                              type="text"
                              placeholder="e.g. “size”"
                              name="size"
                              onChange={changeValue}
                            />
                          </div>
                          <div className="inner-row-form style-2">
                            <div className="seclect-box">
                              <div id="item-create" className="dropdown">
                                <Link to="#" className="btn-selector nolink">
                                  Abstraction
                                </Link>
                                <ul>
                                  <li>
                                    <span>Art</span>
                                  </li>
                                  <li>
                                    <span>Music</span>
                                  </li>
                                  <li>
                                    <span>Domain Names</span>
                                  </li>
                                  <li>
                                    <span>Virtual World</span>
                                  </li>
                                  <li>
                                    <span>Trading Cards</span>
                                  </li>
                                  <li>
                                    <span>Sports</span>
                                  </li>
                                  <li>
                                    <span>Utility</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button
                          className="tf-button-submit mg-t-15"
                          type="button"
                          onClick={() => createbutton1()}
                        >
                          Create
                        </button>
                      </form>
                    </TabPanel>
                    <TabPanel>
                      <form className="form-profile" action="#">
                        <h4 className="title-create-item">Minimum bid</h4>
                        <input
                          type="text"
                          placeholder="enter minimum bid"
                          name="minimum_bid"
                          onChange={changeValue2}
                        />
                        <div className="row">
                          <div className="col-md-6">
                            <h5 className="title-create-item">Starting date</h5>
                            <input
                              type="date"
                              name="bid_starting_date"
                              id="bid_starting_date"
                              className="form-control"
                              min="1997-01-01"
                              onChange={changeValue1}
                            />
                          </div>
                          <div className="col-md-6">
                            <h4 className="title-create-item">
                              Expiration date
                            </h4>
                            <input
                              type="date"
                              name="bid_expiration_date"
                              id="bid_expiration_date"
                              className="form-control"
                              onChange={changeValue1}
                            />
                          </div>
                        </div>

                        <h4 className="title-create-item">Title</h4>
                        <input
                          type="text"
                          placeholder="Item Name"
                          name="title"
                          onChange={changeValue1}
                        />

                        <h4 className="title-create-item">Description</h4>
                        <textarea
                          placeholder="e.g. “This is very limited item”"
                          name="description"
                          onChange={changeValue1}
                        ></textarea>
                        <button
                          className="tf-button-submit mg-t-15"
                          type="button"
                          onClick={() => createbutton2()}
                        >
                          Create
                        </button>
                      </form>
                    </TabPanel>
                    <TabPanel>
                      <form className="form-profile" action="#">
                        <h4 className="title-create-item">Price</h4>
                        <input
                          type="text"
                          placeholder="Enter price for one item (ETH)"
                          name="price"
                          onChange={changeValue2}
                        />

                        <h4 className="title-create-item">Minimum bid</h4>
                        <input
                          type="text"
                          placeholder="enter minimum bid"
                          name="minimum_bid"
                          onChange={changeValue2}
                        />

                        <div className="row">
                          <div className="col-md-6">
                            <h5 className="title-create-item">Starting date</h5>
                            <input
                              type="date"
                              name="bid_starting_date"
                              id="bid_starting_date2"
                              className="form-control"
                              min="1997-01-01"
                              onChange={changeValue2}
                            />
                          </div>
                          <div className="col-md-6">
                            <h4 className="title-create-item">
                              Expiration date
                            </h4>
                            <input
                              type="date"
                              name="bid_expiration_date"
                              id="bid_expiration_date2"
                              className="form-control"
                              onChange={changeValue2}
                            />
                          </div>
                        </div>

                        <h4 className="title-create-item">Title</h4>
                        <input
                          type="text"
                          placeholder="Item Name"
                          name="title"
                          onChange={changeValue2}
                        />

                        <h4 className="title-create-item">Description</h4>
                        <textarea
                          placeholder="e.g. “This is very limited item”"
                          name="description"
                          onChange={changeValue2}
                        ></textarea>

                        <button
                          className="tf-button-submit mg-t-15"
                          type="button"
                          onClick={() => createbutton3()}
                        >
                          Create
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

export default CreateItem;
