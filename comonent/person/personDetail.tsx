import {
  personDetailInterface,
  financialAssetInterface,
} from "@/public/Interfaces/personDetail";
import Image from "next/image";
import styles from "./personDetail.module.css";

const FinancialAssets = ({
  financialAsset,
}: {
  financialAsset: financialAssetInterface;
}) => {
  return (
    <div>
      <p>Ticker: {financialAsset.companyName}</p>
      <p>Shares: {financialAsset.numberOfShares}</p>
      <p>Exercise Price: {financialAsset.exerciseOptionPrice}</p>
    </div>
  );
};

export const PersonDetailThumbnail = ({
  personDetail,
}: {
  personDetail: personDetailInterface;
}) => {
  const ImageScr =
    personDetail.squareImage === "https:undefined"
      ? ""
      : personDetail.squareImage;
  return (
    <>
      <div className={styles.header}>
        <Image
          src={ImageScr}
          alt={`${personDetail.id} image`}
          width={400}
          height={400}
        />
        <p className={styles.title}>{personDetail.name}</p>
        <p className={styles.content}>
          Networth: {personDetail.netWorth / 1000} Billion
        </p>
        <p className={styles.content}>Country: {personDetail.contry}</p>
        <p className={styles.content}>Industry: {personDetail.industries}</p>
        <p className={styles.content}>{personDetail.bio}</p>
      </div>
      <div className={styles.financial}>
        <ul className={styles.financailUl}>
          {personDetail.financialAssets.map((financialAsset, index) => (
            <li key={index} className={styles.financialCard}>
              <FinancialAssets financialAsset={financialAsset} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
