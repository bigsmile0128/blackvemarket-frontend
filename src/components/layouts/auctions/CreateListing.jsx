import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { toast } from 'react-toastify';

const CreateListing = ({ show, setShow }) => {
  const [price, setPrice] = useState(0);

  const onSubmit = () => {
    if ( price == 0 ) {
        toast.error('Please enter the amount.', {
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
        setShow(false);
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
        className="special-modal"
      >
        <Modal.Header>
          <Modal.Title>Create Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="m-title-create-item">Price</p>
          <div className="row">
            <div className="col-md-12">
              <input
                type="text"
                name="crypto_amount"
                id="bid_expiration_date2"
                placeholder="Amount"
                value={price}
                onChange={(e)=>setPrice(e.target.value.replace(/[^0-9]/g, ''))}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="form-profile">
          <button onClick={() => setShow(false)}>Dismiss</button>
          <button className="tf-button-submit" onClick={onSubmit}>Create</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateListing;
