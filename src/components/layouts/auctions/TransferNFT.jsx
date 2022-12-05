import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { fromWei, numberRound, numberWithCommas } from "../../../utils/utils";
import { toast } from "react-toastify";
import { ethers } from "@vechain/ethers";

const TransferNFT = ({ show, setShow, item, onTransfer }) => {
  const [toAddress, setToAddress] = useState();
  const [isValid, setIsValid] = useState(true);

  const checkIsValid = (value) => {
    setToAddress(value);
    try {
        ethers.utils.getAddress(value);
        setIsValid(true);
    } catch (e) {
        setIsValid(false);
    }
  }

  const onSubmit = () => {
    if ( !isValid ) { 
      toast.error('Please input valid wallet address.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnFocusLoss: false,
        progress: undefined,
        theme: "colored",
      });
    } else {
      onTransfer(toAddress);
    }
  }

  useEffect(() => {
    setToAddress(null);
    setIsValid(true);
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
          <h3>Transfer token</h3>
          <p className="text-center">You are about to transfer {item?.name} token</p>
          <input type="text" className="form-control"
              placeholder='e.g. "0xF362..."' value={toAddress} onChange={(e) => checkIsValid(e.target.value)} />
          <div className="hr"></div>
          {!isValid &&
          <div className="d-flex justify-content-between">
              <p className="text-danger font-weight-bold"> Please input valid wallet address </p>
          </div> }
          <div className="d-flex justify-content-between">
              <p className="text-warning"> This action cannot be undone </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-warning"> Pay attention that the address is a VeChain Wallet address</p>
          </div>
          <Link to="#" className="btn btn-primary" onClick={() => onSubmit()}> Transfer </Link>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TransferNFT;
