import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/profileActions";
import menus from "../../pages/menu";
import DarkMode from "./DarkMode";
import logoheader from "../../assets/images/logo/logo2.png";
import logoheader2x from "../../assets/images/logo/logo2.png";
import logodark from "../../assets/images/logo/logo.png";
import logodark2x from "../../assets/images/logo/logo.png";
import imgsun from "../../assets/images/icon/sun.png";
import avt from "../../assets/images/avatar/avt-2.jpg";

const Header = () => {
  const userInfo = useSelector((store) => store.profile.profileInfo);
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector(".js-header");
    const scrollTop = window.scrollY;
    scrollTop >= 300
      ? header.classList.add("is-fixed")
      : header.classList.remove("is-fixed");
    scrollTop >= 400
      ? header.classList.add("is-small")
      : header.classList.remove("is-small");
  };

  const logout = () => {
    logoutToggle.current.classList.toggle("active");
    dispatch(actions.logout());
    window.localStorage.removeItem("vechain_signer");
    console.log("logout!!!");
  };

  const menuLeft = useRef(null);
  const btnToggle = useRef(null);
  const btnSearch = useRef(null);
  const logoutToggle = useRef(null);

  const menuToggle = () => {
    menuLeft.current.classList.toggle("active");
    btnToggle.current.classList.toggle("active");
  };

  const searchBtn = () => {
    btnSearch.current.classList.toggle("active");
  };

  const showLogoutToggle = () => {
    console.log("Disconnect!!!");
    logoutToggle.current.classList.toggle("active");
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  let walletButton;
  let signer = window.localStorage.getItem("vechain_signer");

  useEffect(() => {
    dispatch(actions.fetchProfile(signer));
  }, [signer])

  if (signer) {
    const firststr = signer.slice(0, 6);
    const laststr = signer.slice(-4);
    const walletaddr = firststr.concat("...", laststr);
    walletButton = (
      <>
        <span className="header-wallet-style" onClick={showLogoutToggle}>
          {walletaddr}
        </span>
        <div className="disconnect-wallet" ref={logoutToggle}>
          <button
            className="sc-button header-slider style style-1 wallet fl-button pri-1"
            onClick={logout}
          >
            <span>Disconnect</span>
          </button>
        </div>
      </>
    );
  } else {
    walletButton = (
      <Link
        to="/wallet-connect"
        className="sc-button header-slider style style-1 wallet fl-button pri-1"
      >
        <span>Wallet connect</span>
      </Link>
    );
  }

  return (
    <header id="header_main" className="header_1 js-header" ref={headerRef}>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div id="site-header-inner">
              <div className="wrap-box flex">
                <div id="site-logo" className="clearfix">
                  <div id="site-logo-inner">
                    <Link to="/" rel="home" className="main-logo">
                      <img
                        className="logo-dark"
                        id="logo_header"
                        src={logodark}
                        srcSet={`${logodark2x}`}
                        alt="nft-gaming"
                      />
                      <img
                        className="logo-light"
                        id="logo_header"
                        src={logoheader}
                        srcSet={`${logoheader2x}`}
                        alt="nft-gaming"
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className="mobile-button"
                  ref={btnToggle}
                  onClick={menuToggle}
                >
                  <span></span>
                </div>
                <nav id="main-nav" className="main-nav" ref={menuLeft}>
                  <ul id="menu-primary-menu" className="menu">
                    {menus.map((data, index) => (
                      <li
                        key={index}
                        onClick={() => handleOnClick(index)}
                        className={`menu-item menu-item-has-children ${
                          activeIndex === index ? "active" : ""
                        } `}
                      >
                        <Link to="#">{data.name}</Link>
                        <ul className="sub-menu">
                          {data.namesub.map((submenu) => (
                            <li
                              key={submenu.id}
                              className={
                                pathname === submenu.links
                                  ? "menu-item current-item"
                                  : "menu-item"
                              }
                            >
                              <Link to={submenu.links}>{submenu.sub}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="flat-search-btn flex">
                  <div className="header-search flat-show-search" id="s1">
                    <Link
                      to="#"
                      className="show-search header-search-trigger"
                      onClick={searchBtn}
                    >
                      <i className="far fa-search"></i>
                    </Link>
                    <div className="top-search" ref={btnSearch}>
                      <form
                        action="#"
                        method="get"
                        role="search"
                        className="search-form"
                      >
                        <input
                          type="search"
                          id="s"
                          className="search-field"
                          placeholder="Search..."
                          name="s"
                          title="Search for"
                          required=""
                        />
                        <button
                          className="search search-submit"
                          type="submit"
                          title="Search"
                        >
                          <i className="icon-fl-search-filled"></i>
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="sc-btn-top mg-r-12" id="site-header">
                    {walletButton}
                  </div>

                  <div className="admin_active" id="header_admin">
                    <div className="header_avatar">
                      <div className="price">
                        <span>
                          2.45 <strong>ETH</strong>{" "}
                        </span>
                      </div>
                      <img className="avatar" src={avt} alt="avatar" />
                      <div className="avatar_popup mt-20">
                        <div className="d-flex align-items-center copy-text justify-content-between">
                          <span> 13b9ebda035r178... </span>
                          <Link to="/" className="ml-2">
                            <i className="fal fa-copy"></i>
                          </Link>
                        </div>
                        <div className="d-flex align-items-center mt-10">
                          <img className="coin" src={imgsun} alt="/" />
                          <div className="info ml-10">
                            <p className="text-sm font-book text-gray-400">
                              Balance
                            </p>
                            <p className="w-full text-sm font-bold text-green-500">
                              16.58 VET
                            </p>
                          </div>
                        </div>
                        <div className="hr"></div>
                        <div className="links mt-20">
                          <Link to="#">
                            <i className="fab fa-accusoft"></i>{" "}
                            <span> My items</span>
                          </Link>
                          <a className="mt-10" href="/edit-profile">
                            <i className="fas fa-pencil-alt"></i>{" "}
                            <span> Edit Profile</span>
                          </a>
                          <a className="mt-10" href="/login" id="logout">
                            <i className="fal fa-sign-out"></i>{" "}
                            <span> Logout</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DarkMode />
    </header>
  );
};

export default Header;
