import React from 'react';
import { Accordion } from 'react-bootstrap-accordion'
import ExploreItem from './ExploreItem';
import todayPickData from '../../../assets/fake-data/data-today-pick';

const Explore = props => {
    const data = props.data;
    return (
        <section className="tf-explore tf-section">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-12">
                        <div id="side-bar" className="side-bar style-3">
                            {
                                data.map((item,index) => (
                                    <div className="widget widget-category mgbt-24 boder-bt" key={index}>
                                        <div className="content-wg-category">
                                            <Accordion title={item.title} show={true}>
                                                <form action="#">
                                                    {
                                                        item.content.map((itemm , index) => (
                                                            <div key={index}>
                                                                <label>{itemm.field}
                                                                    <input type="checkbox" defaultChecked={itemm.checked} />
                                                                    <span className="btn-checkbox"></span>
                                                                </label><br/>
                                                            </div>
                                                        ))
                                                    }                                            
                                                </form>
                                            </Accordion>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                    <div className="col-xl-9 col-lg-9 col-md-12">
                        <ExploreItem data={todayPickData} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Explore;
