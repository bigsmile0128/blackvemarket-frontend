import Home01 from "./Home01";
import NFTs from "./NFTs";
import Collection from "./Collection";
import LiveAuctions from "./LiveAuctions";
import ItemDetails01 from "./ItemDetails01";
import ItemDetails02 from "./ItemDetails02";
import Activity01 from "./Activity01";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import HelpCenter from "./HelpCenter";
import Authors01 from "./Authors01";
import Authors02 from "./Authors02";
import WalletConnect from "./WalletConnect";
import CreateItem from "./CreateItem";
import EditProfile from "./EditProfile";
import NoResult from "./NoResult";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";
import Collectibles from "./Collectibles";
import BVMCollectibles from "./BVMCollectibles";
import NNICollectibles from "./NNICollectibles";
import CreateCollection from "./CreateCollection";
import PlaceBids from "../components/layouts/auctions/PlaceBids";
import ListItem from "./ListItem";

const routes = [
  { path: "/", component: <Home01 /> },
  { path: "/nfts", component: <NFTs /> },
  { path: "/marketplace", component: <LiveAuctions /> },
  { path: "/collection/:col_name/:token_id", component: <ItemDetails01 /> },
  { path: "/item-details-02", component: <ItemDetails02 /> },
  { path: "/activity-01", component: <Activity01 /> },
  { path: "/blog", component: <Blog /> },
  { path: "/blog-details", component: <BlogDetails /> },
  { path: "/help-center", component: <HelpCenter /> },
  { path: "/authors-01", component: <Authors01 /> },
  { path: "/profile/:address", component: <Authors02 /> },
  { path: "/collection/:symbol", component: <Collection /> },
  { path: "/wallet-connect", component: <WalletConnect /> },
  { path: "/create-item", component: <CreateItem /> },
  { path: "/edit-profile", component: <EditProfile /> },
  { path: "/no-result", component: <NoResult /> },
  { path: "/faq", component: <FAQ /> },
  { path: "/contactus", component: <ContactUs /> },
  { path: "/bvm_studios", component: <BVMCollectibles /> },
  { path: "/no_nerds_inc", component: <NNICollectibles /> },
  { path: "/collections", component: <Collectibles /> },
  { path: "/add-collection", component: <CreateCollection /> },
  { path: "/place-bid", component: <PlaceBids /> },
  { path: "/list-items", component: <ListItem /> },
];

export default routes;
