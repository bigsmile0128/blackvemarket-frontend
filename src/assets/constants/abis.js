import ERC721Nft_JSON from "../contracts/ERC721NFT/ERC721NFT.json";
import ERC721Factory_JSON from "../contracts/ERC721Factory/ERC721Factory.json";
import VeBudz_JSON from "../contracts/PFPContracts/420VeFam.json";
import Warbands_JSON from "../contracts/PFPContracts/Warbands.json";
import BlackVeMarket_JSON from "../contracts/BlackVeMarket/BlackVeMarket.json";
import vVET_JSON from "../contracts/VVET/VVET.json";

const ERC721Factory_ABI = ERC721Factory_JSON.abi;
const ERC721Nft_ABI = ERC721Nft_JSON.abi;
const VeBudz_ABI = VeBudz_JSON.abi;
const VeBudz_Address = VeBudz_JSON.Address;
const Warbands_ABI = Warbands_JSON.abi;
const Warbands_Address = Warbands_JSON.Address;
const BlackVeMarket_ABI = BlackVeMarket_JSON.abi;
const BlackVeMarket_Address = BlackVeMarket_JSON.address;
const vVET_ABI = vVET_JSON.abi;
const vVET_Address = vVET_JSON.address;

export {
    ERC721Factory_ABI,
    ERC721Nft_ABI,
    VeBudz_ABI,
    VeBudz_Address,
    Warbands_ABI,
    Warbands_Address,
    BlackVeMarket_ABI,
    BlackVeMarket_Address,
    vVET_ABI,
    vVET_Address
};
