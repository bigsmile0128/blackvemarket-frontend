import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import img1 from '../assets/images/box-item/card-item-10.jpg'
import img2 from '../assets/images/box-item/image-box-10.jpg'
import img3 from '../assets/images/box-item/image-box-11.jpg'
import img4 from '../assets/images/box-item/image-box-21.jpg'
import img5 from '../assets/images/box-item/image-box-6.jpg'


const Activity01 = () => {
    const [dataBox] = useState(
        [
            {
                img: img1,
                title: 'Monica Lucas',
                status: 'started following',
                author: 'Gayle Hicks',
                time: 'At 2:30 PM on 19th June, 2021',
                icon: 'icon-1'
            },
            {
                img: img2,
                title: 'Wow! That Brain Is Floating',
                status: '10 editions listed by',
                author: 'Meowbids',
                time: 'At 2:30 PM on 19th June, 2021',
                icon: 'icon-2'
            },
            {
                img: img3,
                title: 'Erotic 35mm And Polaroid Photography',
                status: 'started following',
                author: 'Gayle Hicks',
                time: 'At 2:30 PM on 19th June, 2021',
                icon: 'icon-3'
            },
            {
                img: img4,
                title: 'Our Journey Start',
                status: 'started following',
                author: 'Gayle Hicks',
                time: 'At 2:30 PM on 19th June, 2021',
                icon: 'icon-4'
            },
            {
                img: img5,
                title: 'Skrrt Cobain Official',
                status: 'started following',
                author: 'Gayle Hicks',
                time: 'At 2:30 PM on 19th June, 2021',
                icon: 'icon-5'
            },
            {
                img: img1,
                title: 'Monica Lucas',
                status: 'started following',
                author: 'Gayle Hicks',
                time: 'At 2:30 PM on 19th June, 2021',
                icon: 'icon-1'
            },
            {
                img: img2,
                title: 'Wow! That Brain Is Floating',
                status: '10 editions listed by',
                author: 'Meowbids',
                time: 'At 2:30 PM on 19th June, 2021',
                icon: 'icon-2'
            },
            {
                img: img3,
                title: 'Erotic 35mm And Polaroid Photography',
                status: 'started following',
                author: 'Gayle Hicks',
                time: 'At 2:30 PM on 19th June, 2021',
                icon: 'icon-3'
            },
            {
                img: img4,
                title: 'Our Journey Start',
                status: 'started following',
                author: 'Gayle Hicks',
                time: 'At 2:30 PM on 19th June, 2021',
                icon: 'icon-4'
            },
            {
                img: img5,
                title: 'Skrrt Cobain Official',
                status: 'started following',
                author: 'Gayle Hicks',
                time: 'At 2:30 PM on 19th June, 2021',
                icon: 'icon-5'
            },
        ]);
    const [dataFilter] = useState(
        [
            {
                icon: 'icon-fl-sort-filled',
                name: 'Listings'
            },
            {
                icon: 'icon-fl-heart-filled',
                name: 'Like'
            },
            {
                icon: 'icon-fl-buy',
                name: 'Purchases'
            },
            {
                icon: 'icon-fl-discount',
                name: 'Sales'
            },
            {
                icon: 'icon-fl-logout',
                name: 'Transfer'
            },
            {
                icon: 'icon-fl-star',
                name: 'Burns'
            },
            {
                icon: 'icon-fl-credit-card',
                name: 'Bids'
            },
            {
                icon: 'icon-fl-users-filled',
                name: 'Followings'
            },
        ]
    )

    const [visible , setVisible] = useState(5);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 5);
    }
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Activity</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Activity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-activity s1 tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-12">
                            {
                                dataBox.slice(0,visible).map((item,index) =>(
                                    <div className="sc-card-activity style1" key={index}>
                                        <div className="content">
                                            <div className="media">
                                                <img src={item.img} alt="Axies" />
                                            </div>
                                            <div className="infor">
                                                <h3> <Link to="/item-details-01">{item.title}</Link></h3>
                                                <div className="status">{item.status} <span className="author">{item.author}</span></div>
                                                <div className="time">{item.time}</div>
                                            </div>
                                        </div>
                                        <div className={`button-active icon ${item.icon}`}></div>
                                    </div>
                                ))
                            }
                            {
                                visible < dataBox.length && 
                                <div className="col-md-12 wrap-inner load-more text-center"> 
                                    <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3 mt-10" onClick={showMoreItems}><span>Load More</span></Link>
                                </div>
                            }
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">

                            <div id="side-bar" className="side-bar style-2">

                                <div className="widget widget-search mgbt-24">
                                    <form action="#">
                                        <input type="text" placeholder="Enter your word art" required />
                                        <button><i className="icon-fl-search-filled"></i></button>
                                    </form>
                                </div>

                                <div className="widget widget-filter style-2 mgbt-0">
                                    <h3 className="title-widget">Filter</h3>
                                    <ul className="box-check">
                                        {
                                            dataFilter.map((item,index) => (
                                                <li key={index}><Link to="#" className="box-widget-filter"><i className={item.icon}></i>{item.name}</Link></li>
                                            ))
                                        }
                                        
                                    </ul>
                                    <Link to="#" className="clear-check btn-filter style-2">
                                        Clear All Filters
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Activity01;
