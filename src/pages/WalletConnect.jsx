import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Connex from "@vechain/connex";
import * as actions from "../store/actions/profileActions";
import img1 from "../assets/images/icon/VeThor.jpg";
import img2 from "../assets/images/icon/Sync2.jpg";
const vendor = new Connex.Vendor("test");

const WalletConnect = () => {
  const [data] = useState([
    {
      img: img1,
      title: "VeChainThor Mobile wallet",
      description:
        "Official VeChain wallet for mobile. Ios and android supported",
    },
    {
      img: img2,
      title: "Sync2",
      description: " Official VeChain wallet for Desktop use.",
    },
  ]);

  const dispatch = useDispatch();

  const signCertID = () => {
    vendor
      .sign("cert", {
        purpose: "identification",
        payload: {
          type: "text",
          content:
            "Welcome to BlackVeMarket. The place to be if you like NFTs other markets can't afford.",
        },
      })
      .request()
      .then((r) => {
        window.localStorage.setItem("vechain_signer", r.annex.signer);
        dispatch(actions.userRegister(r.annex.signer));
      })
      .catch((e) => alert("error: " + e.message));
  };

  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Connect Wallet</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
                  <li>Connect Wallet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-connect-wallet tf-section">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <h2 className="tf-title-heading ct style-2 mg-bt-12">
                Connect Your Wallet
              </h2>
              <h5 className="sub-title ct style-1 pad-400">
                We do not own any of your personal information. If someone ever
                asks about it in name of BlackV please report.
              </h5>
            </div>
            <div className="col-md-12">
              <div className="sc-box-icon-inner style-2">
                {data.map((item, index) => (
                  <div onClick={signCertID} key={index} className="sc-box-icon">
                    <div className="img">
                      <img src={item.img} alt="Axies" />
                    </div>
                    <h4 className="heading">{item.title} </h4>
                    <p className="content">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WalletConnect;
