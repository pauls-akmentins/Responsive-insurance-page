import { useNavigate } from "react-router-dom";

import styles from "./TopBar.module.css";
import IfIcon from "../../assets/svg/IfIcon.svg";

const TopBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.topBarWrapper}>
      <img
        className={styles.ifLogoIcon}
        onClick={() => navigate("/policies")}
        src={IfIcon}
        alt="If Icon"
      />
      <p className={styles.topBarPolicies}>Policies</p>
    </div>
  );
};

export default TopBar;
