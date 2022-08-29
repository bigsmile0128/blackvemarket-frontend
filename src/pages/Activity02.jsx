import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import img1 from '../assets/images/box-item/imgactivity2.jpg'
import img2 from '../assets/images/box-item/image-box-21.jpg'
import img3 from '../assets/images/box-item/image-box-6.jpg'
import img4 from '../assets/images/box-item/card-item-7.jpg'
import img5 from '../assets/images/box-item/card-item-9.jpg'
import img6 from '../assets/images/box-item/image-box-11.jpg'
import img7 from '../assets/images/box-item/card-item-4.jpg'
import img8 from '../assets/images/box-item/card-item-3.3.jpg'
const Activity02 = () => {
    const [dataBox] = useState(
        [
            {
                img: img1,
                title: 'Pinky Ocean',
                status1: 'following',
                author: 'Gayle Hicks',
                time: '19th June, 2021',
            },
            {
                img: img2,
                title: 'Deep Sea Plan',
                status1: 'listed by',
                status2: 'for',
                price: '0.049 ETH',
                author: 'Trista Francis',
                time: '10 minutes ago',
            },
            {
                img: img3,
                title: 'Rainbow Style',
                status1: 'following',
                author: 'Gayle Hicks',
                time: '19th June, 2021',
            },
            {
                img: img4,
                title: 'This is Our Story',
                status1: 'listed by',
                status2: 'for',
                price: '0.049 ETH',
                author: 'Trista Francis',
                time: '10 minutes ago',
            },
            {
                img: img5,
                title: 'I Believe I Can Fly',
                status1: 'following',
                author: 'Gayle Hicks',
                time: '19th June, 2021',
            },
            {
                img: img6,
                title: 'Cute Astronout',
                status1: 'listed by',
                status2: 'for',
                price: '0.049 ETH',
                author: 'Trista Francis',
                time: '05 minutes ago',
            },
            {
                img: img7,
                title: 'USA Wordmation',
                status1: 'listed by',
                status2: 'for',
                price: '0.049 ETH',
                author: 'Trista Francis',
                time: '10 minutes ago',
            },
            {
                img: img8,
                title: 'Running Puppets',
                status1: 'transferred from',
                price: '0.049 ETH',
                author: 'Gayle Hicks',
                time: '19th June, 2021',
            },
            {
                img: img1,
                title: 'Pinky Ocean',
                status1: 'following',
                author: 'Gayle Hicks',
                time: '19th June, 2021',
            },
            {
                img: img2,
                title: 'Deep Sea Plan',
                status1: 'listed by',
                status2: 'for',
                price: '0.049 ETH',
                author: 'Trista Francis',
                time: '10 minutes ago',
            },
            {
                img: img3,
                title: 'Rainbow Style',
                status1: 'following',
                author: 'Gayle Hicks',
                time: '19th June, 2021',
            },
            {
                img: img4,
                title: 'This is Our Story',
                status1: 'listed by',
                status2: 'for',
                price: '0.049 ETH',
                author: 'Trista Francis',
                time: '10 minutes ago',
            },
            {
                img: img5,
                title: 'I Believe I Can Fly',
                status1: 'following',
                author: 'Gayle Hicks',
                time: '19th June, 2021',
            },
            {
                img: img6,
                title: 'Cute Astronout',
                status1: 'listed by',
                status2: 'for',
                price: '0.049 ETH',
                author: 'Trista Francis',
                time: '05 minutes ago',
            },
            {
                img: img7,
                title: 'USA Wordmation',
                status1: 'listed by',
                status2: 'for',
                price: '0.049 ETH',
                author: 'Trista Francis',
                time: '10 minutes ago',
            },
            {
                img: img8,
                title: 'Running Puppets',
                status1: 'transferred from',
                price: '0.049 ETH',
                author: 'Gayle Hicks',
                time: '19th June, 2021',
            },
        ]);
    const [dataFilter] = useState(
        [
            {
                name: 'Listings',
                checked: 'checked'
            },
            {
                name: 'Purchases',
                checked: 'checked'
            },
            {
                name: 'Sales',
                checked: ''
            },
            {
                name: 'Transfer',
                checked: ''
            },

            {
                name: 'Burns',
                checked: 'checked'
            },
            {
                name: 'Bids',
                checked: ''
            },
            {
                name: 'Followings',
                checked: ''
            },
        ]
    )

    const [visible , setVisible] = useState(8);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
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
                                <h1 className="heading text-center">Activity 2</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Activity</Link></li>
                                    <li>Activity 2</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-activity tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 col-md-8 col-12">
                            <div className="box-activity">
                                {
                                    dataBox.slice(0,visible).map((item,index) => (
                                        <div key={index} className="sc-card-activity style-2">
                                            <div className="content">
                                                <div className="media">
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="infor">
                                                    <h4><Link to="/item-details-01">{item.title}</Link></h4>
                                                    <div className="status">{item.status1} <span className="author">{item.author}</span></div>
                                                    <div className="time">{item.time}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            {
                                visible < dataBox.length && 
                                <div className="btn-activity mg-t-10 center"> 
                                    <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                                </div>
                            }
                        </div>
                        <div className="col-xl-4 col-lg-3 col-md-4 col-12">

                            <div id="side-bar" className="side-bar style-2">

                                <div className="widget widget-search mgbt-24">
                                    <form action="#">
                                        <input className="style-2" type="text" placeholder="Enter your word art" required />
                                        <button className="style-2"><i className="icon-fl-search-filled"></i></button>
                                    </form>
                                </div>

                                <div className="widget widget-filter style-1 mgbt-0">
                                    <div className="header-widget-filter">
                                        <h3 className="title-widget">Filter</h3>
                                        <Link to="#" className="clear-checkbox btn-filter style-2">
                                            Clear All
                                        </Link>
                                    </div>
                                    <form action="#" className="form-inner">
                                        {
                                            dataFilter.map((item,index) => (
                                                <div key={index}>
                                                <label >
                                                    {item.name}
                                                    <input type="checkbox" defaultChecked={item.checked} />
                                                    <span className="btn-checkbox"></span>
                                                </label><br/>
                                                </div>
                                            ))
                                        }

                                    </form>
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

export default Activity02;
