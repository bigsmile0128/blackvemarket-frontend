import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { toVETFormat } from "../../../utils/utils";
import { toast } from "react-toastify";

const ChangePrice = ({ show, setShow, minPrice, onChange }) => {

  const [price, setPrice] = useState();

  const setNumber = (value) => {
    const re = /^[0-9.\b]+$/;
    if (value === '' || re.test(value)) {
       setPrice(value);
    }
  }

  const onSubmit = () => {
    if ( price <= minPrice ) {
      toast.error('Price must be a at least ' + toVETFormat(minPrice), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnFocusLoss: false,
          progress: undefined,
          theme: "colored",
      });
    } else {
      onChange(price);
    }
  }

  useEffect(() => {
    setPrice(null);
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
          <h3>Change Price</h3>
          <p className="text-center">You are about to change bid price</p>
          <input type="text" className="form-control"
              placeholder="e.g. 10.000" value={price} onChange={(e) => setNumber(e.target.value)} />
          <div className="hr"></div>
          <div className="d-flex justify-content-between">
              <p> You must change price at least:</p>
              <p className="text-right price color-popup"> {toVETFormat(minPrice)} </p>
          </div>
          <Link to="#" className="btn btn-primary" onClick={() => onSubmit()}> Change Price </Link>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ChangePrice;
