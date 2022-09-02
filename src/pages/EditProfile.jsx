import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import avt from "../assets/images/avatar/avata_profile.jpg";
import bg1 from "../assets/images/backgroup-secsion/option1_bg_profile.jpg";
import bg2 from "../assets/images/backgroup-secsion/option2_bg_profile.jpg";

const EditProfile = () => {
  const [coverImg, setCoverImg] = useState(null);
  const [photo, setPhoto] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    customURL: "",
    email: "",
    bio: "",
    facebook: "",
    twitter: "",
    discord: "",
  });

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const ontUploadCoverImg = (e) => {
    const path = URL.createObjectURL(e.target.files[0]);
    setCoverImg(path);
    console.log(URL.createObjectURL(e.target.files[0]));
  };

  const onUploadPhoto = (e) => {
    const path = URL.createObjectURL(e.target.files[0]);
    setPhoto(path);
    // const file = e.target.files[0];
    // console.log(file);
    // const reader = new FileReader();
    // reader.addEventListener(
    //   "load",
    //   () => {
    //     setPhoto(reader.result);
    //   },
    //   false
    // );
    // if (file) {
    //   reader.readAsDataURL(file);
    // }
  };

  const onDeletePhoto = () => {
    setPhoto(null);
  };

  const uploadProfile = () => {
    console.log("Profile Info: " + formData);
  };

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
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
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
                <div className="card-media c-img-area-2">
                  <img src={photo ? photo : avt} alt="Axies" />
                </div>
                <div id="upload-profile">
                  <Link to="#" className="btn-upload">
                    Upload New Photo{" "}
                  </Link>
                  <input
                    id="tf-upload-img"
                    type="file"
                    name="profile"
                    onChange={onUploadPhoto}
                  />
                </div>
                <button onClick={onDeletePhoto} className="btn-upload style2">
                  Delete
                </button>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12 col-12">
              <div className="form-upload-profile">
                <h4 className="title-create-item">Choice your Cover image</h4>
                <div className="option-profile clearfix">
                  <form action="#">
                    <label className="uploadFile">
                      <input
                        type="file"
                        className="inputfile form-control"
                        name="file"
                        onChange={ontUploadCoverImg}
                      />
                    </label>
                  </form>
                  <div className="image c-img-area-1">
                    <img src={coverImg ? coverImg : bg1} alt="Axies" />
                  </div>
                  <div className="image style2 custom-img">
                    <img src={coverImg ? coverImg : bg2} alt="Axies" />
                  </div>
                </div>

                <form action="#" className="form-profile">
                  <div className="form-infor-profile">
                    <div className="info-account">
                      <h4 className="title-create-item">Account info</h4>
                      <fieldset>
                        <h4 className="title-infor-account">Display name</h4>
                        <input
                          type="text"
                          placeholder="Trista Francis"
                          name="name"
                          value={formData.name || ""}
                          onChange={onInputChange}
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Custom URL</h4>
                        <input
                          type="text"
                          placeholder="Axies.Trista Francis.com/"
                          name="customURL"
                          value={formData.customURL || ""}
                          onChange={onInputChange}
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Email</h4>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          name="email"
                          value={formData.email || ""}
                          onChange={onInputChange}
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Bio</h4>
                        <textarea
                          tabIndex="4"
                          rows="5"
                          name="bio"
                          value={formData.bio || ""}
                          onChange={onInputChange}
                          required
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="info-social">
                      <h4 className="title-create-item">Your Social media</h4>
                      <fieldset>
                        <h4 className="title-infor-account">Facebook</h4>
                        <input
                          type="text"
                          placeholder="Facebook username"
                          name="facebook"
                          value={formData.facebook || ""}
                          onChange={onInputChange}
                          required
                        />
                        <Link to="#" className="connect">
                          <i className="fab fa-facebook"></i>Connect to face
                          book
                        </Link>
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Twitter</h4>
                        <input
                          type="text"
                          placeholder="Twitter username"
                          name="twitter"
                          value={formData.twitter || ""}
                          onChange={onInputChange}
                          required
                        />
                        <Link to="#" className="connect">
                          <i className="fab fa-twitter"></i>Connect to Twitter
                        </Link>
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Discord</h4>
                        <input
                          type="text"
                          placeholder="Discord username"
                          name="discord"
                          value={formData.discord || ""}
                          onChange={onInputChange}
                          required
                        />
                        <Link to="#" className="connect">
                          <i className="icon-fl-vt"></i>Connect to Discord
                        </Link>
                      </fieldset>
                    </div>
                  </div>
                  <button
                    className="tf-button-submit mg-t-15"
                    onClick={uploadProfile}
                  >
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
};

export default EditProfile;
