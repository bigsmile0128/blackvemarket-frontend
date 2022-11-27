import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap-accordion'

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const FAQ = () => {
    const [data] = useState(
        [
            {   key: "0",
                show: "show",
                title: 'What is an NFT?',
                text: 'NFTs or non-fungible tokens, are cryptographic assets on blockchain with unique identification codes and metadata that distinguish them from each other. NFTs are unique and not mutually interchangeable, which means no two NFTs are the same.'
            },
            {
                key: "1",
                title: 'I have a problem, do you have customer support?',
                text: 'Yes! You can reach out to us on twitter @BlackVeMarket or you can visit our Discord - https://discord.gg/2YfTTnMH8h'
            },
            {
                key: "2",
                title: 'What is a wallet?',
                text: 'A wallet functions a little bit like your real life wallet. It stores your own unique wallet address, your crypto and your NFTs.'
            },
            {
                key: "3",
                title: 'What does "minting" mean?',
                text: 'Minting is the process of using your Cryptocurrency to purchase an NFT directly from the artist or project receiving a random NFT in return.'
            },
            {
                key: "4",
                title: 'I\'ve missed the boat and the mint closed, what do I do?',
                text: 'You can always browse the secondary market. The advantages of the secondary market is you can choose which NFT you\'d like to buy. Purchasing on the secondary market can sometimes be more expensive than minting an NFT but you can often find great deals.'
            },
            {
                key: "5",
                title: 'I have a project idea, how do I get started?',
                text: 'Great! We always love to hear from new and upcoming artists, projects and groups who are interested in getting started in the world of NFTs and Vechain. You can reach out to us or our partners No-Nerds Inc. on twitter - @BlackVeMarket or @NoNerdsInc'
            },
            {
                key: "6",
                title: 'How do I choose what project or NFT to buy?',
                text: 'Always DYOR (Do your own research) on Twitter, Discord and other social channels to find what projects you are attracted to. Talk to veterans of the space, check out interviews or spaces and get involved with a community that you feel like you fit in with the most.'
            },
            {
                key: "7",
                title: 'Who are No-Nerds Inc?',
                text: 'No-Nerds Inc. are long time business partners and equity holders of BlackVe Market. No-Nerds Inc. provides a stable community, support and guidance from VeFam veterans and the $UNION token to new projects who would like to launch under the UNION banner.'
            },
            {
                key: "8",
                title: 'I want to learn more about BlackVe Market, where can I do that?',
                text: 'You can find more information about our market, community and upcoming news in our Discord server - https://discord.gg/2YfTTnMH8h'
            },
        ]
    )
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">FAQ</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-section wrap-accordion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                                Frequently Asked Questions
                            </h2>
                            <h5 className="sub-title help-center mg-bt-32 ">
                            Here you can find some answers to come commonly asked questions.
                            </h5>
                        </div>
                        <div className="col-md-12">
                            <div className="flat-accordion2">
                                {
                                    data.map((item,index) => (
                                        <Accordion key={index} title={item.title} >
                                            <p>{item.text}</p>
                                        </Accordion>
                                    ))
                                }                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default FAQ;
