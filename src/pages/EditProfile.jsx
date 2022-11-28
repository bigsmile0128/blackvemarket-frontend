import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { BACKEND_URL, S3_URL } from "../assets/constants";
import * as actions from "../store/actions/profileActions";
import avt from "../assets/images/avatar/avt-author-tab.png";

const EditProfile = () => {
  const profileInfo = useSelector((store) => store.profile.profileInfo);
  const authentication = useSelector((store) => store.profile.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signer = window.localStorage.getItem("vechain_signer");
  const [isUpdating, setIsUpdating] = useState(false);

  const [selectedAvatar, setSelectedAvatar] = useState(avt);
  
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    email: "",
    twitter: "",
    instagram: "",
    bio: "",
    avatar: {},
  });

  useEffect(() => {
    if ( profileInfo && profileInfo.name ) {
      const data = {
        name: profileInfo.name || "",
        url: profileInfo.url || "",
        email: profileInfo.email || "",
        twitter: profileInfo.twitter || "",
        instagram: profileInfo.instagram || "",
        bio: profileInfo.bio || "",
        avatar: profileInfo.avatar || {},
      };
      setFormData(data);
      setSelectedAvatar(profileInfo.avatar ? S3_URL + profileInfo.avatar : avt);
    }
  }, [profileInfo]);

  useEffect(() => {
    if ( signer ) {
      actions.fetchProfile(signer);
    }
  }, [signer]);

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onUploadAvatar = (e) => {
    const path = URL.createObjectURL(e.target.files[0]);
    setSelectedAvatar(path);
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    console.log(path);
  };
  const uploadProfile = async () => {
    await setIsUpdating(true);
    let fd = new FormData();
    fd.append("name", formData.name);
    fd.append("url", formData.url);
    fd.append("email", formData.email);
    fd.append("twitter", formData.twitter);
    fd.append("instagram", formData.instagram);
    fd.append("bio", formData.bio);
    fd.append("avatar", formData.avatar);
    fd.append("walletaddr", signer);

    if (authentication) {
      await actions.editProfile(fd);
      await setIsUpdating(false);
      navigate(`/profile/${signer}`);
    } else {
      alert("Please Connect Wallet!");
      return false;
    }
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
      {(formData == null || isUpdating ) &&
      <div className="spinner-container">
          <div className="loading-spinner">
          </div>
      </div>
      }
      {formData && !isUpdating && 
      <div className="tf-create-item tf-section">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="sc-card-profile text-center">
                <div className="card-media c-img-area-2">
                  <img src={selectedAvatar??avt} alt="Axies" />
                </div>
                <div id="upload-profile">
                  <Link to="#" className="btn-upload">
                    Upload
                  </Link>
                  <input
                    id="tf-upload-img"
                    type="file"
                    name="avatar"
                    onChange={onUploadAvatar}
                  />
                </div>
                {/* <button
                  onClick={() => onDeleteAvatar()}
                  className="btn-upload style2"
                >
                  Delete
                </button> */}
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12 col-12">
              <div className="form-upload-profile">
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
                        name="url"
                        value={formData.url || ""}
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
                      <h4 className="title-infor-account">Twitter</h4>
                      <input
                        type="text"
                        placeholder="Enter your twitter"
                        name="twitter"
                        value={formData.twitter || ""}
                        onChange={onInputChange}
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <h4 className="title-infor-account">Instagram</h4>
                      <input
                        type="text"
                        placeholder="Enter your instagram"
                        name="instagram"
                        value={formData.instagram || ""}
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
                  {/* <div className="info-social">
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
                        <i className="fab fa-facebook"></i>Connect to face book
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
                  </div> */}
                </div>
                <button
                  className="tf-button-submit mg-t-15"
                  onClick={() => uploadProfile()}
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> }
      <Footer />
    </div>
  );
};

export default EditProfile;
