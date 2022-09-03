import Home01 from "./Home01";
import Explore04 from "./Explore04";
import Explore03 from "./Explore03";
import Explore02 from "./Explore02";
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
import Contact02 from "./Contact02";
import Collectibles from "./Collectibles";
import CreateCollection from "./CreateCollection";

const routes = [
  { path: "/", component: <Home01 /> },
  { path: "/explore-04", component: <Explore04 /> },
  { path: "/explore-03", component: <Explore03 /> },
  { path: "/explore-02", component: <Explore02 /> },
  { path: "/live-auctions", component: <LiveAuctions /> },
  { path: "/item-details-01", component: <ItemDetails01 /> },
  { path: "/item-details-02", component: <ItemDetails02 /> },
  { path: "/activity-01", component: <Activity01 /> },
  { path: "/blog", component: <Blog /> },
  { path: "/blog-details", component: <BlogDetails /> },
  { path: "/help-center", component: <HelpCenter /> },
  { path: "/authors-01", component: <Authors01 /> },
  { path: "/authors-02", component: <Authors02 /> },
  { path: "/wallet-connect", component: <WalletConnect /> },
  { path: "/create-item", component: <CreateItem /> },
  { path: "/edit-profile", component: <EditProfile /> },
  { path: "/no-result", component: <NoResult /> },
  { path: "/faq", component: <FAQ /> },
  { path: "/contact-02", component: <Contact02 /> },
  { path: "/collections", component: <Collectibles /> },
  { path: "/create-collection", component: <CreateCollection /> },
];

export default routes;
