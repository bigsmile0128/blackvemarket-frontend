import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { fromWei, numberRound, numberWithCommas, toWei } from "../../../utils/utils";
import { toast } from "react-toastify";
import * as abis from "../../../assets/constants/abis";

const MakerOffer = ({ show, setShow, offer, onMake, onCancel, connex }) => {

    const [price, setPrice] = useState();
    const [balance, setBalance] = useState();

    const setNumber = (value) => {
        const re = /^[0-9.\b]+$/;
        if (value === '' || re.test(value)) {
            setPrice(value);
        }
    }

    const onCancelOffer = () => {
        onCancel(offer);
    }

    const onSubmit = () => {
        if (toWei(price) > balance * 1) {
            toast.error('Price must be a at most ' + numberWithCommas(numberRound((fromWei(balance)), 2)) + ' vVET.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnFocusLoss: false,
                progress: undefined,
                theme: "colored",
            });
        } else {
            onMake(offer, price);
        }
    }

    useEffect(() => {
        if (offer) {
            setPrice(offer.price);
        } else {
            setPrice(null);
        }
        const fetchBalance = async () => {
            const abiBalanceOf = abis.vVET_ABI.find(({ name }) => name === "balanceOf");

            const result = await connex.thor
                .account(abis.vVET_Address)
                .method(abiBalanceOf)
                .call(window.localStorage.getItem("vechain_signer"));

            setBalance(result.decoded[0]);
        }
        fetchBalance();
    }, [show, offer]);

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
                    <h3>{offer ? 'Update offer' : 'Make an offer'}</h3>
                    <p className="text-center">{offer ? 'You are about to update offer' : 'You are about to make an offer'}</p>
                    <input type="text" className="form-control"
                        placeholder="e.g. 10.000" value={price} onChange={(e) => setNumber(e.target.value)} />
                    <div className="d-flex justify-content-between">
                        <p> Your balance:</p>
                        <p className="text-right price color-popup"> {numberWithCommas(numberRound((fromWei(balance)), 2))} vVET </p>
                    </div>
                    <Link to="#" className="btn btn-primary" onClick={() => onSubmit()}> {offer ? 'Update offer' : 'Make an offer'} </Link>
                    {offer &&
                        <Link to="#" className="btn btn-danger" onClick={() => onCancelOffer()}> Cancel Offer </Link>
                    }
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default MakerOffer;
