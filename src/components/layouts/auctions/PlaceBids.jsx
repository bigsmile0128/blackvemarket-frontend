import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const PlaceBids = (props) => {
  const [data, setData] = useState({
    show: false,
    address: "",
  });

  const [dropdownCryptoState, setDropdownCryptoState] = useState(false);
  const [dropdownDateState, setDropdownDateState] = useState(false);
  const [cryptoUnit, setCryptoUnit] = useState("");
  const [dateUnit, setDateUnit] = useState("");

  const crypto_chains = [
    { id: 0, label: "WETH" },
    { id: 1, label: "VET" },
    { id: 1, label: "VTHO" },
  ];

  const date_amounts = [
    { id: 0, label: "1 day" },
    { id: 1, label: "3 days" },
    { id: 1, label: "7 days" },
    { id: 1, label: "1 month" },
    { id: 1, label: "Custom date" },
  ];

  useEffect(() => {
    setData(props.data);
  });

  const handleClose = () => {
    console.log("clicked");
    setData({ show: !data.show });
  };

  const changeCryptoState = (item) => {
    setDropdownCryptoState(false);
    setCryptoUnit(item.label);
  };

  const changeDateState = (item) => {
    setDropdownDateState(false);
    setDateUnit(item.label);
  };

  return (
    <div>
      <Modal
        show={data.show}
        onHide={handleClose}
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className="special-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Place a Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="m-title-create-item">Offer amount</p>
          <div className="row">
            <div className="col-md-3">
              <div className="seclect-box">
                <div id="item-create" className="dropdown">
                  <Link
                    to="#"
                    className="btn-selector nolink"
                    onClick={() => setDropdownCryptoState(!dropdownCryptoState)}
                    style={{
                      width: "180px",
                    }}
                  >
                    {cryptoUnit === "" ? "Cryptocurrency" : cryptoUnit}
                  </Link>
                  <ul
                    className={
                      dropdownCryptoState === true
                        ? "ulediter"
                        : "displayEditer"
                    }
                  >
                    {crypto_chains.map((item, index) => (
                      <li key={index} onClick={() => changeCryptoState(item)}>
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                name="crypto_amount"
                id="bid_expiration_date2"
                placeholder="Amount"
              />
            </div>
          </div>
          <p className="m-title-create-item">Offer expirateion</p>
          <div className="row">
            <div className="col-md-3">
              <div className="seclect-box">
                <div
                  id="item-create"
                  className="dropdown"
                  onClick={() => setDropdownDateState(!dropdownDateState)}
                >
                  <Link
                    to="#"
                    className="btn-selector nolink"
                    style={{
                      width: "180px",
                    }}
                  >
                    {dateUnit == "" ? "Make Auction" : dateUnit}
                  </Link>
                  <ul
                    className={
                      dropdownDateState === true ? "ulediter" : "displayEditer"
                    }
                  >
                    {date_amounts.map((item, index) => (
                      <li key={index} onClick={() => changeDateState(item)}>
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <input type="date" name="till-date" id="bid_expiration_date2" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="form-profile">
          <button className="tf-button-submit">Place a Bid</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PlaceBids;
