import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../../assets/constants";
import { numberWithCommas, uriToHttp } from "../../../utils/utils";
import avt from "../../../assets/images/avatar/avt-author-tab.png";
import CustomImage from "../CustomImage";

const NFTItem = (props) => (
  <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
    <div className="sc-card-product">
      <div className="card-media">
        <Link to={`/collection/${props.collection.col_name}/${props.item.token_id}`}>
          <CustomImage src={uriToHttp(props.item.image)} size={400} />
        </Link>
      </div>
      <div className="card-title">
        <h5 className="style2">
          <Link to={`/collection/${props.collection.col_name}/${props.item.token_id}`}>
            {props.item.name?props.item.name:(props.collection.name+"#"+props.item.token_id)}
          </Link>
        </h5>
        {props.item.rank &&
        <div className="price">
          <span>Rank</span>
          <h5 style={{overflow: 'initial'}}> {props.item.rank}</h5>
        </div> }
      </div>
      <div className="meta-info">
        <div className="author">
            <div className="avatar">
              <CustomImage src={props.collection.logoImg?BACKEND_URL + props.collection.logoImg:avt} size={400} />
            </div>
            <div className="info">
                <h6> <Link to={`/collection/${props.collection.symbol}`}>{props.collection.name}</Link> </h6>
            </div>
        </div>
        {props.item.auction &&
        <div className="price">
          <span>{props.item.auction.isAuction?(props.item.offer?"Current Bid":"Reserve Price"):"Price"}</span>
          <h5>{numberWithCommas(props.item.price)} VET</h5>
        </div>}
      </div>
    </div>
  </div>
);

export default NFTItem;
