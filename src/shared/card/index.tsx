import { useNavigate } from "react-router-dom";

import styles from "./Card.module.css";
import { PoliciesCard } from "../../content/policies/types";
import ArrowRightIcon2 from "../../assets/svg/ArrowRightIcon2.svg";

const Card: React.FC<{ policy: PoliciesCard }> = ({ policy }) => {
  const navigate = useNavigate();
  const formattedRoute = policy.title.toLowerCase().split(" ").join("-");

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <img src={policy.imgSrc} alt={policy.title} width={180} height={180} />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{policy.title}</p>
        <div className={styles.subTitleContainer}>
          <p className={styles.cardSubtitle}>{policy.subTitle}</p>
          <p className={styles.cardSubtitleContent}>{policy.subTitleContent}</p>
        </div>
        <div
          className={styles.viewInsuranceDetailsContainer}
          onClick={() => navigate(`/policies/${formattedRoute}`)}
        >
          <p className={styles.viewInsuranceDetailsText}>
            View insurance details
          </p>
          <img
            className={styles.arrowRightIcon}
            src={ArrowRightIcon2}
            alt="Arrow Right Icon"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
