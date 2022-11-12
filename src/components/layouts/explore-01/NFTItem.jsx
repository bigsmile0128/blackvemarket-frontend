import { Link } from "react-router-dom";
import { uriToHttp } from "../../../utils/utils";

const NFTItem = (props) => (
  <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
    <div className="sc-card-product">
      <div className="card-media">
        <Link to={`/item-details/${props.col_name}/${props.item.token_id}`}>
          <img src={uriToHttp(props.item.image)} alt="axies" />
        </Link>
        <Link to="/login" className="wishlist-button heart">
          <span className="number-like">{props.item.wishlist}</span>
        </Link>
      </div>
      <div className="card-title">
        <h5 className="style2">
          <Link to={`item-details/${props.col_name}/${props.item.token_id}`}>
            {props.item.name}
          </Link>
        </h5>

        <div className="price">
          <span>Current Bid</span>
          <h5> {props.item.price}</h5>
        </div>
      </div>
    </div>
  </div>
);

export default NFTItem;
