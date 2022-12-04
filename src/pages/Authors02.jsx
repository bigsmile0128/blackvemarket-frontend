import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import avt from "../assets/images/avatar/avt-author-tab.png";
import { BACKEND_URL, S3_URL } from "../assets/constants";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';
import * as actions from "../store/actions/profileActions";
import { numberWithCommas, toVETFormat, uriToHttp } from "../utils/utils";
import CustomImage from "../components/layouts/CustomImage";
import _ from "lodash";

const Authors02 = () => {
  const { address } = useParams();
  const [user, setUser] = useState(null);
  const signer = window.localStorage.getItem("vechain_signer");
  const [collected, setCollected] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filteredSale, setFilteredSale] = useState([]);
  const [fetchCollections, setFetchCollections] = useState(false);

  const [menuTab] = useState([
    {
      class: "active",
      name: "Collected",
    }
    ,{
      class: "",
      name: "On Sale",
    }
  ]);

  const [sort, setSort] = useState(0);
  const sortList = [
    "TokenID (Low to High)", 
    "TokenID (High to Low)", 
    "Rarity (most)", 
    "Rarity (least)",
    "Price (Low to High)",
    "Price (High to Low)",
    "Newly Listed",
  ];
  const [filter, setFilter] = useState(0);
  const [collections, setCollections] = useState(["All"]);

  const getUserProfile = async(walletaddr) => {
    const _user = await actions.getProfile(walletaddr);
    setUser(_user);
    await setFiltered([]);
    await setFilteredSale([]);
    await setCollected([]);
    await setFetchCollections(false);
    const _collected = await actions.getCollected(walletaddr);
    const _collections = ["All"];
    for ( const collected_item of _collected ) {
      if ( _collections.indexOf(collected_item.collection.name) < 0 ) {
        _collections.push(collected_item.collection.name);
      }
    }
    setCollected(_collected);
    setFiltered(_collected);
    setFilteredSale(_collected.filter((item) => item.listed === true));
    setVisible(8);
    setVisibleSale(8);
    setCollections(_collections);
    setFetchCollections(true);
  }


  useEffect(() => {
    const getFilteredItems = (items) => {
      let filtered_items = items;
      if ( filter > 0 ) {
        filtered_items = items.filter((item) => item.collection.name === collections[filter]);
      }
      if ( sort === 0 )
        filtered_items = _.orderBy(filtered_items, 'nft.token_id', 'asc');
      else if ( sort === 1 )
        filtered_items = _.orderBy(filtered_items, 'nft.token_id', 'desc');
      else if ( sort === 2 )
        filtered_items = _.orderBy(filtered_items, ['nft.rank', 'collection.col_name', 'nft.token_id'], ['asc', 'asc', 'asc']);
      else if ( sort === 3 )
        filtered_items = _.orderBy(filtered_items, ['nft.rank', 'collection.col_name', 'nft.token_id'], ['desc', 'asc', 'asc']);
      else if ( sort == 4 )
        filtered_items = _.orderBy(filtered_items, 'price', 'asc');
      else if ( sort == 5 )
        filtered_items = _.orderBy(filtered_items, [(o)=>o.price||0], 'desc');
      else if ( sort == 6 )
        filtered_items = _.orderBy(filtered_items, [(o)=>o.auction?o.auction.startedAt:0], 'desc');

      return filtered_items;
    }
    
    if ( collected && collected.length > 0 ) {
      setFiltered(getFilteredItems(collected));
      setFilteredSale(getFilteredItems(collected.filter((item) => item.listed === true)));
      setVisible(8);
      setVisibleSale(8);
    }
  }, [sort, filter, collected, collections])

  useEffect(() => {
    getUserProfile(address);
  }, [address]);

  const [visible, setVisible] = useState(8);
  const [visibleSale, setVisibleSale] = useState(8);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const showMoreItemsSale = () => {
    setVisibleSale((prevValue) => prevValue + 4);
  };

  const onAddressCopy = () => {
    navigator.clipboard.writeText(address);
    toast.info('Copied', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnFocusLoss: false,
        closeOnClick: true,
    });
  }

  return (
    <div className="authors-2">
      <Header />
      <ToastContainer />
      {/* <section className="flat-title-page inner collection-title-page" style={{paddingTop: '0px'}}></section> */}
      <section className="flat-title-page inner">
          <div className="overlay"></div>
          <div className="themesflat-container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="page-title-heading mg-bt-12">
                          <h1 className="heading text-center">My Profile</h1>
                      </div>
                  </div>
              </div>
          </div>                    
      </section>
      <section className="tf-section authors">
        <div className="themesflat-container">
          <div className="flat-tabs tab-authors">
            <div className="author-profile flex">
              <div className="feature-profile">
                <CustomImage
                  src={user?.avatar ? S3_URL + user?.avatar : avt}
                  alt="Axies"
                  className="avatar"
                />
              </div>
              <div className="infor-profile style2">
                <h2 className="title">{user?.name || " "}&nbsp;</h2>
                <p className="content">{user?.bio || " "}&nbsp;</p>
                <form>
                  <input
                    type="text"
                    className="inputcopy"
                    value={address}
                    readOnly
                  />
                  <button type="button" className="btn-copycode" onClick={onAddressCopy}>
                    <i className="icon-fl-file-1"></i>
                  </button>
                </form>
              </div>
              <div className="widget-social style-3 ">
                <ul className="ml-auto">
                  {user?.twitter&&
                  <li>
                    <a href={user?.twitter?user?.twitter:'#'} target="_blank" rel="noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>}
                  {user?.instagram&&
                  <li>
                    <a href={user?.instagram?user?.instagram:'#'} target="_blank" rel="noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>}
                  {user?.url&&
                  <li>
                    <a href={user?.url?user?.url:'#'} target="_blank" rel="noreferrer">
                      <i className="fa fa-globe"></i>
                    </a>
                  </li>}
                  {user?.email&&
                  <li className="style-2">
                    <a href={user?.email?`mailto: ${user?.email}`:'#'} target="_blank" rel="noreferrer">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>}
                  {signer == address && 
                  <li>
                    <Link to="/edit-profile">
                      <i className="fa fa-edit"></i>
                    </Link>
                  </li>}
                </ul>
              </div>
            </div>
            <Tabs>
              <TabList>
                {menuTab.map((item, index) => (
                  <Tab key={index}>{item.name}</Tab>
                ))}
              </TabList>

              <div className="content-tab">
                <div className="content-inner">
                    <TabPanel style={{width: '100%'}} className="w-100 d-block">
                      <div className="seclect-box style3 hidden-md-up" style={{float: 'none'}}>
                          <div className="row w-100 mx-0">
                              <div className="col-5 ml-auto d-flex">
                                  <p className="m-auto">Project</p>
                              </div>
                              <div className="col-5 mr-auto d-flex">
                                  <p className="m-auto">Sort by</p>
                              </div>
                          </div>
                          <div className="row w-100 my-5 mx-0">
                          <div id="artworks" className="col-5 ml-auto dropdown">
                              <Link to="#" className="btn-selector nolink pr-8 h-100 d-flex">
                                  <span className='my-auto'>{collections[filter]}</span>
                              </Link>
                              <ul>
                                  {collections.map((item, idx) => (
                                  <li className={`${filter==idx?'active':''}`} key={idx} onClick={()=>setFilter(idx)}><span>{item}</span></li>
                                  ))}
                              </ul>
                          </div>
                          <div id="sort-by" className="dropdown col-5 mr-auto">
                              <Link to="#" className="btn-selector nolink pr-8 h-100 d-flex">
                                  <span className="my-auto">{sortList[sort]}</span>
                              </Link>
                              <ul>
                                  {sortList.map((item, idx) => (
                                  <li className={`${sort==idx?'active':''}`} key={idx} onClick={()=>setSort(idx)}><span>{item}</span></li>
                                  ))}
                              </ul>
                          </div>
                          </div>
                      </div>
                      <div className="seclect-box style3 hidden-sm-down" style={{float: 'none'}}>
                          <div className="mr-5 flex">
                            <p className="m-auto">Select Project</p>
                          </div>
                          <div id="artworks" className="dropdown">
                              <Link to="#" className="btn-selector nolink pr-8">{collections[filter]}</Link>
                              <ul>
                                {collections.map((item, idx) => (
                                  <li className={`${filter==idx?'active':''}`} key={idx} onClick={()=>setFilter(idx)}><span>{item}</span></li>
                                ))}
                              </ul>
                          </div>
                          <div className="mx-5 flex">
                            <p className="m-auto">Sort by</p>
                          </div>
                          <div id="sort-by" className="dropdown style-2">
                              <Link to="#" className="btn-selector nolink pr-8">{sortList[sort]}</Link>
                              <ul>
                                {sortList.map((item, idx) => (
                                  <li className={`${sort==idx?'active':''}`} key={idx} onClick={()=>setSort(idx)}><span>{item}</span></li>
                                ))}
                              </ul>
                          </div>    
                      </div>
                      {fetchCollections == false &&
                      <div className="spinner-container">
                          <div className="loading-spinner">
                          </div>
                      </div> }
                      <div className="row mt-5">
                        {filtered.slice(0, visible).map((data, index) => {
                          return (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={index}>
                              <div className="sc-card-product explode ">
                                <div className="card-media">
                                  <Link to={`/collection/${data.collection.col_name}/${data.nft.token_id}`}>
                                    <img src={uriToHttp(data.nft.image)} alt="axies" />
                                  </Link>
                                </div>
                                <div className="card-title">
                                  <h5 className="style2">
                                    <Link to={`/collection/${data.collection.col_name}/${data.nft.token_id}`}>
                                      {data.nft.name?data.nft.name:(data.collection.name+'#'+data.nft.token_id)}
                                    </Link>
                                  </h5>
                                  {data.nft.rank&&
                                  <div className="price">
                                    <span>Rank</span>
                                    <h5 style={{overflow: 'initial'}}> {data.nft.rank} &nbsp;</h5>
                                  </div>}
                                </div>
                                <div className="meta-info">
                                  <div className="author">
                                      <div className="avatar">
                                          <img src={data.collection.logoImg?BACKEND_URL + data.collection.logoImg:avt} alt="axies" />
                                      </div>
                                      <div className="info">
                                          <h6> <Link to={`/collection/${data.collection.symbol}`}>{data.collection.name}</Link> </h6>
                                      </div>
                                  </div>
                                  {data.auction&&
                                  <div className="price">
                                    <span>{data.auction.isAuction?"Current Bid":"Price"}</span>
                                    <h5>{numberWithCommas(data.offer?data.offer.price:data.auction.price)} VET</h5>
                                  </div>}
                                </div>
                              </div>
                            </div>)
                        })}
                      </div>
                      {visible < filtered.length && (
                        <div className="col-md-12 wrap-inner load-more text-center">
                          <Link
                            to="#"
                            id="load-more"
                            className="sc-button loadmore fl-button pri-3"
                            onClick={showMoreItems}
                          >
                            <span>Load More</span>
                          </Link>
                        </div>
                      )}
                    </TabPanel>
                    <TabPanel style={{width: '100%'}} className="w-100 d-block">
                      <div className="seclect-box style3 hidden-md-up" style={{float: 'none'}}>
                          <div className="row w-100 mx-0">
                              <div className="col-5 ml-auto d-flex">
                                  <p className="m-auto">Project</p>
                              </div>
                              <div className="col-5 mr-auto d-flex">
                                  <p className="m-auto">Sort by</p>
                              </div>
                          </div>
                          <div className="row w-100 my-5 mx-0">
                          <div id="artworks" className="col-5 ml-auto dropdown">
                              <Link to="#" className="btn-selector nolink pr-8 h-100 d-flex">
                                  <span className='my-auto'>{collections[filter]}</span>
                              </Link>
                              <ul>
                                  {collections.map((item, idx) => (
                                  <li className={`${filter==idx?'active':''}`} key={idx} onClick={()=>setFilter(idx)}><span>{item}</span></li>
                                  ))}
                              </ul>
                          </div>
                          <div id="sort-by" className="dropdown col-5 mr-auto">
                              <Link to="#" className="btn-selector nolink pr-8 h-100 d-flex">
                                  <span className="my-auto">{sortList[sort]}</span>
                              </Link>
                              <ul>
                                  {sortList.map((item, idx) => (
                                  <li className={`${sort==idx?'active':''}`} key={idx} onClick={()=>setSort(idx)}><span>{item}</span></li>
                                  ))}
                              </ul>
                          </div>
                          </div>
                      </div>
                      <div className="seclect-box style3 hidden-sm-down" style={{float: 'none'}}>
                          <div className="mr-5 flex">
                            <p className="m-auto">Select Project</p>
                          </div>
                          <div id="artworks" className="dropdown">
                              <Link to="#" className="btn-selector nolink pr-8">{collections[filter]}</Link>
                              <ul>
                                {collections.map((item, idx) => (
                                  <li className={`${filter==idx?'active':''}`} key={idx} onClick={()=>setFilter(idx)}><span>{item}</span></li>
                                ))}
                              </ul>
                          </div>
                          <div className="mx-5 flex">
                            <p className="m-auto">Sort by</p>
                          </div>
                          <div id="sort-by" className="dropdown style-2">
                              <Link to="#" className="btn-selector nolink pr-8">{sortList[sort]}</Link>
                              <ul>
                                {sortList.map((item, idx) => (
                                  <li className={`${sort==idx?'active':''}`} key={idx} onClick={()=>setSort(idx)}><span>{item}</span></li>
                                ))}
                              </ul>
                          </div>    
                      </div>
                      {fetchCollections == false &&
                      <div className="spinner-container">
                          <div className="loading-spinner">
                          </div>
                      </div> }
                      <div className="row mt-5">
                        {filteredSale.slice(0, visibleSale).map((data, index) => {
                          return (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={index}>
                              <div className="sc-card-product explode ">
                                <div className="card-media">
                                  <Link to={`/collection/${data.collection.col_name}/${data.nft.token_id}`}>
                                    <img src={uriToHttp(data.nft.image)} alt="axies" />
                                  </Link>
                                </div>
                                <div className="card-title">
                                  <h5 className="style2">
                                    <Link to={`/collection/${data.collection.col_name}/${data.nft.token_id}`}>
                                      {data.nft.name?data.nft.name:(data.collection.name+'#'+data.nft.token_id)}
                                    </Link>
                                  </h5>
                                  {data.nft.rank&&
                                  <div className="price">
                                    <span>Rank</span>
                                    <h5 style={{overflow: 'initial'}}> {data.nft.rank} &nbsp;</h5>
                                  </div>}
                                </div>
                                <div className="meta-info">
                                  <div className="author">
                                      <div className="avatar">
                                          <img src={data.collection.logoImg?BACKEND_URL + data.collection.logoImg:avt} alt="axies" />
                                      </div>
                                      <div className="info">
                                          <h6> <Link to={`/collection/${data.collection.symbol}`}>{data.collection.name}</Link> </h6>
                                      </div>
                                  </div>
                                  {data.auction&&
                                  <div className="price">
                                    <span>{data.auction.isAuction?"Current Bid":"Price"}</span>
                                    <h5>{numberWithCommas(data.auction.price)} VET</h5>
                                  </div>}
                                </div>
                              </div>
                            </div>)
                        })}
                      </div>
                      {visibleSale < filteredSale.length && (
                        <div className="col-md-12 wrap-inner load-more text-center">
                          <Link
                            to="#"
                            id="load-more"
                            className="sc-button loadmore fl-button pri-3"
                            onClick={showMoreItemsSale}
                          >
                            <span>Load More</span>
                          </Link>
                        </div>
                      )}
                    </TabPanel>
                    {/* {panelTab.map((item, index) => (
                      <TabPanel key={index}>
                        {item.dataContent
                          .slice(0, visible)
                          .map((data, index) => (
                            <div
                              key={index}
                              className="col-xl-3 col-lg-4 col-md-6 col-12"
                            >
                              <div className="sc-card-product explode ">
                                <div className="card-media">
                                  <Link to="/item-details-01">
                                    <img src={data.img} alt="Axies" />
                                  </Link>
                                  <div className="button-place-bid ">
                                    <Link
                                      to="/wallet-connect"
                                      className="sc-button style-place-bid style bag fl-button pri-3"
                                    >
                                      <span>Place Bid</span>
                                    </Link>
                                  </div>
                                  <Link
                                    to="/login"
                                    className="wishlist-button heart"
                                  >
                                    <span className="number-like">
                                      {" "}
                                      {data.wishlist}
                                    </span>
                                  </Link>
                                </div>
                                <div className="card-title mg-bt-16">
                                  <h5>
                                    <Link to="/item-details-01">
                                      "{data.title}"
                                    </Link>
                                  </h5>
                                </div>
                                <div className="meta-info">
                                  <div className="author">
                                    <div className="avatar">
                                      <img src={data.imgAuthor} alt="Axies" />
                                    </div>
                                    <div className="info">
                                      <span>Creator</span>
                                      <h6>
                                        {" "}
                                        <Link to="/author-02">
                                          {data.nameAuthor}
                                        </Link>{" "}
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="tags">{data.tags}</div>
                                </div>
                                <div className="card-bottom style-explode">
                                  <div className="price">
                                    <span>Current Bid</span>
                                    <div className="price-details">
                                      <h5>{data.price}</h5>
                                      <span>= {data.priceChange}</span>
                                    </div>
                                  </div>
                                  <Link
                                    to="/activity-01"
                                    className="view-history reload"
                                  >
                                    View History
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
                        {visible < item.dataContent.length && (
                          <div className="col-md-12 wrap-inner load-more text-center">
                            <Link
                              to="#"
                              id="load-more"
                              className="sc-button loadmore fl-button pri-3"
                              onClick={showMoreItems}
                            >
                              <span>Load More</span>
                            </Link>
                          </div>
                        )}
                      </TabPanel>
                    ))} */}
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Authors02;
