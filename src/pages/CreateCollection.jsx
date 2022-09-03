import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img1 from "../assets/images/box-item/image-box-6.jpg";
import { useRef } from "react";
// import avt from "../assets/images/avatar/avt-9.jpg";

const CreateCollection = () => {
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [formData, setFormData] = useState({
    price: "",
    title: "",
    description: "",
    royalties: "",
    size: "",
    abstract: "",
  });
  const [url, setUrl] = useState(null);
  const [url1, setUrl1] = useState(null);
  const [url2, setUrl2] = useState(null);

  const onFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
    setUrl(URL.createObjectURL(e.target.files[0]));
  };
  const onFileUpload1 = (e) => {
    setSelectedFile1(e.target.files[0]);
    console.log(e.target.files[0]);
    setUrl1(URL.createObjectURL(e.target.files[0]));
  };
  const onFileUpload2 = (e) => {
    setSelectedFile2(e.target.files[0]);
    console.log(e.target.files[0]);
    setUrl2(URL.createObjectURL(e.target.files[0]));
  };
  const [tags, setTags] = useState(['ether']);
  const addTagHandler = tag => {
    setTags([...tags, tag]);
  };
  const deleteTagHandler = i => {
    setTags(tags.filter((_, index) => index !== i));
  };

  const TagInput = ({ tags, onAdd, onDelete }) => {
    const [userInput, setUserInput] = useState('');
    const keyPressHandler = e => {
      if (e.key === 'Enter' && userInput.trim() !== '') {
        onAdd(userInput.trim());
        setUserInput('');
      }
    };
    
    return (
      <div className='taginput'>
        {tags.map((tag, i) => (
          <Tag key={tag + i} label={tag} onClickDelete={() => onDelete(i)} />
        ))}
        <Input
          type='text'
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          onKeyPress={keyPressHandler}
          placeholder='Insert tag here'
        />
      </div>
    );
  };
  
  const Tag = ({ label, onClickDelete }) =>  (
    <p className='tag'>
      {label}
      <button className="button1" onClick={onClickDelete}>&times;</button>
    </p>
  );
  
  const Input = ({ ...props }) => (
    <div className="input">
      <input {...props} />
    </div>
  );
  const data = [{id: 0, label: "All"}, {id: 1, label: "Art"},{id: 2, label: "Collectibles"},{id: 3, label: "Music"},
  {id: 4, label: "Phtography"},{id: 5, label: "Sports"},{id: 6, label: "Trading Cards"},];

  const changeValue = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }
  
  const data1 = [{id: 0, label: "Ethereum"}, {id: 1, label: "Kalyatn"},{id: 2, label: "Solana"},{id: 3, label: "Polygon"}];

  const [isOpen1, setOpen1] = useState(false);
  const [items1, setItem1] = useState(data1);
  const [selectedItem1, setSelectedItem1] = useState(null);
  
  const toggleDropdown1 = () => setOpen1(!isOpen1);
  
  const handleItemClick1 = (id) => {
    selectedItem1 == id ? setSelectedItem1(null) : setSelectedItem1(id);
  }

  const imageRef = useRef();

  const onImageClick = (e) => {
    this.imageRef.click();
  }

  return (
    <div className="create-item">
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Create a Collection</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
                  <li>Create a Collection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-create-item tf-section">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-12">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <h4 className="title-create-item">Logo image</h4>
              <div className="sc-card-product">
                <div className="card-media">
                    <img src={url ? url: img1} alt="Axies" onClick={onImageClick}/>
                    <input
                      ref={imageRef}
                      type="file"
                      className="inputfile form-control"
                      onChange={onFileUpload}
                      name="file"
                      style={{display: "none"}}
                    />
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <h4 className="title-create-item">Feature Image</h4>
              <div className="sc-card-product">
                <div className="card-media">
                    <img src={url1 ? url1: img1} alt="Axies" />
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <h4 className="title-create-item">Banner Image</h4>
              <div className="sc-card-product">
                <div className="card-media">
                    <img src={url2 ? url2: img1} alt="Axies" />
                </div>
              </div>
            </div>
            </div>
            <div className="col-xl-9 col-lg-6 col-md-12 col-12">
              <div className="form-create-item">
                <h1>Create a Collecton</h1>
                <form action="#">
                  <h4 className="title-create-item mg-t-20">Logo Image</h4>
                  <label className="uploadFile">
                    <span className="filename">
                      PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                    </span>
                    <input
                      type="file"
                      className="inputfile form-control"
                      onChange={onFileUpload}
                      name="file"
                    />
                  </label>
                </form>
                <form action="#">
                  <h4 className="title-create-item mg-t-20">Feature Image</h4>
                  <label className="uploadFile">
                    <span className="filename">
                      PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                    </span>
                    <input
                      type="file"
                      className="inputfile form-control"
                      onChange={onFileUpload1}
                      name="file"
                    />
                  </label>
                </form>
                <form action="#">
                  <h4 className="title-create-item mg-t-20">Banner Image</h4>
                  <label className="uploadFile">
                    <span className="filename">
                      PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                    </span>
                    <input
                      type="file"
                      className="inputfile form-control"
                      onChange={onFileUpload2}
                      name="file"
                    />
                  </label>
                </form>
                <div className="flat-tabs tab-create-item">
                  {/* <h4 className="title-create-item">name/h4> */}
                  <Tabs>

                    <TabPanel>
                        <h4 className="title-create-item mg-20">Name</h4>
                        <input
                          type="text"
                          name="price"
                          placeholder="Enter price for one item (ETH)"
                          onChange={changeValue}
                        />

                        <h4 className="title-create-item mg-t-20">URL</h4>
                        <input type="text" placeholder="Item Name" name="title" onChange={changeValue}/>

                        <h4 className="title-create-item mg-t-20">Description</h4>
                        <textarea placeholder="e.g. “This is very limited item”" name="description" onChange={changeValue}></textarea>

                        <h4 className="title-create-item mg-t-20">Category</h4>
                        <p>adding a category will help make your item discoverable on vechain</p>
                      
                      <TabList>
                      <div className='dropdown1 mg-t-20'>
                        <div className='dropdown-header' onClick={toggleDropdown}>
                          {selectedItem ? items.find(item => item.id == selectedItem).label : "Select your destination"}
                          <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
                        </div>
                        <div className={`dropdown-body ${isOpen && 'open'}`}>
                          {items.map(item => (
                            <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                              <p className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </p>
                              {item.label}
                            </div>
                          ))}
                        </div>
                      </div>
                      </TabList>
                      <h3>Links</h3>
                      <fieldset className="input-group-vertical mg-t-15">
                            <div className="form-group">
                                <label className="sr-only">url</label>
                                <input type="text" className="form-control" placeholder="url"/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only">url</label>
                                <input type="text" className="form-control" placeholder="url"/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only">url</label>
                                <input type="text" className="form-control" placeholder="url"/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only">url</label>
                                <input type="text" className="form-control" placeholder="url"/>
                            </div>
                        </fieldset>
                        <h3 className="mg-t-20">Blockchain</h3>
                        <p className="mg-t-10">Select the blockchain where you'd like new items from this collection to be added by default.</p>
                        <div className="inner-row-form style-2 mg-t-15">
                        <div className='dropdown1 mg-t-20'>
                          <div className='dropdown-header' onClick={toggleDropdown1}>
                            {selectedItem1 ? items1.find(item1 => item1.id == selectedItem1).label : "Select Blockchain"}
                            <i className={`fa fa-chevron-right icon ${isOpen1 && "open"}`}></i>
                          </div>
                          <div className={`dropdown-body ${isOpen1 && 'open'}`}>
                            {items1.map(item1 => (
                              <div className="dropdown-item" onClick={e => handleItemClick1(e.target.id)} id={item1.id}>
                                <p className={`dropdown-item-dot ${item1.id == selectedItem1 && 'selected'}`}>• </p>
                                {item1.label}
                              </div>
                            ))}
                          </div>
                        </div>
                        <h3 className="mg-t-20">Payment tokens</h3>
                        <p className="mg-t-20">Select the blockcain where you'd like new items from this collection to be added by default.</p>
                      </div>
                      <TagInput tags={tags} onAdd={addTagHandler} onDelete={deleteTagHandler} />
                      <div className="flex-center algin-middle mg-t-20 text-center ">
                      <button className="btn-primary ">Create</button>
                      </div>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateCollection;
