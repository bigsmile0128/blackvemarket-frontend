import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { fromWei, numberRound, numberWithCommas } from "../../../utils/utils";
import { toast } from "react-toastify";
import { Accordion } from "react-bootstrap-accordion";

const FilterTraits = ({ show, setShow, traits, values, toggleValues, reset }) => {

    const onChecked = (val) => {
        toggleValues(val)
    }

    const onReset = () => {
        reset();
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
                    <h3>Filter</h3>
                    <div className="category-list px-5">
                        <div className="widget widget-category mgbt-24 boder-bt">
                            <div className="content-wg-category">
                                <Accordion title="Status" show={true}>
                                    <form action="#" className="pt-3">
                                        <div>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    defaultChecked={values["onSale"]}
                                                    name="onSale"
                                                    value="onSale"
                                                    onChange={() => onChecked("onSale")}
                                                />
                                                <span className="btn-checkbox"></span>
                                                On Sale
                                            </label>
                                            <br />
                                        </div>
                                        <div>
                                            <label>
                                                Not On Sale
                                                <input
                                                    type="checkbox"
                                                    defaultChecked={values["notOnSale"]}
                                                    name="notOnSale"
                                                    value="notOnSale"
                                                    onChange={() => onChecked("notOnSale")}
                                                />
                                                <span className="btn-checkbox"></span>
                                            </label>
                                            <br />
                                        </div>
                                    </form>
                                </Accordion>
                            </div>
                        </div>
                        {traits.map((item, index) => (
                            <div
                                className="widget widget-category mgbt-24 boder-bt"
                                key={index}
                            >
                                <div className="content-wg-category">
                                    <Accordion title={item.name} show={false}>
                                        <form action="#" className="pt-3">
                                            {item.values.map((field, index) => (
                                                <div key={index}>
                                                    <label className="w-100">
                                                        <input
                                                            type="checkbox"
                                                            defaultChecked={values[item["name"] + "#" + field["name"]]}
                                                            name={field["name"]}
                                                            value={field["name"]}
                                                            onChange={() => onChecked(item["name"] + "#" + field["name"])}
                                                        />
                                                        <span className="btn-checkbox"></span>
                                                        <div class="d-flex">
                                                            <span className="dotafter">{field["name"]}</span>
                                                            <span style={{ flexShrink: 0 }}>{field["value"]}</span>
                                                        </div>
                                                    </label>
                                                    <br />
                                                </div>
                                            ))}
                                        </form>
                                    </Accordion>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link to="#" className="btn btn-danger" onClick={() => onReset()}> Reset </Link>
                    <Link to="#" className="btn btn-primary" onClick={() => setShow(false)}> Close </Link>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default FilterTraits;
