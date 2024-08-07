export default interface personDetailInterface {
  id: string;
  state: string;
  city: string;
  name: string;
  contry: string;
  position: number;
  industries: string[];
  financialAssets: financialAssetInterface[];
  thumbnail: string;
  squareImage: string;
  bio: string;
  about: string;
  netWorth: number;
}

interface financialAssetInterface {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: true;
  currentPrice: number;
}
