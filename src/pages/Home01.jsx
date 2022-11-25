import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import heroSliderData from '../assets/fake-data/data-slider';
import Slider from '../components/slider/Slider';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import LiveAuction from '../components/layouts/LiveAuction';
import TopSeller from '../components/layouts/TopSeller';
import topSellerData from '../assets/fake-data/data-top-seller'
import TodayPicks from '../components/layouts/TodayPicks';
import todayPickData from '../assets/fake-data/data-today-pick';
import Create from '../components/layouts/Create';
import NewCollections from "../components/layouts/NewCollections";
import PopularCollections from "../components/layouts/PopularCollections";
import StillMintings from "../components/layouts/StillMintings";

const Home01 = () => {
    return (
        <div className='home-1'>
            <Header />
            <Slider data={heroSliderData} />
            <LiveAuction />
            {/* <TopSeller data={topSellerData} /> */}
            {/* <TodayPicks data={todayPickData} /> */}
            <NewCollections />
            <PopularCollections />
            <StillMintings />
            {/* <Create /> */}
            <Footer />
        </div>
    );
}

export default Home01;
