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
import * as profileActions from "../store/actions/profileActions";
import { uriToHttp, uriToImage, sliceAddress, toWei, numberWithCommas, numberRound, fromWei, toPriceFormat } from "../utils/utils";
import { NODE, NETWORK, BACKEND_URL } from "../assets/constants";
import Connex from "@vechain/connex";
import * as abis from "../assets/constants/abis";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ticker from "../utils/ticker";
import avt from "../assets/images/avatar/avt-author-tab.png";

const ItemDetails01 = () => {
  const { col_name, token_id } = useParams();
  const [show, setShow] = useState(false);
  const [isListing, setIsListing] = useState(false);
  const [itemDetails, setItemDetails] = useState(null);
  const [owner, setOwner] = useState();
  const [collection, setCollection] = useState(null);
  const signer = window.localStorage.getItem("vechain_signer");
  const [txid, setTxID] = useState(null);
  const [saleId, setSaleId] = useState();
  const [auctionSale, setAuctionSale] = useState();
  const [highestOffer, setHighestOffer] = useState();
  const [status, setStatus] = useState();
  const [offerList, setOfferList] = useState([]);
  const [user, setUser] = useState(null);

  const mainconnex = new Connex({
    node: "https://mainnet.vecha.in/",
    network: "main",
  });

  const connex = new Connex({
    node: NODE,
    network: "main",
  });


  const fetchAuctionStatus = async() => {
    const abiAuctionSaleNftList = abis.BlackVeMarket_ABI.find(({name}) => name === "auctionSaleNftList");

    const result = await connex.thor
        .account(abis.BlackVeMarket_Address)
        .method(abiAuctionSaleNftList)
        .call(collection.address, token_id);

    setSaleId(result.decoded[0]);
    setOwner(await getTokenOwner(collection.address, token_id));
    if ( result.decoded[0] > 0 ) {
      fetchAuction(result.decoded[0]);
    }
  }

  const fetchAuction = async(saleId) => {
    const abiSaleList = abis.BlackVeMarket_ABI.find(({name}) => name === "saleList");

    const result = await connex.thor
        .account(abis.BlackVeMarket_Address)
        .method(abiSaleList)
        .call(saleId);

    await setAuctionSale(result.decoded);
    await setHighestOffer(null);

    if ( result.decoded.minPrice > 0 ) {
      const abiHighestOffers = abis.BlackVeMarket_ABI.find(({name}) => name === "highestOffers");

      const result = await connex.thor
        .account(abis.BlackVeMarket_Address)
        .method(abiHighestOffers)
        .call(saleId);

      await setHighestOffer(result.decoded);
    }
  }

  useEffect(() => {
    if ( collection && collection.address && token_id ) {
      fetchAuctionStatus();
    }
  }, [collection, token_id])

  useEffect(() => {
    const fetchItemDetails = async(col_name, token_id) => {
      const resp = await actions.getItemDetails(col_name, token_id);
      setItemDetails(resp.details);
      setCollection(resp.collection);
      setOwner(await getTokenOwner(resp.collection.address, token_id));
    }
    if ( col_name && token_id ) {
      fetchItemDetails(col_name, token_id);
    }
  }, [col_name, token_id]);

  const fetchProfile = async (walletaddr) => {
    const _user = await profileActions.getProfile(walletaddr);
    setUser(_user);
  }

  useEffect(() => {
    if ( owner && owner != abis.BlackVeMarket_Address ) {
      fetchProfile(owner);
    } else if ( owner && owner == abis.BlackVeMarket_Address && auctionSale && auctionSale.seller ) {
      fetchProfile(auctionSale.seller);
    }
  }, [owner, auctionSale]);

  const onHandlePlace = () => {
    setShow(true);
  };

  const onHandleBuy = async () => {
    if ( saleId == 0 )
      return;
    toast.info('Interfacing with wallet...', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        theme: "colored",
    });

    const abiBuyAuctionSale = abis.BlackVeMarket_ABI.find(({name}) => name === "buyAuctionSale");
    const itemBuyAuctionSale = connex.thor
        .account(abis.BlackVeMarket_Address)
        .method(abiBuyAuctionSale)
        .value(auctionSale.fixedPrice)
        .asClause(saleId);

    const buyAuctionSale = {
      ...itemBuyAuctionSale
    };

    await setTxID(null);
    try {
      const clauses = [buyAuctionSale];
      const result = await connex.vendor
        .sign('tx', clauses)
        .signer(window.localStorage.getItem("vechain_signer"))
        .comment("Buy fixed item")
        .request();

      toast.info('Transaction is pending...', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
      });
      await setTxID(result.txid);
      task(result.txid);
    } catch (err) {
      console.log(err);
    }
  }

  const onHandleClaim = async () => {
    if ( saleId == 0 )
      return;
    toast.info('Interfacing with wallet...', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        theme: "colored",
    });

    const abiClaim = abis.BlackVeMarket_ABI.find(({name}) => name === "claim");
    const itemClaim = connex.thor
        .account(abis.BlackVeMarket_Address)
        .method(abiClaim)
        .asClause(saleId);

    const claimAuction = {
      ...itemClaim
    };

    await setTxID(null);
    try {
      const clauses = [claimAuction];
      const result = await connex.vendor
        .sign('tx', clauses)
        .signer(window.localStorage.getItem("vechain_signer"))
        .comment("Cancel the auction")
        .request();

      toast.info('Transaction is pending...', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
      });
      await setTxID(result.txid);
      task(result.txid);
    } catch (err) {
      console.log(err);
    }
  }

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

  const fetchOffers = async (saleId) => {
    const abiOffersCount = abis.BlackVeMarket_ABI.find(({name}) => name === "offersCount");
    const abiOffersList = abis.BlackVeMarket_ABI.find(({name}) => name === "offersList");
    
    const resultCount = await connex.thor
      .account(abis.BlackVeMarket_Address)
      .method(abiOffersCount)
      .call(saleId);
    
    const offerCount = resultCount.decoded[0];

    const offersList = [];

    for ( var i = offerCount - 1; i >= 0; i -- ) {
      const result = await connex.thor
          .account(abis.BlackVeMarket_Address)
          .method(abiOffersList)
          .call(saleId, i);
        offersList.push(result.decoded);
    }

    setOfferList(offersList);
  }

  const onCancelListing = async () => {
    if ( saleId == 0 )
      return;
    toast.info('Interfacing with wallet...', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        theme: "colored",
    });

    const abiCancelAuctionSale = abis.BlackVeMarket_ABI.find(({name}) => name === "cancelAuctionSale");
    const itemCancelAuctionSale = connex.thor
        .account(abis.BlackVeMarket_Address)
        .method(abiCancelAuctionSale)
        .asClause(saleId);

    const cancelAuction = {
      ...itemCancelAuctionSale
    };

    await setTxID(null);
    try {
      const clauses = [cancelAuction];
      const result = await connex.vendor
        .sign('tx', clauses)
        .signer(window.localStorage.getItem("vechain_signer"))
        .comment("Cancel the auction")
        .request();

      toast.info('Transaction is pending...', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
      });
      await setTxID(result.txid);
      task(result.txid);
    } catch (err) {
      console.log(err);
    }
  }

  const onBid = async (value) => {
    toast.info('Interfacing with wallet...', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnFocusLoss: false,
        theme: "colored",
    });

    const abiBidAuctionSale = abis.BlackVeMarket_ABI.find(({name}) => name === "bidAuctionSale");
    const itemBidAuctionSale = connex.thor
        .account(abis.BlackVeMarket_Address)
        .method(abiBidAuctionSale)
        .value(toWei(value))
        .asClause(saleId);
    const bidAuction = {
      ...itemBidAuctionSale,
    };

    setIsListing(false);
    await setTxID(null);
    try {
      const clauses = [bidAuction];
      const result = await connex.vendor
        .sign('tx', clauses)
        .signer(window.localStorage.getItem("vechain_signer"))
        .comment("Place a bid on the auction")
        .request();

        toast.info('Transaction is pending...', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnFocusLoss: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
      });
      await setTxID(result.txid);
      task(result.txid);
    } catch (err) {
      console.log(err);
    }
  }

  const onListing = async (type, price, duration) => {
    toast.info('Interfacing with wallet...', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnFocusLoss: false,
        theme: "colored",
    });

    const abiApprove = abis.ERC721Nft_ABI.find(({name}) => name === "approve");
    const itemApprove = connex.thor
        .account(collection.address)
        .method(abiApprove)
        .asClause(abis.BlackVeMarket_Address, token_id);

    const approveNFT = {
      ...itemApprove,
    };

    const abiCreateAuctionSale = abis.BlackVeMarket_ABI.find(({name}) => name === "createAuctionSale");
    const itemCreateAuctionSale = connex.thor
        .account(abis.BlackVeMarket_Address)
        .method(abiCreateAuctionSale)
        .asClause(collection.address, token_id, type==0?0:toWei(price), type==1?0:toWei(price), duration * 60 * 60);
    const createAuction = {
      ...itemCreateAuctionSale,
    };

    setIsListing(false);
    await setTxID(null);
    try {
      const clauses = [approveNFT, createAuction];
      const result = await connex.vendor
        .sign('tx', clauses)
        .signer(window.localStorage.getItem("vechain_signer"))
        .comment("Creates and begins a new auction")
        .request();

        toast.info('Transaction is pending...', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnFocusLoss: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
      });
      await setTxID(result.txid);
      task(result.txid);
    } catch (err) {
      console.log(err);
    }

  }

  let ticker;

  const task = (txid) => {
    if ( ticker ) {
      ticker.stop();
    }
    ticker = new Ticker(connex);
    const txVisitor = connex.thor.transaction(txid);
    ticker.tick(async () => {
      const t = await txVisitor.getReceipt();

      if (t) {
        console.log(t);
        if ( t.reverted ) {
          toast.warning('Transaction reverted', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnFocusLoss: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
          });
        } else {
          toast.success('Transaction success', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnFocusLoss: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
          });
          await fetchAuctionStatus();
        }
        setTxID(null);
        ticker && ticker.stop();
      }
    })
  }

  useEffect(() => {
    if ( txid == null ) {
      let isAuction = false
      if ( auctionSale ) {
        isAuction = Date.now() <= auctionSale.startedAt * 1000 + auctionSale.duration * 1000;
      }
      
      let haveBidder = false;
      if ( highestOffer && highestOffer.offer > 0 )
        haveBidder = true;

      if ( owner == signer ) {
        setStatus(1);
      } else if ( owner === abis.BlackVeMarket_Address && saleId > 0 && auctionSale && auctionSale.seller === signer && auctionSale.finalPrice == 0 && !haveBidder ) {
        if ( isAuction ) {
          setStatus(2);
        } else {
          setStatus(3);
        }
      } else if ( owner === abis.BlackVeMarket_Address && auctionSale && auctionSale.seller !== signer && auctionSale.duration > 0 && auctionSale.minPrice > 0 && auctionSale.finalPrice == 0 ) {
        if ( isAuction )
          setStatus(4);
        else if ( highestOffer && highestOffer.buyer == signer ) {
          setStatus(5);
        } else {
          setStatus(0);
        }
      } else if ( owner === abis.BlackVeMarket_Address && auctionSale && auctionSale.seller !== signer && auctionSale.fixedPrice > 0 && auctionSale.finalPrice == 0 ) {
        setStatus(6);
      } else {
        setStatus(0);
      }
    }
  }, [txid, owner, signer, saleId, auctionSale, highestOffer])

  useEffect(() => {
    if ( saleId > 0 ) {
      fetchOffers(saleId);
    }
  }, [saleId]);

  const getDateString = (_date) => {
    const date = new Date(_date);
    const dateString = date.toDateString().split(" ");
    const hour = date.getHours();
    const min = date.getMinutes();
    return dateString[1] + " " + dateString[2] + ", " + dateString[3] + " " + (hour>12?(hour-12):hour) + ":" + min + " " + (hour>12?"PM":"AM");
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
                    <h2 className="style2"> {itemDetails?.name?itemDetails?.name:(collection?.name+'#'+itemDetails?.token_id)} </h2>
                    <Link to={`/collection/${collection?.col_name}`}><h6 className="style2"> {collection?.name} </h6></Link>
                    <p className="content-description mt-3">{itemDetails?.description}</p>

                    {user && user.address &&
                    <div className="client-infor sc-card-product mt-5">
                      <div className="meta-info">
                          <div className="author">
                              <div className="avatar">
                                  <img src={user&&user.avatar?BACKEND_URL + user.avatar:avt} alt="Avatar" />
                              </div>
                              <div className="info">
                                  <span>Owned By</span>
                                  <h6> <Link to={`/profile/${user.address}`}>{user.name??sliceAddress(user.address)}</Link> </h6>
                              </div>
                          </div>
                      </div>
                    </div> }

                    <div className="sc-card-detail">
                      <div className="content-row-item"><span>Name</span></div>
                      <div className="content-row-detail">{itemDetails.name?itemDetails.name:(collection.name+'#'+itemDetails.token_id)}</div>
                    </div>
                    <div className="sc-card-detail">
                      <div className="content-row-item"><span>Token ID</span></div>
                      <div className="content-row-detail">{itemDetails.token_id}</div>
                    </div>
                    <div className="sc-card-detail">
                      <div className="content-row-item"><span>Address</span></div>
                      <div className="content-row-detail">{collection.address && sliceAddress(collection.address)}</div>
                    </div>
                    <div className="sc-card-detail">
                      <div className="content-row-item"><span>Rank</span></div>
                      <div className="content-row-detail">{itemDetails.rank}</div>
                    </div>
                    <hr/>
                    {owner === abis.BlackVeMarket_Address && auctionSale && auctionSale.duration > 0 && auctionSale.minPrice > 0 && auctionSale.finalPrice == 0 && Date.now() <= auctionSale.startedAt * 1000 + auctionSale.duration * 1000 &&
                      <div className="meta-item-details style2">
                      
                        <div className="item meta-price">
                          <span className="heading">{highestOffer&&highestOffer.offer>0?'Highest Bid':'Reserve Price'}</span>
                          <div className="price">
                            <div className="price-box">
                              <h5> {toPriceFormat(highestOffer&&highestOffer.offer>0?highestOffer.offer:auctionSale.minPrice)} </h5>
                            </div>
                          </div>
                        </div>
                        <div className="item count-down">
                          <span className="heading style-2">Ends in</span>
                          <Countdown date={auctionSale.startedAt * 1000 + auctionSale.duration * 1000}>
                            <span>Auction is closed.</span>
                          </Countdown>
                        </div>
                      </div>
                    }
                    {owner === abis.BlackVeMarket_Address && auctionSale && auctionSale.fixedPrice > 0 && auctionSale.finalPrice == 0 &&
                      <div className="meta-item-details style2">
                      
                        <div className="item meta-price">
                          <span className="heading">Price</span>
                          <div className="price">
                            <div className="price-box">
                              <h5> {toPriceFormat(auctionSale.fixedPrice)} </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    {status == 6 &&
                      <div className="meta-item-details style2">
                      
                        <div className="item meta-price">
                          <span className="heading">Price</span>
                          <div className="price">
                            <div className="price-box">
                              <h5> {toPriceFormat(auctionSale.fixedPrice)}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    {status == 1 &&
                        <Link
                          to="#"
                          onClick={onHandleListing}
                          className="sc-button loadmore style fl-button pri-3"
                        >
                          <span>Sell</span>
                        </Link>
                    }
                    {(status == 2 || status == 3) &&
                      <Link
                        to="#"
                        onClick={onCancelListing}
                        className="sc-button loadmore style fl-button pri-3"
                      >
                        <span>
                          {status == 2?"Cancel Listing":"Refund"}
                        </span>
                      </Link>
                    }
                    {saleId > 0 && highestOffer&&highestOffer.buyer==signer&&
                    <p className="sc-highest-bidder">You are the highest bidder.</p>
                    }
                    {(status == 4 || status == 5) &&
                      (
                        status == 4?
                          <Link
                            to="#"
                            onClick={onHandlePlace}
                            className="sc-button loadmore style fl-button pri-3"
                          >
                            <span>Place a bid</span>
                          </Link>
                        :
                          <Link
                            to="#"
                            onClick={onHandleClaim}
                            className="sc-button loadmore style fl-button pri-3"
                          >
                            <span>Claim</span>
                          </Link>
                      )
                    }
                    {
                      status == 6 &&
                        <Link
                          to="#"
                          onClick={onHandleBuy}
                          className="sc-button loadmore style fl-button pri-3"
                        >
                          <span>Buy Now</span>
                        </Link>
                    }
                    <div className="flat-tabs themesflat-tabs">
                      <Tabs>
                        <TabList>
                          <Tab>Bids</Tab>
                          <Tab>Properties</Tab>
                          <Tab>Details</Tab>
                        </TabList>

                        <TabPanel>
                          <ul className="bid-history-list">
                            {offerList.map((item, index) => (
                              <li key={index} item={item}>
                                <div className="content">
                                  <div className="client">
                                    <div className="sc-author-box style-2">
                                      <div className="author-infor">
                                        <div className="name">
                                          <h6>
                                            <Link to="/author-02">
                                              {item.buyer}{" "}
                                            </Link>
                                          </h6>
                                        </div>
                                        <span className="time">{getDateString(item.date * 1000)}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="price">
                                    <h5>{toPriceFormat(item.offer)}</h5>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </TabPanel>
                        <TabPanel>
                          {itemDetails.attributes.map((item, idx) => (
                            <div className="sc-card-detail" key={idx}>
                              <div className="content-row-item"><span>{item['trait_type']?item['trait_type']:item['traitType']}</span></div>
                              <div className="content-row-detail">{item["value"]}</div>
                            </div>
                          ))}
                        </TabPanel>
                        <TabPanel>
                          <div className="provenance">
                            <p>
                              {collection.description}
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
        {auctionSale && 
          <PlaceBids show={show} setShow={setShow} minPrice={highestOffer&&highestOffer.offer>0?highestOffer.offer:auctionSale.minPrice} connex={connex} onBid={onBid} />
        }
        <CreateListing show={isListing} setShow={setIsListing} onListing={onListing}/>
        <LiveAuction />
        <Footer />
      </div>
    )
  );
};

export default ItemDetails01;
