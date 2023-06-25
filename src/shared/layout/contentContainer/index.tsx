import React from "react";
import styles from "./ContentContainer.module.css";

const ContentContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
};

export default ContentContainer;
