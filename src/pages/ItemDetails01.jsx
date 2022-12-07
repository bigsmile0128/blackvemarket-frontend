import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Connex from "@vechain/connex";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import LiveAuction from "../components/layouts/LiveAuction";
import PlaceBids from "../components/layouts/auctions/PlaceBids";
import CreateListing from "../components/layouts/auctions/CreateListing";
import Countdown from "react-countdown";
import * as actions from "../store/actions/collectionActions";
import * as profileActions from "../store/actions/profileActions";
import {
    uriToHttp,
    uriToImage,
    sliceAddress,
    toWei,
    numberWithCommas,
    numberRound,
    fromWei,
    toPriceFormat,
    toVETFormat,
} from "../utils/utils";
import { NODE, NETWORK, BACKEND_URL, S3_URL } from "../assets/constants";
import * as abis from "../assets/constants/abis";
import Ticker from "../utils/ticker";
import avt from "../assets/images/avatar/avt-author-tab.png";
import CustomImage from "../components/layouts/CustomImage";
import ChangePrice from "../components/layouts/auctions/ChangePrice";
import TransferNFT from "../components/layouts/auctions/TransferNFT";

const ItemDetails01 = () => {
    const { col_name, token_id } = useParams();
    const [show, setShow] = useState(false);
    const [isChangePrice, setIsChangePrice] = useState(false);
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
    const [isTransfer, setIsTransfer] = useState(false);

    const mainconnex = new Connex({
        node: "https://mainnet.vecha.in/",
        network: "main",
    });

    const connex = new Connex({
        node: NODE,
        network: NETWORK,
    });

    /*const fetchAuctionStatus = async() => {
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
  }*/

    const getAuction = async (address, token_id, event = 0) => {
        const resp = await actions.getItemAuction(address, token_id, event);
        await setOwner(resp.owner);
        await setUser(resp.ownerUser);
        await setAuctionSale(resp.auction);
        await setOfferList(resp.offers);
        await setHighestOffer(resp.highestOffer);
        await setSaleId(resp.saleId);
    };

    useEffect(() => {
        const fetchItemDetails = async (col_name, token_id) => {
            const resp = await actions.getItemDetails(col_name, token_id);
            if (resp) {
                await setItemDetails(resp.details);
                await setCollection(resp.collection);
                await getAuction(resp.collection.address, token_id);
            }
        };
        if (col_name && token_id) {
            fetchItemDetails(col_name, token_id);
        }
    }, [col_name, token_id]);

    const onHandlePlace = () => {
        setShow(true);
    };

    const onHandleBuy = async () => {
        if (saleId == 0) return;
        toast.info("Interfacing with wallet...", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnFocusLoss: false,
            closeOnClick: true,
            theme: "colored",
        });

        const abiBuyAuctionSale = abis.BlackVeMarket_ABI.find(
            ({ name }) => name === "buyAuctionSale"
        );
        const itemBuyAuctionSale = connex.thor
            .account(abis.BlackVeMarket_Address)
            .method(abiBuyAuctionSale)
            .value(toWei(auctionSale.price))
            .asClause(saleId);

        const buyAuctionSale = {
            ...itemBuyAuctionSale,
        };

        await setTxID(null);
        try {
            const clauses = [buyAuctionSale];
            const result = await connex.vendor
                .sign("tx", clauses)
                .signer(window.localStorage.getItem("vechain_signer"))
                .comment("Buy fixed item")
                .request();

            toast.info("Transaction is pending...", {
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
    };

    const onHandleClaim = async () => {
        if (saleId == 0) return;
        toast.info("Interfacing with wallet...", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnFocusLoss: false,
            closeOnClick: true,
            theme: "colored",
        });

        const abiClaim = abis.BlackVeMarket_ABI.find(
            ({ name }) => name === "claim"
        );
        const itemClaim = connex.thor
            .account(abis.BlackVeMarket_Address)
            .method(abiClaim)
            .asClause(saleId);

        const claimAuction = {
            ...itemClaim,
        };

        await setTxID(null);
        try {
            const clauses = [claimAuction];
            const result = await connex.vendor
                .sign("tx", clauses)
                .signer(window.localStorage.getItem("vechain_signer"))
                .comment("Cancel the auction")
                .request();

            toast.info("Transaction is pending...", {
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
    };

    const onTransfer = () => {
        setIsTransfer(true);
    };

    const onTransferNFT = async (toAddress) => {
        toast.info("Interfacing with wallet...", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnFocusLoss: false,
            closeOnClick: true,
            theme: "colored",
        });

        const abiTransferFrom = abis.ERC721Nft_ABI.find(
            ({ name }) => name === "transferFrom"
        );
        const itemTransferFrom = connex.thor
            .account(collection.address)
            .method(abiTransferFrom)
            .asClause(owner, toAddress, itemDetails.token_id);

        const transferFromAuction = {
            ...itemTransferFrom,
        };

        await setTxID(null);
        try {
            const clauses = [transferFromAuction];
            const result = await connex.vendor
                .sign("tx", clauses)
                .signer(window.localStorage.getItem("vechain_signer"))
                .comment(
                    "Transfer " +
                        itemDetails.token_id +
                        " token to " +
                        toAddress
                )
                .request();

            toast.info("Transaction is pending...", {
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
            task(result.txid, false);
        } catch (err) {
            console.log(err);
        }
    };

    const onHandleListing = () => {
        setIsListing(true);
    };

    const onCancelListing = async () => {
        if (saleId == 0) return;
        toast.info("Interfacing with wallet...", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnFocusLoss: false,
            closeOnClick: true,
            theme: "colored",
        });

        const abiCancelAuctionSale = abis.BlackVeMarket_ABI.find(
            ({ name }) => name === "cancelAuctionSale"
        );
        const itemCancelAuctionSale = connex.thor
            .account(abis.BlackVeMarket_Address)
            .method(abiCancelAuctionSale)
            .asClause(saleId);

        const cancelAuction = {
            ...itemCancelAuctionSale,
        };

        await setTxID(null);
        try {
            const clauses = [cancelAuction];
            const result = await connex.vendor
                .sign("tx", clauses)
                .signer(window.localStorage.getItem("vechain_signer"))
                .comment("Cancel the auction")
                .request();

            toast.info("Transaction is pending...", {
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
    };

    const onChangePrice = () => {
        setIsChangePrice(true);
    };

    const onUpdatPrice = async (value) => {
        toast.info("Interfacing with wallet...", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnFocusLoss: false,
            theme: "colored",
        });

        const abiChangeAuctionSale = abis.BlackVeMarket_ABI.find(
            ({ name }) => name === "changeAuctionSale"
        );
        const itemChangeAuctionSale = connex.thor
            .account(abis.BlackVeMarket_Address)
            .method(abiChangeAuctionSale)
            .asClause(saleId, toWei(value));
        const priceAuction = {
            ...itemChangeAuctionSale,
        };

        setIsListing(false);
        await setTxID(null);
        try {
            const clauses = [priceAuction];
            const result = await connex.vendor
                .sign("tx", clauses)
                .signer(window.localStorage.getItem("vechain_signer"))
                .comment("Change the bid price")
                .request();

            toast.info("Transaction is pending...", {
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
    };

    const onBid = async (value) => {
        toast.info("Interfacing with wallet...", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnFocusLoss: false,
            theme: "colored",
        });

        const abiBidAuctionSale = abis.BlackVeMarket_ABI.find(
            ({ name }) => name === "bidAuctionSale"
        );
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
                .sign("tx", clauses)
                .signer(window.localStorage.getItem("vechain_signer"))
                .comment("Place a bid on the auction")
                .request();

            toast.info("Transaction is pending...", {
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
    };

    const onListing = async (type, price, duration) => {
        toast.info("Interfacing with wallet...", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnFocusLoss: false,
            theme: "colored",
        });

        const abiApprove = abis.ERC721Nft_ABI.find(
            ({ name }) => name === "approve"
        );
        const itemApprove = connex.thor
            .account(collection.address)
            .method(abiApprove)
            .asClause(abis.BlackVeMarket_Address, token_id);

        const approveNFT = {
            ...itemApprove,
        };

        const abiCreateAuctionSale = abis.BlackVeMarket_ABI.find(
            ({ name }) => name === "createAuctionSale"
        );
        const itemCreateAuctionSale = connex.thor
            .account(abis.BlackVeMarket_Address)
            .method(abiCreateAuctionSale)
            .asClause(
                collection.address,
                token_id,
                type == 0 ? 0 : toWei(price),
                type == 1 ? 0 : toWei(price),
                duration * 60 * 60
            );
        const createAuction = {
            ...itemCreateAuctionSale,
        };

        setIsListing(false);
        await setTxID(null);
        try {
            const clauses = [approveNFT, createAuction];
            const result = await connex.vendor
                .sign("tx", clauses)
                .signer(window.localStorage.getItem("vechain_signer"))
                .comment("Creates and begins a new auction")
                .request();

            toast.info("Transaction is pending...", {
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
    };

    const task = async (txid, isEvent = true) => {
        const txVisitor = connex.thor.transaction(txid);
        let receipt;
        do {
            await connex.thor.ticker().next();
            receipt = await txVisitor.getReceipt();
        } while (!receipt);

        if (receipt.reverted) {
            const transactionData = await txVisitor.get();
            const explainedTransaction = await connex.thor
                .explain(transactionData.clauses)
                .caller(transactionData.origin)
                .execute();

            const revertReasons = explainedTransaction
                .map(({ revertReason }) => revertReason)
                .join(" ,");

            toast.warning("Transaction reverted. (" + revertReasons + ")", {
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
            const event = receipt.meta.txID;
            await setShow(false);
            await setIsListing(false);
            await setIsChangePrice(false);
            await setIsTransfer(false);

            setTimeout(async () => {
                if (isEvent)
                    await getAuction(collection.address, token_id, event);
                else await getAuction(collection.address, token_id);

                toast.success("Transaction success", {
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
            }, 3000);
        }
        /*if ( ticker ) {
      ticker.stop();
    }
    ticker = new Ticker(connex);
    const txVisitor = connex.thor.transaction(txid);
    ticker.tick(async () => {
      const t = await txVisitor.getReceipt();

      if (t) {
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
          const event = t.meta.txID;
          await getAuction(collection.address, token_id, event);
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
          await setShow(false);
          await setIsListing(false);
          await setIsChangePrice(false);
        }
        setTxID(null);
        ticker && ticker.stop();
      }
    })*/
    };

    const updateStatus = () => {
        let isLiveAuction = false;
        if (auctionSale) {
            isLiveAuction =
                Date.now() <=
                auctionSale.startedAt * 1000 + auctionSale.duration * 1000;
        }

        let haveBidder = false;
        if (highestOffer && highestOffer.price > 0) haveBidder = true;

        if (owner === signer) {
            setStatus(1);
        } else if (auctionSale && auctionSale.isFinished == false) {
            const seller = auctionSale.seller.toLowerCase();
            if (auctionSale.isAuction) {
                if (isLiveAuction) {
                    if (seller === signer && !haveBidder) {
                        setStatus(2);
                    } else if (seller !== signer) {
                        setStatus(4);
                    }
                } else {
                    if (seller === signer && !haveBidder) {
                        setStatus(3);
                    } else if (
                        seller !== signer &&
                        highestOffer &&
                        highestOffer.buyer.toLowerCase() === signer
                    ) {
                        setStatus(5);
                    }
                }
            } else {
                if (seller === signer) setStatus(7);
                else setStatus(6);
            }
        } else setStatus(0);
    };

    useEffect(() => {
        updateStatus();
    }, [txid, owner, signer, saleId, auctionSale, highestOffer]);

    const getDateString = (_date) => {
        const date = new Date(_date);
        const dateString = date.toDateString().split(" ");
        const hour = date.getHours();
        const min = date.getMinutes();
        return (
            dateString[1] +
            " " +
            dateString[2] +
            ", " +
            dateString[3] +
            " " +
            (hour > 12 ? hour - 12 : hour) +
            ":" +
            min +
            " " +
            (hour > 12 ? "PM" : "AM")
        );
    };

    return (
        itemDetails &&
        collection && (
            <div className="item-details">
                <ToastContainer />
                <Header />
                <section className="flat-title-page inner">
                    <div className="overlay"></div>
                    <div className="themesflat-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-title-heading mg-bt-12">
                                    <h1 className="heading text-center">
                                        {itemDetails?.name
                                            ? itemDetails?.name
                                            : collection?.name +
                                              "#" +
                                              itemDetails?.token_id}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="tf-section tf-item-details">
                    <div
                        className="themesflat-container"
                        style={{ marginTop: "3rem" }}
                    >
                        <div className="row" style={{ paddingBottom: "8rem" }}>
                            <div className="col-xl-6 col-md-12">
                                <div
                                    className="content-left"
                                    style={{ height: "100%" }}
                                >
                                    <div
                                        className="media"
                                        style={{ height: "100%" }}
                                    >
                                        {itemDetails && (
                                            <CustomImage
                                                src={uriToImage(
                                                    itemDetails.image
                                                )}
                                                alt="Axies"
                                                customClassName="mx-auto"
                                                className="b-radius"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="content-right">
                                    <div className="sc-item-details">
                                        <h2 className="style2">
                                            {" "}
                                            {itemDetails?.name
                                                ? itemDetails?.name
                                                : collection?.name +
                                                  "#" +
                                                  itemDetails?.token_id}{" "}
                                        </h2>
                                        <Link
                                            to={`/collection/${collection?.symbol}`}
                                        >
                                            <h6 className="style2">
                                                {" "}
                                                {collection?.name}{" "}
                                            </h6>
                                        </Link>
                                        <p className="content-description mt-3">
                                            {itemDetails?.description}
                                        </p>
                                        {owner && (
                                            <div className="client-infor sc-card-product mt-5">
                                                <div className="meta-info">
                                                    <div className="author">
                                                        <div className="avatar">
                                                            <img
                                                                src={
                                                                    user &&
                                                                    user.avatar
                                                                        ? S3_URL +
                                                                          user.avatar
                                                                        : avt
                                                                }
                                                                alt="Avatar"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <span>
                                                                Owned By
                                                            </span>
                                                            <h6>
                                                                {" "}
                                                                <Link
                                                                    to={`/profile/${
                                                                        user
                                                                            ? user.address
                                                                            : owner
                                                                    }`}
                                                                >
                                                                    {owner ===
                                                                    signer
                                                                        ? "You"
                                                                        : user?.name ??
                                                                          owner}
                                                                </Link>{" "}
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="sc-card-detail">
                                            <div className="content-row-item">
                                                <span>Name</span>
                                            </div>
                                            <div className="content-row-detail">
                                                {itemDetails.name
                                                    ? itemDetails.name
                                                    : collection.name +
                                                      "#" +
                                                      itemDetails.token_id}
                                            </div>
                                        </div>
                                        <div className="sc-card-detail">
                                            <div className="content-row-item">
                                                <span>Token ID</span>
                                            </div>
                                            <div className="content-row-detail">
                                                {itemDetails.token_id}
                                            </div>
                                        </div>
                                        <div className="sc-card-detail">
                                            <div className="content-row-item">
                                                <span>Address</span>
                                            </div>
                                            <div className="content-row-detail">
                                                {collection.address &&
                                                    sliceAddress(
                                                        collection.address
                                                    )}
                                            </div>
                                        </div>
                                        {itemDetails.rank && (
                                            <div className="sc-card-detail">
                                                <div className="content-row-item">
                                                    <span>Rank</span>
                                                </div>
                                                <div className="content-row-detail">
                                                    {itemDetails.rank}
                                                </div>
                                            </div>
                                        )}
                                        {collection?.royalty > 0 && (
                                            <div className="sc-card-detail">
                                                <div className="content-row-item">
                                                    <span>
                                                        Creator sRoyalty
                                                    </span>
                                                </div>
                                                <div className="content-row-detail">
                                                    {collection?.royalty}%
                                                </div>
                                            </div>
                                        )}
                                        <hr />
                                        {owner === abis.BlackVeMarket_Address &&
                                            auctionSale &&
                                            auctionSale.isAuction === true &&
                                            auctionSale.isFinished === false &&
                                            Date.now() <=
                                                auctionSale.startedAt * 1000 +
                                                    auctionSale.duration *
                                                        1000 && (
                                                <div className="meta-item-details style2">
                                                    <div className="item meta-price">
                                                        <span className="heading">
                                                            {highestOffer &&
                                                            highestOffer.offer >
                                                                0
                                                                ? "Highest Bid"
                                                                : "Reserve Price"}
                                                        </span>
                                                        <div className="price">
                                                            <div className="price-box">
                                                                <h5>
                                                                    {" "}
                                                                    {toVETFormat(
                                                                        highestOffer &&
                                                                            highestOffer.offer >
                                                                                0
                                                                            ? highestOffer.offer
                                                                            : auctionSale.price
                                                                    )}{" "}
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item count-down">
                                                        <span className="heading style-2">
                                                            Ends in
                                                        </span>
                                                        <Countdown
                                                            date={
                                                                auctionSale.startedAt *
                                                                    1000 +
                                                                auctionSale.duration *
                                                                    1000
                                                            }
                                                        >
                                                            <span>
                                                                Auction is
                                                                closed.
                                                            </span>
                                                        </Countdown>
                                                    </div>
                                                </div>
                                            )}
                                        {(status == 6 || status == 7) && (
                                            <div className="meta-item-details style2">
                                                <div className="item meta-price">
                                                    <span className="heading">
                                                        Price
                                                    </span>
                                                    <div className="price">
                                                        <div className="price-box">
                                                            <h5>
                                                                {" "}
                                                                {toVETFormat(
                                                                    auctionSale.price
                                                                )}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {saleId > 0 &&
                                            highestOffer &&
                                            highestOffer.buyer.toLowerCase() ==
                                                signer && (
                                                <p className="sc-highest-bidder">
                                                    You are the highest bidder.
                                                </p>
                                            )}
                                        <div className="d-flex w-100">
                                            {status == 1 && (
                                                <Link
                                                    to="#"
                                                    onClick={onHandleListing}
                                                    className="sc-button mx-5 w-100 fl-button pri-3"
                                                >
                                                    <span>Sell</span>
                                                </Link>
                                            )}
                                            {status == 1 && (
                                                <Link
                                                    to="#"
                                                    onClick={onTransfer}
                                                    className="sc-button mx-5 w-100 fl-button pri-3"
                                                >
                                                    <span>Transfer</span>
                                                </Link>
                                            )}
                                            {(status == 2 ||
                                                status == 3 ||
                                                status == 7) && (
                                                <Link
                                                    to="#"
                                                    onClick={onCancelListing}
                                                    className="sc-button mx-5 w-100 fl-button pri-3"
                                                >
                                                    <span>Cancel Sale</span>
                                                </Link>
                                            )}
                                            {status == 2 && (
                                                <Link
                                                    to="#"
                                                    onClick={onChangePrice}
                                                    className="sc-button mx-5 w-100 fl-button pri-3"
                                                >
                                                    <span>Change Price</span>
                                                </Link>
                                            )}
                                            {(status == 4 || status == 5) &&
                                                (status == 4 ? (
                                                    <Link
                                                        to="#"
                                                        onClick={onHandlePlace}
                                                        className="sc-button mx-5 w-100 fl-button pri-3"
                                                    >
                                                        <span>Place a bid</span>
                                                    </Link>
                                                ) : (
                                                    <Link
                                                        to="#"
                                                        onClick={onHandleClaim}
                                                        className="sc-button mx-5 w-100 fl-button pri-3"
                                                    >
                                                        <span>Claim</span>
                                                    </Link>
                                                ))}
                                            {status == 6 && (
                                                <Link
                                                    to="#"
                                                    onClick={onHandleBuy}
                                                    className="sc-button mx-5 w-100 fl-button pri-3"
                                                >
                                                    <span>Buy Now</span>
                                                </Link>
                                            )}
                                        </div>
                                        <div className="flat-tabs themesflat-tabs">
                                            <Tabs>
                                                <TabList>
                                                    <Tab>Properties</Tab>
                                                    <Tab>Bids</Tab>
                                                    <Tab>Details</Tab>
                                                </TabList>

                                                <TabPanel>
                                                    {itemDetails.attributes.map(
                                                        (item, idx) => (
                                                            <div
                                                                className="sc-card-detail"
                                                                key={idx}
                                                            >
                                                                <div className="content-row-item">
                                                                    <span>
                                                                        {item[
                                                                            "trait_type"
                                                                        ]
                                                                            ? item[
                                                                                  "trait_type"
                                                                              ]
                                                                            : item[
                                                                                  "traitType"
                                                                              ]}
                                                                    </span>
                                                                </div>
                                                                <div className="content-row-detail">
                                                                    {
                                                                        item[
                                                                            "value"
                                                                        ]
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </TabPanel>
                                                <TabPanel>
                                                    <ul className="bid-history-list">
                                                        {offerList.map(
                                                            (item, index) => (
                                                                <li
                                                                    key={index}
                                                                    item={item}
                                                                >
                                                                    <div className="content">
                                                                        <div className="client">
                                                                            <div className="sc-author-box style-2 w-auto">
                                                                                <div className="author-avatar">
                                                                                    <Link
                                                                                        to={`/profile/${item.buyer}`}
                                                                                    >
                                                                                        <img
                                                                                            src={
                                                                                                item.user &&
                                                                                                item
                                                                                                    .user
                                                                                                    .avatar
                                                                                                    ? S3_URL +
                                                                                                      item
                                                                                                          .user
                                                                                                          .avatar
                                                                                                    : avt
                                                                                            }
                                                                                            alt="User Avatar"
                                                                                            className="avatar"
                                                                                        />
                                                                                    </Link>
                                                                                    <div className="badge"></div>
                                                                                </div>
                                                                                <div className="author-infor">
                                                                                    <div className="name">
                                                                                        <h6>
                                                                                            <Link to="/author-02">
                                                                                                {item.buyer.toLowerCase() ==
                                                                                                signer
                                                                                                    ? "You"
                                                                                                    : item.user &&
                                                                                                      item
                                                                                                          .user
                                                                                                          .name
                                                                                                    ? item
                                                                                                          .user
                                                                                                          .name
                                                                                                    : item.buyer}{" "}
                                                                                            </Link>
                                                                                        </h6>
                                                                                    </div>
                                                                                    <span className="time">
                                                                                        {getDateString(
                                                                                            item.bidAt *
                                                                                                1000
                                                                                        )}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="price">
                                                                            <h5>
                                                                                {toVETFormat(
                                                                                    item.price
                                                                                )}
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="provenance">
                                                        <p>
                                                            {
                                                                collection.description
                                                            }
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
                {auctionSale && auctionSale.isAuction && (
                    <PlaceBids
                        show={show}
                        setShow={setShow}
                        minPrice={
                            highestOffer && highestOffer.offer > 0
                                ? highestOffer.offer
                                : auctionSale.price
                        }
                        connex={connex}
                        onBid={onBid}
                    />
                )}
                {auctionSale && (
                    <ChangePrice
                        show={isChangePrice}
                        setShow={setIsChangePrice}
                        minPrice={auctionSale.price}
                        onChange={onUpdatPrice}
                    />
                )}
                <CreateListing
                    show={isListing}
                    setShow={setIsListing}
                    onListing={onListing}
                    collection={collection}
                />
                <TransferNFT
                    show={isTransfer}
                    setShow={setIsTransfer}
                    item={itemDetails}
                    onTransfer={onTransferNFT}
                />
                <LiveAuction />
                <Footer />
            </div>
        )
    );
};

export default ItemDetails01;
