import ERC721Nft_JSON from "../contracts/ERC721NFT/ERC721NFT.json";
import ERC721Factory_JSON from "../contracts/ERC721Factory/ERC721Factory.json";
import VeBudz_JSON from "../contracts/PFPContracts/420VeFam.json";

const ERC721Factory_ABI = ERC721Factory_JSON.abi;
const ERC721Nft_ABI = ERC721Nft_JSON.abi;
const VeBudz_ABI = VeBudz_JSON.abi;
const VeBudz_Address = VeBudz_JSON.Address;

export { ERC721Factory_ABI, ERC721Nft_ABI, VeBudz_ABI, VeBudz_Address };
