export interface personDetailInterface {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets: financialAssetInterface[];
  thumbnail: string;
  squareImage: string;
  bio: string;
  about: string;
  netWorth: number;
}

export interface financialAssetInterface {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  exerciseOptionPrice: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: true;
  currentPrice: number;
}
