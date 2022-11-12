import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap-accordion";
import ExploreItem from "./ExploreItem";
import todayPickData from "../../../assets/fake-data/data-today-pick";

const Explore = (props) => {
  const { data, col_names } = props;
  const [colName, setColName] = useState("");
  const [datas, setDatas] = useState();
  console.log("Explore Here: ", props.col_names);

  useEffect(() => {
    setDatas(data);
  }, []);

  const onChecked = (name) => {
    data.map((item, index) => {
      for (let x of item.content) {
        if (name == x.field) {
          x.checked = !x.checked;
          console.log(x.checked);
          setColName(name);
        }
      }
    });
  };

  return (
    <section className="tf-explore tf-section">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-12">
            <div id="side-bar" className="side-bar style-3">
              {data.map((item, index) => (
                <div
                  className="widget widget-category mgbt-24 boder-bt"
                  key={index}
                >
                  <div className="content-wg-category">
                    <Accordion title={item.title} show={true}>
                      <form action="#">
                        {item.content.map((itemm, index) => (
                          <div key={index}>
                            <label>
                              {itemm.field}
                              <input
                                type="checkbox"
                                checked="false"
                                name={itemm.field}
                                value={itemm.field}
                                onChange={() => onChecked(itemm.field)}
                              />
                              <span className="btn-checkbox"></span>
                            </label>
                            <br />
                          </div>
                        ))}
                      </form>
                    </Accordion>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-xl-9 col-lg-9 col-md-12">
            <ExploreItem colName={col_names} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
