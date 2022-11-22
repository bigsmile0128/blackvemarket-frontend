//==========test heroku==========//

// const NODE = "https://testnet.vecha.in/";
// const NETWORK = "test";

const NODE = "https://mainnet.vecha.in/";
const NETWORK = "main";

const BASE_URL = process.env.NODE_ENV=="development"?"http://localhost:9999/api/v1":"https://blackvemarket-backend.herokuapp.com/api/v1";
const BACKEND_URL = process.env.NODE_ENV=="development"?"http://localhost:9999/upload/":"https://blackvemarket-backend.herokuapp.com/upload/";

//==========main heroku==========//

const API_URL = "https://veblackmarket.herokuapp.com/api";
// const NODE = "https://mainnet.veblocks.net/";
// const NETWORK = "main";

const ITEMSPERPAGE = 12;

//==========contract address==========//

// const mintAddress = "0xb78d3cA17beBB3ABb14899F3c7903d2AF46DffC5";
// const nftFactoryAddress = "0xa720D8fDdddedB9E80C9Adf75335E407cBD341D7";
// const auctionAddress = "0x798807bb4d6673a2Bb2F55a0E119D5c1a1e8F901";

export { API_URL, NODE, NETWORK, ITEMSPERPAGE, BASE_URL, BACKEND_URL };
