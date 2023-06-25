import styles from "./InsuranceDetails.module.css";
import { InsuranceDetail } from "../../content/insurances/types";

const InsuranceDetails: React.FC<{
  insuranceDetails: InsuranceDetail;
}> = ({ insuranceDetails: { title, details } }) => {
  return (
    <div className={styles.insuranceDetailsContainer}>
      <p className={styles.insuranceDetailsTitle}>{title}</p>
      <p className={styles.insuranceDetails}>{details}</p>
    </div>
  );
};

export default InsuranceDetails;
