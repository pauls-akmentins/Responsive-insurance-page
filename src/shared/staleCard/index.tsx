import styles from "./StaleCard.module.css";
import ArrowRightIcon2 from "../../assets/svg/ArrowRightIcon2.svg";

const StaleCard: React.FC<{
  mainText: string;
  actionText: string;
  handleClick: () => void;
}> = ({ mainText, actionText, handleClick }) => (
  <div className={styles.staleCardContainer}>
    <p className={styles.staleCardTitle}>{mainText}</p>
    <div className={styles.buyInsuranceContainer} onClick={handleClick}>
      <p className={styles.buyInsuranceText}>{actionText}</p>
      <img
        className={styles.arrowRightIcon}
        src={ArrowRightIcon2}
        alt="Arrow Right Icon"
        width={16}
        height={16}
      />
    </div>
  </div>
);

export default StaleCard;
