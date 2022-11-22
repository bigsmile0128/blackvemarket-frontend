import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "react-tabs/style/react-tabs.css";
import img1 from "../assets/images/box-item/image-box-6.jpg";
import { useRef } from "react";
import * as actions from "../store/actions/collectionActions";
import * as abis from "../assets/constants/abis";
import contracts from "../assets/contracts/status.json";
import { NODE, NETWORK } from "../assets/constants";
import Connex from "@vechain/connex";
import { uriToHttp } from "../utils/utils";
// import { create } from "ipfs-http-client";

// const projectId = "1z7OICVZBuSn666a44zHwNeThpc";
// const projectSecret = "4c6a9a7434b418334fbe6424f841623f";
// const auth = `Basic ${projectId}:${projectSecret}`;

// const client = create({
//   host: "ipfs.infura.io",
//   port: 5001,
//   protocol: "https",
//   headers: {
//     authorization: auth,
//   },
// });

const CreateCollection = () => {
  const userID = useSelector((store) => store.profile.profileInfo._id);
  const dispatch = useDispatch();
  const connex = new Connex({
    node: NODE,
    network: NETWORK,
  });

  const [processed, setProcessed] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    logoImg: "",
    featureImg: "",
    bannerImg: "",
    name: "",
    symbol: "",
    address: "",
    description: "",
  });
  const [url, setUrl] = useState(null);
  const [url1, setUrl1] = useState(null);
  const [url2, setUrl2] = useState(null);
  const [abstraction, setAbstraction] = useState("");
  const [chainChannel, setChainChannel] = useState("");

  const onFileUpload = (e) => {
    console.log(e.target.files[0]);
    setUrl(URL.createObjectURL(e.target.files[0]));
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };
  const onFileUpload1 = async (e) => {
    setUrl1(URL.createObjectURL(e.target.files[0]));
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };
  const onFileUpload2 = async (e) => {
    setUrl2(URL.createObjectURL(e.target.files[0]));
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const [tags, setTags] = useState(["ether"]);
  const addTagHandler = (tag) => {
    setTags([...tags, tag]);
  };
  const deleteTagHandler = (i) => {
    setTags(tags.filter((_, index) => index !== i));
  };

  const TagInput = ({ tags, onAdd, onDelete }) => {
    const [userInput, setUserInput] = useState("");
    const keyPressHandler = (e) => {
      if (e.key === "Enter" && userInput.trim() !== "") {
        onAdd(userInput.trim());
        setUserInput("");
      }
    };

    return (
      <div className="taginput">
        {tags.map((tag, i) => (
          <Tag key={tag + i} label={tag} onClickDelete={() => onDelete(i)} />
        ))}
        <Input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={keyPressHandler}
          placeholder="Insert tag here"
        />
      </div>
    );
  };

  const Tag = ({ label, onClickDelete }) => (
    <h5 className="tag">
      {label}
      <div className="p-4">
        <button className="button1" onClick={onClickDelete}>
          &times;
        </button>
      </div>
    </h5>
  );

  const Input = ({ ...props }) => (
    <div className="input">
      <input {...props} />
    </div>
  );
  const data = [
    { id: 0, label: "Art" },
    { id: 1, label: "Music" },
    { id: 2, label: "Domain Names" },
    { id: 3, label: "Virtual World" },
    { id: 4, label: "Trading Cards" },
    { id: 5, label: "Sports" },
    { id: 6, label: "Utility" },
  ];

  const changeValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  const data1 = [
    { id: 0, label: "Ethereum" },
    { id: 1, label: "Kalyatn" },
    { id: 2, label: "Solana" },
    { id: 3, label: "Polygon" },
  ];

  const navigate = useNavigate();

  const [isOpen1, setOpen1] = useState(false);
  const [items1, setItem1] = useState(data1);
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownState1, setDropdownState1] = useState(false);

  const toggleDropdown1 = () => setOpen1(!isOpen1);

  const handleItemClick1 = (id) => {
    selectedItem1 == id ? setSelectedItem1(null) : setSelectedItem1(id);
  };

  const imageRef = useRef();

  const onImageClick = (e) => {
    this.imageRef.click();
  };
  const changeDataState = (item) => {
    setDropdownState(false);
    setAbstraction(item.label);
  };
  const changeDataState1 = (item) => {
    setDropdownState1(false);
    setChainChannel(item.label);
  };

  const getCollectionTotalSupply = async (address) => {
    const abiTotalSupply = abis.ERC721Nft_ABI.find(({name}) => name === "totalSupply");

    const result = await connex.thor
        .account(address)
        .method(abiTotalSupply)
        .call();

    return result.decoded[0];
  }

  const getNFTMetaData = async (address, tokenId) => {
    const abiTokenURI = abis.Warbands_ABI.find(({name}) => name === "tokenURI");

    const result = await connex.thor
        .account(address)
        .method(abiTokenURI)
        .call(tokenId);

    return result.decoded[0];
  }

  const getNFTBaseURI = async (address) => {
    const abiBaseURI = abis.Warbands_ABI.find(({name}) => name === "baseURI");

    const result = await connex.thor
        .account(address)
        .method(abiBaseURI)
        .call();

    return result.decoded[0];
  }

  const getNFTMetaDataByIndex = async (address, tokenId) => {
    const abiTokenURI = abis.Warbands_ABI.find(({name}) => name === "tokenByIndex");

    const result = await connex.thor
        .account(address)
        .method(abiTokenURI)
        .call(tokenId);

    return result.decoded[0];
  }

  const fetchNFTItem = async (meta_uri) => {
    const urls = uriToHttp(meta_uri);
    for (var i = 0; i < urls.length; i++) {
      let response;
      try {
          response = await fetch(urls[i]);
          const json = await response.text();
          return json;
      } catch (err) {
          console.error("Failed to fetch metadata", meta_uri, err);
      }
    }
    return {};
  }

  const sleep = async (milliseconds) => {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  const onCreateCollec = async () => {
    let fd = new FormData();
    fd.append("name", formData.name);
    fd.append("symbol", formData.symbol);
    fd.append("address", formData.address);
    fd.append("logoImg", formData.logoImg);
    fd.append("featureImg", formData.featureImg);
    fd.append("bannerImg", formData.bannerImg);
    fd.append("description", formData.description);
    fd.append("user_id", userID);

    if (userID) {
      const col_name = formData.name.replaceAll(" ", "_").toLowerCase();
      const totalSupply = await getCollectionTotalSupply(formData.address);
      setTotalSupply(totalSupply);
      fd.append("total_supply", totalSupply);
      await dispatch(actions.createClt(fd));
      setLoading(true);
      let startIndex = 1;
      let tokenId = 1;
      do {
        //await sleep(1000);
        try {
          let meta_uri = await getNFTMetaData(formData.address, tokenId);
          if ( meta_uri ) {
            // if ( meta_uri.substr(-5).toLowerCase() != ".json" )
            // meta_uri = meta_uri + ".json";
            // console.log(meta_uri);
            // meta_uri = meta_uri.slice(0, -5);
            // const meta_json = await fetchNFTItem(meta_uri);
            // console.log(meta_json);
            await dispatch(actions.addNFT(col_name, meta_uri, tokenId));
            startIndex++;
          }
        } catch(err) {
          console.error("Invalid Request: ", err);
        }
        tokenId++;
        setProcessed(startIndex);
      } while ( startIndex <= totalSupply );
      setLoading(false);
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
                <h1 className="heading text-center">Add Collection</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
                  <li>Add Collection</li>
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
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <h4 className="title-create-item">Logo image</h4>
                <div className="sc-card-product">
                  <div className="card-media">
                    <img
                      src={url ? url : img1}
                      alt="Axies"
                      className="c-img-area-2"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <h4 className="title-create-item">Feature Image</h4>
                <div className="sc-card-product">
                  <div className="card-media">
                    <img
                      src={url2 ? url2 : img1}
                      className="c-img-area-2"
                      alt="Axies"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <h4 className="title-create-item">Banner Image</h4>
                <div className="sc-card-product">
                  <div className="card-media">
                    <img
                      src={url1 ? url1 : img1}
                      className="c-img-area-2"
                      alt="Axies"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-6 col-md-12 col-12">
              <div className="form-profile">
                <h1>Add a Collection</h1>
                <form action="#">
                  <h4 className="title-create-item mg-t-20">Logo Image</h4>
                  <label className="uploadFile">
                    <span className="filename">
                      PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                    </span>
                    <input
                      type="file"
                      className="inputfile form-control"
                      onChange={onFileUpload}
                      name="logoImg"
                    />
                  </label>
                </form>
                <form action="#">
                  <h4 className="title-create-item mg-t-20">Feature Image</h4>
                  <label className="uploadFile">
                    <span className="filename">
                      PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                    </span>
                    <input
                      type="file"
                      className="inputfile form-control"
                      onChange={onFileUpload2}
                      name="featureImg"
                    />
                  </label>
                </form>
                <form action="#">
                  <h4 className="title-create-item mg-t-20">Banner Image</h4>
                  <label className="uploadFile">
                    <span className="filename">
                      PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                    </span>
                    <input
                      type="file"
                      className="inputfile form-control"
                      onChange={onFileUpload1}
                      name="bannerImg"
                    />
                  </label>
                </form>

                <div className="flat-tabs tab-create-item">
                  <h4 className="title-create-item mg-20">Name</h4>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter a Collection Name"
                    onChange={changeValue}
                  />

                  <h4 className="title-create-item mg-t-20">Symbol</h4>
                  <input
                    type="text"
                    name="symbol"
                    placeholder="Enter a Collection Symbol"
                    onChange={changeValue}
                  />

                  <h4 className="title-create-item mg-t-20">Address</h4>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter a Collection Address"
                    onChange={changeValue}
                  />

                  <h4 className="title-create-item mg-t-20">Description</h4>
                  <textarea
                    placeholder="e.g. “This is very limited item”"
                    name="description"
                    onChange={changeValue}
                  ></textarea>

                  {/* <h4 className="title-create-item mg-t-20">Category</h4>
                  <p>
                    adding a category will help make your item discoverable on
                    vechain
                  </p>

                  <div className="seclect-box mg-t-20">
                    <div
                      id="item-create"
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
                        {abstraction == "" ? "Abstraction" : abstraction}
                      </Link>
                      <ul
                        className={
                          dropdownState === true ? "ulediter" : "displayEditer"
                        }
                      >
                        {data.map((item, index) => (
                          <li key={index} onClick={() => changeDataState(item)}>
                            <span>{item.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div> */}
                  {/* <h3 className="mg-t-20">Links</h3>
                  <fieldset className="input-group-vertical mg-t-20">
                    <div className="form-group">
                      <label className="sr-only">url</label>
                      <input
                        type="text"
                        placeholder="Facebook Link"
                        // name="title"
                        // onChange={changeValue}
                      />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">url</label>
                      <input
                        type="text"
                        placeholder="Twitter Link"
                        // name="title"
                        // onChange={changeValue}
                      />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">url</label>
                      <input
                        type="text"
                        placeholder="Youtube Link"
                        // name="title"
                        // onChange={changeValue}
                      />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">url</label>
                      <input
                        type="text"
                        placeholder="Instagram Link"
                        // name="title"
                        // onChange={changeValue}
                      />
                    </div>
                  </fieldset>
                  <h3 className="mg-t-20">Blockchain</h3>
                  <p className="mg-t-10">
                    Select the blockchain where you'd like new items from this
                    collection to be added by default.
                  </p>
                  <div className="inner-row-form style-2 mg-t-20">
                    <div className="seclect-box mg-t-20">
                      <div id="item-create" className="dropdown">
                        <Link
                          to="#"
                          className="btn-selector nolink"
                          onClick={() => setDropdownState1(!dropdownState1)}
                          style={{
                            width: "200px",
                          }}
                        >
                          {chainChannel === ""
                            ? "Select Blockchain"
                            : chainChannel}
                        </Link>
                        <ul
                          className={
                            dropdownState1 === true
                              ? "ulediter"
                              : "displayEditer"
                          }
                        >
                          {data1.map((item, index) => (
                            <li
                              key={index}
                              onClick={() => changeDataState1(item)}
                            >
                              <span>{item.label}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <h3 className="mg-t-20">Payment tokens</h3>
                    <p className="mg-t-20">
                      Select the blockcain where you'd like new items from this
                      collection to be added by default.
                    </p>
                  </div>
                  <div className="mg-t-20">
                    <TagInput
                      tags={tags}
                      onAdd={addTagHandler}
                      onDelete={deleteTagHandler}
                    />
                  </div> */}
                  {!loading && 
                    <button
                      className="tf-button-submit mg-t-37"
                      type="button"
                      onClick={() => onCreateCollec()}
                    >
                      Create
                    </button>
                  }
                  {loading && 
                    <span style={{marginLeft: '20px', fontSize: '18px'}}>
                      Processing {processed} / {totalSupply}
                    </span>
                  }
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

export default CreateCollection;
