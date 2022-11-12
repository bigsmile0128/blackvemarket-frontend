import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import LiveAuction from "../components/layouts/LiveAuction";
import PlaceBids from "../components/layouts/auctions/PlaceBids";
import CreateListing from "../components/layouts/auctions/CreateListing";
import { Link, useParams } from "react-router-dom";
import Countdown from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import liveAuctionData from "../assets/fake-data/data-live-auction";
import img1 from "../assets/images/avatar/avt-3.jpg";
import img2 from "../assets/images/avatar/avt-11.jpg";
import img3 from "../assets/images/avatar/avt-1.jpg";
import img4 from "../assets/images/avatar/avt-5.jpg";
import img5 from "../assets/images/avatar/avt-7.jpg";
import img6 from "../assets/images/avatar/avt-8.jpg";
import img7 from "../assets/images/avatar/avt-2.jpg";
import imgdetail1 from "../assets/images/box-item/images-item-details.jpg";
import * as actions from "../store/actions/collectionActions";
import { uriToHttp, uriToImage, sliceAddress } from "../utils/utils";
import { NODE, NETWORK } from "../assets/constants";
import Connex from "@vechain/connex";
import * as abis from "../assets/constants/abis";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ItemDetails01 = () => {
  const { col_name, token_id } = useParams();
  const [show, setShow] = useState(false);
  const [isListing, setIsListing] = useState(false);
  const [itemDetails, setItemDetails] = useState(null);
  const [owner, setOwner] = useState();
  const [collection, setCollection] = useState(null);
  const signer = window.localStorage.getItem("vechain_signer");

  const [dataHistory] = useState([
    {
      img: img1,
      name: "Mason Woodward",
      time: "8 hours ago",
      price: "4.89 VET",
      priceChange: "$12.246",
    },
    {
      img: img2,
      name: "Mason Woodward",
      time: "at 06/10/2021, 3:20 AM",
      price: "4.89 VET",
      priceChange: "$12.246",
    },
    {
      img: img3,
      name: "Mason Woodward",
      time: "8 hours ago",
      price: "4.89 VET",
      priceChange: "$12.246",
    },
    {
      img: img4,
      name: "Mason Woodward",
      time: "8 hours ago",
      price: "4.89 VET",
      priceChange: "$12.246",
    },
    {
      img: img5,
      name: "Mason Woodward",
      time: "8 hours ago",
      price: "4.89 VET",
      priceChange: "$12.246",
    },
    {
      img: img6,
      name: "Mason Woodward",
      time: "8 hours ago",
      price: "4.89 VET",
      priceChange: "$12.246",
    },
  ]);

  const connex = new Connex({
    node: NODE,
    network: NETWORK,
  });

  useEffect(() => {
    const fetchItemDetails = async() => {
      const resp = await actions.getItemDetails(col_name, token_id);
      setItemDetails(resp.details);
      setCollection(resp.collection);
      setOwner(await getTokenOwner(resp.collection.address, token_id));
    }
    if ( col_name && token_id ) {
      fetchItemDetails();
    }
  }, [col_name, token_id]);

  const onHandlePlace = () => {
    setShow(true);
  };

  const onHandleListing = () => {
    setIsListing(true);
  }
  
  const getTokenOwner = async (address, tokenId) => {
    const abiTokenURI = abis.ERC721Nft_ABI.find(({name}) => name === "ownerOf");

    const result = await connex.thor
        .account(address)
        .method(abiTokenURI)
        .call(tokenId);

    return result.decoded[0];
  }

  return (
    itemDetails && collection && (
      <div className="item-details">
        <ToastContainer />
        <Header />
        <div className="tf-section tf-item-details">
          <div className="themesflat-container" style={{marginTop: '3rem'}}>
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="content-left">
                  <div className="media">
                    {itemDetails && (
                      <img
                        src={uriToImage(itemDetails.image)}
                        style={{ width: "100%" }}
                        alt="Axies"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="content-right">
                  <div className="sc-item-details">
                    <h2 className="style2"> {itemDetails?.name} </h2>
                    <p className="content-description">{itemDetails?.description}</p>

                    <div className="sc-card-detail">
                      <div className="content-row-item"><span>Name</span></div>
                      <div className="content-row-detail">{itemDetails.name}</div>
                    </div>
                    <div className="sc-card-detail">
                      <div className="content-row-item"><span>Token ID</span></div>
                      <div className="content-row-detail">{itemDetails.token_id}</div>
                    </div>
                    <div className="sc-card-detail">
                      <div className="content-row-item"><span>Token Owner</span></div>
                      <div className="content-row-detail">{owner && sliceAddress(owner)}</div>
                    </div>
                    <div className="sc-card-detail">
                      <div className="content-row-item"><span>Collection Address</span></div>
                      <div className="content-row-detail">{collection.address && sliceAddress(collection.address)}</div>
                    </div>

                    <div className="meta-item-details style2">
                      <div className="item meta-price">
                        <span className="heading">Current Bid</span>
                        <div className="price">
                          <div className="price-box">
                            <h5> 4.89 VET</h5>
                            <span>= $12.246</span>
                          </div>
                        </div>
                      </div>
                      <div className="item count-down">
                        <span className="heading style-2">Countdown</span>
                        <Countdown date={Date.now() + 500000000}>
                          <span>You are good to go!</span>
                        </Countdown>
                      </div>
                    </div>
                    {owner === signer ?
                    
                      <Link
                        to="#"
                        onClick={onHandleListing}
                        className="sc-button loadmore style bag fl-button pri-3"
                      >
                        <span>Create Listing</span>
                      </Link>
                    :
                      <Link
                        to="#"
                        onClick={onHandlePlace}
                        className="sc-button loadmore style bag fl-button pri-3"
                      >
                        <span>Place a bid</span>
                      </Link>
                    }
                    <div className="flat-tabs themesflat-tabs">
                      <Tabs>
                        <TabList>
                          <Tab>Bid History</Tab>
                          <Tab>Info</Tab>
                          <Tab>Provenance</Tab>
                        </TabList>

                        <TabPanel>
                          <ul className="bid-history-list">
                            {dataHistory.map((item, index) => (
                              <li key={index} item={item}>
                                <div className="content">
                                  <div className="client">
                                    <div className="sc-author-box style-2">
                                      <div className="author-avatar">
                                        <Link to="#">
                                          <img
                                            src={item.img}
                                            alt="Axies"
                                            className="avatar"
                                          />
                                        </Link>
                                        <div className="badge"></div>
                                      </div>
                                      <div className="author-infor">
                                        <div className="name">
                                          <h6>
                                            <Link to="/author-02">
                                              {item.name}{" "}
                                            </Link>
                                          </h6>{" "}
                                          <span> place a bid</span>
                                        </div>
                                        <span className="time">{item.time}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="price">
                                    <h5>{item.price}</h5>
                                    <span>= {item.priceChange}</span>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </TabPanel>
                        <TabPanel>
                          <ul className="bid-history-list">
                            <li>
                              <div className="content">
                                <div className="client">
                                  <div className="sc-author-box style-2">
                                    <div className="author-avatar">
                                      <Link to="#">
                                        <img
                                          src={img1}
                                          alt="Axies"
                                          className="avatar"
                                        />
                                      </Link>
                                      <div className="badge"></div>
                                    </div>
                                    <div className="author-infor">
                                      <div className="name">
                                        <h6>
                                          {" "}
                                          <Link to="/author-02">
                                            Mason Woodward{" "}
                                          </Link>
                                        </h6>{" "}
                                        <span> place a bid</span>
                                      </div>
                                      <span className="time">8 hours ago</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </TabPanel>
                        <TabPanel>
                          <div className="provenance">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and
                              scrambled it to make a type specimen book. It has
                              survived not only five centuries, but also the leap
                              into electronic typesetting, remaining essentially
                              unchanged. It was popularised in the 1960s with the
                              release of Letraset sheets containing Lorem Ipsum
                              passages, and more recently with desktop publishing
                              software like Aldus PageMaker including versions of
                              Lorem Ipsum.
                            </p>
                          </div>
                        </TabPanel>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PlaceBids show={show} setShow={setShow} />
        <CreateListing show={isListing} setShow={setIsListing} />
        <LiveAuction data={liveAuctionData} />
        <Footer />
      </div>
    )
  );
};

export default ItemDetails01;
