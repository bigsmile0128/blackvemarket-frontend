import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import img1 from '../assets/images/blog/thumb-8.png'

const Contact01 = () => {
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Contact 1</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                    <li>Contact 1</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-contact tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="box-feature-contact">
                                <img src={img1} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <h2 className="tf-title-heading style-2 mg-bt-12">
                                Drop Up A Message
                            </h2>
                            <h5 className="sub-title style-1">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                            </h5>
                            <div className="form-inner">
                                <form id="contactform" noValidate="novalidate" className="form-submit" >
                                    <input id="name" name="name" tabIndex="1" aria-required="true" type="text" placeholder="Your Full Name" required />
                                    <input id="email" name="email" tabIndex="2"  aria-required="true" type="email" placeholder="Your Email Address" required />
                                    <div className="row-form style-2" id="subject">
                                        <select>
                                            <option value="1">Select subject</option>
                                            <option value="2">Select subject</option>
                                            <option value="3">Select subject</option>
                                        </select>
                                        <i className="icon-fl-down"></i>
                                    </div>
                                    <textarea id="message" name="message" tabIndex="3" aria-required="true" required placeholder="Message"></textarea>
                                    <button className="submit">Send message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Contact01;
