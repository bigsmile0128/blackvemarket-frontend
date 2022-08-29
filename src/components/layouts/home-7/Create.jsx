import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../../assets/images/icon/Wallet.png'
import icon2 from '../../../assets/images/icon/Category.png'
import icon3 from '../../../assets/images/icon/Image2.png'
import icon4 from '../../../assets/images/icon/Bookmark.png'

const Create = () => {
    const data = [
        {
            title: "Add Your NFTs",
            description: "Sed ut perspiciatis un de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
            icon : icon3,
            colorbg : "icon-color3"
        },
        {
            title: "Create Your Collection",
            description: "Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains how to set up your first collection",
            icon : icon2,
            colorbg : "icon-color2"
        },
        {
            title: "Set Up Your Wallet",
            description: "Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.",
            icon : icon1,
            colorbg : "icon-color1"
        },
        {
            title: "List Them For Sale",
            description: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
            icon : icon4,
            colorbg : "icon-color4"
        },
    ]
    return (
        <section className="tf-box-icon live-auctions tf-section style7 bg-style">
        <div className="themesflat-container">
            <div className="row">
                <div className="col-xl-4 col-lg-12 col-md-12">
                    <div className="heading-live-auctions style2 mg-t-3 mg-bt-22">
                        <h3 className="heading-fill mg-bt-16">Creat NFT</h3>
                        <h2 className="tf-title text-left pb-15">Create And Sell Your NFTs</h2>                    
                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin morbi donec venenatis sed eget pellentesque viverra ut. 
                            Elementum nam praesent mauris auctor amet, pulvinar adipiscing ultricies ut. 
                            Id dignissim tristique ultrices arcu tempor. Aenean quam odio fringilla amet, imperdiet.
                        </p>     
                    </div>
                </div>                          
                <div className="col-xl-8 col-lg-12 col-md-12">
                    <div className="sc-box-icon-inner style3">
                        {
                            data.map((item,index) => (
                                <CreateItem key={index} item={item} />
                            ))
                        }
                    </div>  
                </div> 
            </div>                 
        </div>
    </section>
    );
}

const CreateItem = props => (
    <div className="sc-box-icon">
        <div className="image">
            <div className={`icon-create ${props.item.colorbg}`}>
                <img src={props.item.icon} alt="" />
            </div>                                                                           
        </div>
        <div className="wrap-box">
            <h3 className="heading"><Link to="/wallet-connect">{props.item.title}</Link></h3>
            <p className="content">{props.item.description}</p>
        </div>
    </div>
)

export default Create;
