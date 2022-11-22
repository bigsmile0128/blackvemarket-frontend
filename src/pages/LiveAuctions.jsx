import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import LiveAuction from '../components/layouts/auctions/LiveAuction';

const LiveAuctions = () => {
    return (
        <div className='auctions'>
            <Header />
            <section className="flat-title-page inner collection-title-page"></section>
            <LiveAuction />
            <Footer />
        </div>
    );
}

export default LiveAuctions;
