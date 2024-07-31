const apiURL = import.meta.env.VITE_API_COSMOS ?? "http://localhost:1317";
const rpcURL = import.meta.env.VITE_WS_TENDERMINT ?? "http://localhost:26657";
const prefix = import.meta.env.VITE_ADDRESS_PREFIX ?? "dev";
const coinDenom = "dev";
const coinMinimalDenom = "udev";
const coinDecimals = "6";
const coinImageUrl = "https://raw.githubusercontent.com/jmnote/z-icons/master/svg/go.svg";
const coinGeckoId = "DEV";

export const env = {
  apiURL,
  rpcURL,
  prefix,
  coinDenom,
  coinMinimalDenom,
  coinDecimals,
  coinImageUrl,
  coinGeckoId
};
