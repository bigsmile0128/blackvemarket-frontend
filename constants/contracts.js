import Connex from '@vechain/connex'

import { NODE, NETWORK } from './'

const marketplaceContractAddr = '0x1605aCE7D088F0C4D839F2e02d950D67bD25b2F2'
const banlistContractAddr = '0x40B100eD73E87B0d9C56c1764A31AFD25fCe852E'
const newMarketContractAddr = '0xf99EA55a2BEe3eE862D7cc61AD9E04FCb5991D5e'
// const marketplaceContractAddr = '0x01c2F482473bc80a807f71A5f9d70750d53Ee27a'
// const banlistContractAddr = '0xc3f1AA90d1830124dE42E77ba62d58e0E7488cE3'
// // const newMarketContractAddr = '0x0537702C5e735Bc1D89d8D0E8CBB9fD1dDfB574E'
// const newMarketContractAddr = '0x672B8080040C606c5778E574A2388CD716F397fF'

const connex = new Connex({
  node: NODE,
  network: NETWORK
})

const marketContract = connex.thor.account(marketplaceContractAddr)
const newMarketContract = connex.thor.account(newMarketContractAddr)
const banlistContract = connex.thor.account(banlistContractAddr)

export {
  connex,
  marketContract,
  banlistContract,
  newMarketContract,
  marketplaceContractAddr,
  newMarketContractAddr
}