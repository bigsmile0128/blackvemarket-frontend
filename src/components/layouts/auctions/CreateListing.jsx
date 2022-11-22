import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { numberRound, numberWithCommas } from "../../../utils/utils";

const CreateListing = ({ show, setShow, onListing }) => {
  const [price, setPrice] = useState();
  const [type, setType] = useState(0);
  const [amount, setAmount] = useState();
  const [endsOn, setEndsOn] = useState();
  const [duration, setDuration] = useState(1);

  const setNumber = (value) => {
    const re = /^[0-9.\b]+$/;
    if (value === '' || re.test(value)) {
       setPrice(value);
       var _amount = value * 95 / 100;
       setAmount(numberRound(_amount, 2));
    }
  }

  useEffect(() => {
    setPrice(null);
    setType(0);
    setAmount(null);
    setDuration(1);
  }, [show]);

  useEffect(() => {
    const endAt = Date.now() + 60 * 60 * 1000* duration;
    const date = new Date(endAt);
    const dateString = date.toDateString().split(" ");
    const hour = date.getHours();
    const min = date.getMinutes();
    const outputString = dateString[1] + " " + dateString[2] + ", " + dateString[3] + " " + (hour>12?(hour-12):hour) + ":" + min + " " + (hour>12?"PM":"AM");
    setEndsOn(outputString);
  }, [duration]);

  const onSubmit = () => {
    if ( price * 1 === 0 ) {
        toast.error('Price must be a positive number.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    } else {
        onListing(type, price, duration);
        // setShow(false);
    }
  }

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
          <h3>Sell</h3>
          <div className="flex">
            <button className={`btn ${type===0?'btn-info':'btn-none'} popup-font w-auto mr-5`} onClick={() => setType(0)}> Fixed Price</button>
            <button className={`btn ${type===1?'btn-info':'btn-none'} popup-font w-auto mr-5`} onClick={() => setType(1)}> Highest Bid</button>
          </div>
          {type === 0 ?
            <>
              <p className="">Price</p>
              <input type="text" className="form-control"
                placeholder="e.g. 10.000" value={price} onChange={(e) => setNumber(e.target.value)} />
              <div className="hr"></div>
              <div className="d-flex justify-content-between">
                  <p> Marketplace Fee:</p>
                  <p className="text-right price color-popup"> 5% </p>
              </div>
              <div className="d-flex justify-content-between">
                  <p> You will receive</p>
                  <p className="text-right price color-popup"> {amount>0?(numberWithCommas(amount) + ' VET'):''} </p>
              </div>
            </>
          :
            <>
                <p className="">Price</p>
                <input type="text" className="form-control"
                  placeholder="e.g. 10.000" value={price} onChange={(e) => setNumber(e.target.value)} />
                <p className="">Duration</p>
                <div className="select-box">
                  <select onChange={(e) => setDuration(e.target.value)}>
                      <option value="1">1 hour</option>
                      <option value="2">2 hours</option>
                      <option value="6">6 hours</option>
                      <option value="12">12 hours</option>
                      <option value="24">24 hours</option>
                      <option value="48">2 days</option>
                      <option value="96">4 days</option>
                      <option value="168">7 days</option>
                  </select>
                </div>
                <div className="hr"></div>
                <div className="d-flex justify-content-between">
                    <p> Marketplace Fee:</p>
                    <p className="text-right price color-popup"> 5% </p>
                </div>
                <div className="d-flex justify-content-between">
                    <p> Ends on</p>
                    <p className="text-right price color-popup"> {endsOn} </p>
                </div>
                <div className="d-flex justify-content-between">
                    <p> You will receive</p>
                    <p className="text-right price color-popup"> {amount>0?(numberWithCommas(amount) + ' VET'):''} </p>
                </div>
              </>
            }
          <Link to="#" className="btn btn-primary" onClick={() => onSubmit()}> Confirm</Link>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CreateListing;
