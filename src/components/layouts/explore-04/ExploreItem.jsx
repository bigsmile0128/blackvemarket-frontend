import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/actions/productActions";

const ExploreItem = (props) => {
  const col_names = props.colName;
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(15);
  const [loaded, setLoaded] = useState(0);
  const [allnfts, setAllNFTs] = useState([]);
  console.log("Explore Item Here: ", col_names);
  console.log("first render visible", visible);

  const loadAllNFTs = async (init) => {
    const new_nfts = await actions.getAllNfts(col_names, init ? 0 : loaded, 3);
    const updated_nfts = init ? new_nfts : allnfts.concat(new_nfts);
    await setAllNFTs(updated_nfts);
    await setLoaded(updated_nfts.length / (col_names.length - 1));
    console.log(visible);
    console.log("functions calling...");
  };

  useEffect(() => {
    if (col_names.length > 0) {
      console.log("hello, useEffect.");
      console.log(loaded);
      loaded ? loadAllNFTs(0) : loadAllNFTs(1);
    } else {
      console.log("useEffect is here");
    }
  }, [col_names, visible]);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  return (
    <div className="explore">
      <div className="box-epxlore">
        {allnfts.slice(0, visible).map((item, index) => (
          // <div
          //   className={`sc-card-product explode style2 mg-bt ${
          //     item.feature ? "comingsoon" : ""
          //   } `}
          //   key={index}
          // >
          //   <div className="card-media">
          //     <Link to="/item-details-01">
          //       <img src={item.image} alt="Axies" />
          //     </Link>
          //     <div className="button-place-bid">
          //       <Link
          //         to="/wallet-connect"
          //         className="sc-button style-place-bid style bag fl-button pri-3"
          //       >
          //         <span>Place Bid</span>
          //       </Link>
          //     </div>
          //     <Link to="/login" className="wishlist-button heart">
          //       <span className="number-like">{item.wishlist}</span>
          //     </Link>
          //     <div className="coming-soon">{item.feature}</div>
          //   </div>
          //   <div className="card-title">
          //     <h5>
          //       <Link to="/item-details-01">"{item.name}"</Link>
          //     </h5>
          //   </div>
          //   <div className="meta-info">
          //     <div className="author">
          //       <div className="avatar">
          //         <img src={item.imgAuthor} alt="Axies" />
          //       </div>
          //       <div className="info">
          //         <span>Creator</span>
          //         <h6>
          //           {" "}
          //           <Link to="/author-02">{item.nameAuthor}</Link>{" "}
          //         </h6>
          //       </div>
          //     </div>
          //     <div className="tags">{item.tags}</div>
          //   </div>
          //   <div className="card-bottom style-explode">
          //     <div className="price">
          //       <span>Price</span>
          //       <div className="price-details">
          //         <h5>{item.price}</h5>
          //         <span>= {item.priceChange}</span>
          //       </div>
          //     </div>
          //     <Link to="/activity-01" className="view-history reload">
          //       View History
          //     </Link>
          //   </div>
          // </div>
          <div className="sc-card-product" key={index}>
            <div className="card-media">
              {/* <Link
                  to={`/item-details/${props.col_name}/${props.item.token_id}`}
                > */}
              <img src={item.image} alt="axies" />
              {/* </Link> */}
              <Link to="/login" className="wishlist-button heart">
                <span className="number-like">{item.wishlist}</span>
              </Link>
            </div>
            <div className="card-title">
              <h5 className="style2">{item.name}</h5>

              <div className="price">
                <span>Current Bid</span>
                <h5> {item.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visible < allnfts.length && (
        <div className="btn-auction center">
          <Link
            to="#"
            id="load-more"
            className="sc-button loadmore fl-button pri-3"
            onClick={showMoreItems}
          >
            <span>Load More</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ExploreItem;
