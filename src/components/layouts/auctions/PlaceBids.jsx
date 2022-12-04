import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { fromWei, numberRound, numberWithCommas } from "../../../utils/utils";
import { toast } from "react-toastify";

const PlaceBids = ({ show, setShow, minPrice, connex, onBid }) => {

  const minVET = numberWithCommas(numberRound(minPrice, 2));
  const [price, setPrice] = useState();
  const [balance, setBalance] = useState();
  const [newBalance, setNewBalance] = useState();

  const setNumber = (value) => {
    const re = /^[0-9.\b]+$/;
    if (value === '' || re.test(value)) {
       setPrice(value);
       setNewBalance(fromWei(balance) - value);
    }
  }

  const onSubmit = () => {
    if ( price <= minPrice * 1 ) {
      toast.error('Price must be a at least ' + minVET + 'VET.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnFocusLoss: false,
          progress: undefined,
          theme: "colored",
      });
    } else {
      onBid(price);
    }
  }

  useEffect(() => {
    setPrice(null);
    const fetchBalance = async() => {
      const resp = await connex.thor.account(window.localStorage.getItem("vechain_signer")).get();
      setBalance(resp.balance);
      setNewBalance(fromWei(resp.balance));
    }
    fetchBalance();
  }, [show]);

  return (
    <div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        keyboard={false}
        size="lg"
        ariaLabelledBy="contained-modal-title-vcenter"
        className="popup"
      >
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <Modal.Body className="space-y-20 pd-40">
          <h3>Place a Bid</h3>
          <p className="text-center">You are about to place a bid</p>
          <input type="text" className="form-control"
              placeholder="e.g. 10.000" value={price} onChange={(e) => setNumber(e.target.value)} />
          <div className="hr"></div>
          <div className="d-flex justify-content-between">
              <p> You must bid at least:</p>
              <p className="text-right price color-popup"> {minVET} VET </p>
          </div>
          <div className="d-flex justify-content-between">
              <p> Your balance:</p>
              <p className="text-right price color-popup"> {numberWithCommas(numberRound((fromWei(balance)), 2))} VET </p>
          </div>
          <div className="d-flex justify-content-between">
              <p> New balance:</p>
              <p className="text-right price color-popup"> {numberWithCommas(numberRound(newBalance, 2))} VET </p>
          </div>
          <Link to="#" className="btn btn-primary" onClick={() => onSubmit()}> Place a bid</Link>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PlaceBids;
