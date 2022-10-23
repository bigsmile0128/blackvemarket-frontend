import Connex from "@vechain/connex";
import { NETWORK, NODE } from "../assets/constants";

export const getConnex = () => {
  const connex = new Connex({
    node: NODE,
    network: NETWORK,
  });

  return connex;
};
