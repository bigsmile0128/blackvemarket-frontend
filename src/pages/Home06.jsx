import React from 'react';
import HeaderStyle2 from '../components/header/HeaderStyle2';
import Footer from '../components/footer/Footer';
import SliderStyle3 from '../components/slider/SliderStyle3';
import heroSliderData from '../assets/fake-data/data-slider';
import LiveAuction from '../components/layouts/home-6/LiveAuction';
import TopSeller from '../components/layouts/home-6/TopSeller';
import TodayPicks from '../components/layouts/home-6/TodayPicks';
import todayPickData from '../assets/fake-data/data-today-pick';
import PopularCollection from '../components/layouts/home-6/PopularCollection';
import Create from '../components/layouts/home-6/Create';


const Home06 = () => {
    return (
        <div className='home-6'>
            <HeaderStyle2 />
            <SliderStyle3 data={heroSliderData} />
            <LiveAuction />
            <TopSeller />
            <TodayPicks data={todayPickData} />
            <PopularCollection />
            <Create />
            <Footer />
        </div>
    );
}

export default Home06;
