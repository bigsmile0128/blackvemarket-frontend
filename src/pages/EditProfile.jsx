import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import avt from '../assets/images/avatar/avata_profile.jpg'
import bg1 from '../assets/images/backgroup-secsion/option1_bg_profile.jpg'
import bg2 from '../assets/images/backgroup-secsion/option2_bg_profile.jpg'

const EditProfile = () => {
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Edit Profile</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>Edit Profile</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <div className="tf-create-item tf-section">
                <div className="themesflat-container">
                    <div className="row">
                         <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="sc-card-profile text-center">
                                <div className="card-media">
                                    <img id="profileimg" src={avt} alt="Axies" />                         
                                </div>
                            <div id="upload-profile">
                                <Link to="#" className="btn-upload">
                                    Upload New Photo </Link>
                                    <input id="tf-upload-img" type="file" name="profile" required="" />
                            </div>
                            <Link to="#" className="btn-upload style2">
                                Delete</Link>
                            </div>
                         </div>
                         <div className="col-xl-9 col-lg-8 col-md-12 col-12">
                             <div className="form-upload-profile">
                                <h4 className="title-create-item">Choice your Cover image</h4>
                                <div className="option-profile clearfix">
                                    <form action="#">
                                        <label className="uploadFile">
                                            <input type="file" className="inputfile form-control" name="file" />
                                        </label>
                                    </form>
                                    <div className="image">
                                        <img src={bg1} alt="Axies" />
                                    </div>
                                    <div className="image style2">
                                        <img src={bg2} alt="Axies" />
                                    </div>
                                </div>

                                <form action="#" className="form-profile">
                                    <div className="form-infor-profile">
                                        <div className="info-account">
                                            <h4 className="title-create-item">Account info</h4>                                    
                                                <fieldset>
                                                    <h4 className="title-infor-account">Display name</h4>
                                                    <input type="text" placeholder="Trista Francis" required />
                                                </fieldset>
                                                <fieldset>
                                                    <h4 className="title-infor-account">Custom URL</h4>
                                                    <input type="text" placeholder="Axies.Trista Francis.com/" required />
                                                </fieldset>
                                                <fieldset>
                                                    <h4 className="title-infor-account">Email</h4>
                                                    <input type="email" placeholder="Enter your email" required />
                                                </fieldset>
                                                <fieldset>
                                                    <h4 className="title-infor-account">Bio</h4>
                                                    <textarea tabIndex="4" rows="5" required></textarea>
                                                </fieldset> 
                                        </div>
                                        <div className="info-social">
                                            <h4 className="title-create-item">Your Social media</h4>                                    
                                                <fieldset>
                                                    <h4 className="title-infor-account">Facebook</h4>
                                                    <input type="text" placeholder="Facebook username" required />
                                                    <Link to="#" className="connect"><i className="fab fa-facebook"></i>Connect to face book</Link>
                                                </fieldset>
                                                <fieldset>
                                                    <h4 className="title-infor-account">Twitter</h4>
                                                    <input type="text" placeholder="Twitter username" required />
                                                    <Link to="#" className="connect"><i className="fab fa-twitter"></i>Connect to Twitter</Link>
                                                </fieldset>
                                                <fieldset>
                                                    <h4 className="title-infor-account">Discord</h4>
                                                    <input type="text" placeholder="Discord username" required />
                                                    <Link to="#" className="connect"><i className="icon-fl-vt"></i>Connect to Discord</Link>
                                                </fieldset>
                                        </div> 
                                    </div>
                                    <button className="tf-button-submit mg-t-15" type="submit">
                                        Update Profile
                                    </button>           
                                </form>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default EditProfile;
