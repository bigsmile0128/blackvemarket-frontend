import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../assets/images/icon/Wallet.png";
import icon2 from "../../assets/images/icon/Category.png";
import icon3 from "../../assets/images/icon/Image2.png";
import icon4 from "../../assets/images/icon/Bookmark.png";

const Create = () => {
  const data = [
    {
      title: "Set Up Your Wallet",
      description:
        "Find a wallet that is functional for VNFT purchasing. You may have a wallet holding VeChain at this point, but very few are actually set up to buy an VeChain NFT.",
      icon: icon1,
      link: "wallet-connect",
      colorbg: "icon-color1",
    },
    {
      title: "Create Your Collection",
      description:
        "Setting up your NFT collection and creating NFTs on NFTs is easy! This guide shows you how to set up your first collection",
      icon: icon2,
      link: "create-collection",
      colorbg: "icon-color2",
    },
    {
      title: "Create Your NFTs",
      description:
        "Create NFTs from every device you own, Max file size of 100 MB Per NFT",
      icon: icon3,
      link: "create-item",
      colorbg: "icon-color3",
    },
    {
      title: "List Them For Sale",
      description:
        "fixed-price listings, and declining-price listings. You can decide how you like it to happen !",
      icon: icon4,
      link: "explore-04",
      colorbg: "icon-color4",
    },
  ];
  return (
    <section className="tf-box-icon create style1 tf-section">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-live-auctions mg-bt-22">
              <h2 className="tf-title pb-17">Create And Sell Your NFTs</h2>
            </div>
          </div>
          {data.map((item, index) => (
            <CreateItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CreateItem = (props) => (
  <div className="col-lg-3 col-md-6 col-12">
    <div className="sc-box-icon">
      <div className="image">
        <div className={`icon-create ${props.item.colorbg}`}>
          <img src={props.item.icon} alt="" />
        </div>
      </div>
      <h3 className="heading">
        <Link to={props.item.link}>{props.item.title}</Link>
      </h3>
      <p className="content">{props.item.description}</p>
    </div>
  </div>
);

export default Create;
