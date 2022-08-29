import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import TodayPicks from '../components/layouts/explore-02/TodayPicks'
import todayPickData from '../assets/fake-data/data-today-pick';

const Explore02 = () => {
    return (
        <div className='explore'>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Explore 2</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Explore</Link></li>
                                    <li>Explore 2</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <TodayPicks data={todayPickData} />
            <Footer />
        </div>
    );
}

export default Explore02;
