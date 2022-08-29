import React from 'react';
import { Link } from 'react-router-dom'

const Create = () => {
    const data = [
        {
            title: "Set Up Your Wallet",
            description: "Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.",
            icon : "",
            colorbg : "#6d9aff"
        },
        {
            title: "Create Your Collection",
            description: "Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains how to set up your first collection",
            colorbg : "#47A432"
        },
        {
            title: "Add Your NFTs",
            description: "Sed ut perspiciatis un de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
            colorbg : "#9835FB"
        },
        {
            title: "List Them For Sale",
            description: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
            colorbg : "#DF4949"
        },
    ]
    return (
        <section className="tf-box-icon create tf-section bg-home-3">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sc-box-icon-inner home3">
                            {
                                data.map((item , index) => (
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
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="60" rx="16" fill={props.item.colorbg}/>
                <path fillRule="evenodd" clipRule="evenodd" d="M36.9227 28.0178H41.104C41.5988 28.0178 42 28.3981 42 28.8671V31.8195C41.9942 32.2862 41.5964 32.6633 41.104 32.6688H37.0187C35.8257 32.684 34.7826 31.9098 34.512 30.8084C34.3765 30.1247 34.5667 29.4192 35.0317 28.8809C35.4966 28.3427 36.1888 28.0268 36.9227 28.0178ZM37.1039 31.1219H37.4986C38.0052 31.1219 38.4159 30.7326 38.4159 30.2524C38.4159 29.7722 38.0052 29.3829 37.4986 29.3829H37.1039C36.8616 29.3802 36.6282 29.4695 36.4559 29.631C36.2835 29.7924 36.1866 30.0126 36.1866 30.2423C36.1865 30.7242 36.5956 31.1164 37.1039 31.1219Z" fill="#F9F9FA" fillOpacity="0.4"/>
                <path d="M36.9227 26.2788H42C42 22.3154 39.5573 20 35.4187 20H24.5813C20.4427 20 18 22.3154 18 26.2282V34.7718C18 38.6846 20.4427 41 24.5813 41H35.4187C39.5573 41 42 38.6846 42 34.7718V34.4078H36.9227C34.5662 34.4078 32.656 32.5971 32.656 30.3635C32.656 28.1299 34.5662 26.3192 36.9227 26.3192V26.2788Z" fill="white"/>
                <path d="M30.4587 26.2788H23.6854C23.177 26.2733 22.768 25.8811 22.7681 25.3992C22.7739 24.9229 23.1829 24.5398 23.6854 24.5398H30.4587C30.9654 24.5398 31.3761 24.9291 31.3761 25.4093C31.3761 25.8895 30.9654 26.2788 30.4587 26.2788Z" fill="#948BFB"/>
            </svg>                                                                             
        </div>
        <h3 className="heading"><Link to="/wallet-connect">{props.item.title}</Link></h3>
        <p className="content">{props.item.description}</p>
    </div>
)

export default Create;
