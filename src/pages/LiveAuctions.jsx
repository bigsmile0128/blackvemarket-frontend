import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import LiveAuction from '../components/layouts/auctions/LiveAuction';

const LiveAuctions = () => {
    return (
        <div className='auctions'>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Marketplace</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LiveAuction />
            <Footer />
        </div>
    );
}

export default LiveAuctions;
