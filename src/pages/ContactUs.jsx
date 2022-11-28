import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import * as actions from '../store/actions/otherActions';

const ContactUs = () => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((store) => store.profile.isAuthenticated);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        subject: "",
        message: "",
        wallet_addr: window.localStorage.getItem("vechain_signer")
    });

    // useEffect = (() => {
    //     if (isAuthenticated) {
    //         const _signer = window.localStorage.getItem("vechain_signer");
    //         setFormData({ ...formData, wallet_addr: _signer });
    //     }
    // }, [isAuthenticated])

    const changeValue = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async () => {
        const result = await actions.contactUs(formData);
        console.log("Contact Us: ", result)

        if (result) {
            if (result.status === "success") {
                toast.success(result.msg);
                // navigate("/");
            } else if (result.status === "warning"){
                toast.warning(result.msg);
            }
            else {
                toast.error(result.msg);
            }
        }
    }

    return (
        <div>
            <Header />
            <ToastContainer />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Contact Us</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tf-contact tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="flat-form">
                                <h2 className="tf-title-heading ct style-2 mg-bt-12">
                                    Drop Up A Message
                                </h2>
                                <br/>
                                {/* <h5 className="sub-title ct style-1 pad-0-15">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                                </h5> */}
                                <div className="form-inner">
                                    <form id="contactform" noValidate="novalidate" className="form-submit">
                                        <input name="fullname" aria-required="true" required type="text" onChange={changeValue} placeholder="Your Full Name" />
                                        <input name="email" aria-required="true" required type="email" onChange={changeValue} placeholder="Your Email Address" />
                                        <input name="subject" aria-required="true" required type="text" onChange={changeValue} placeholder="Subject Name" />
                                         {/* <div className="row-form style-2">
                                            <select id="subject">
                                                <option value="1">Select subject</option>
                                                <option value="2">Select subject</option>
                                                <option value="3">Select subject</option>
                                            </select>
                                            <i className="icon-fl-down"></i>
                                         </div> */}
                                        <textarea name="message" aria-required="true" required onChange={changeValue} placeholder="Message"></textarea>
                                        <button type="button" className="submit" onClick={()=>handleSubmit()}>Send message</button>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default ContactUs;
