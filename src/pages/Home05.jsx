import React from 'react';
import HeaderStyle2 from '../components/header/HeaderStyle2';
import Footer from '../components/footer/Footer';
import SliderStyle2 from '../components/slider/SliderStyle2';
import heroSliderData from '../assets/fake-data/data-slider';
import BrowCategory from '../components/layouts/home-5/BrowCategory';
import LiveAuction from '../components/layouts/home-5/LiveAuction';
import TopSeller from '../components/layouts/home-5/TopSeller';
import TodayPicks from '../components/layouts/home-5/TodayPicks';
import todayPickData from '../assets/fake-data/data-today-pick';
import PopularCollection from '../components/layouts/home-5/PopularCollection';
import Create from '../components/layouts/home-2/Create';


const Home05 = () => {
    return (
        <div className='home-5'>
            <HeaderStyle2 />
            <SliderStyle2 data={heroSliderData} />
            <BrowCategory />
            <LiveAuction />
            <TopSeller />
            <TodayPicks data={todayPickData} />
            <PopularCollection />
            <Create />
            <Footer />
        </div>
    );
}

export default Home05;
