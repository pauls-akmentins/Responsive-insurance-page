import React from "react";
import styles from "./MainHeader.module.css";

const MainHeader: React.FC<{ text: React.ReactNode }> = ({ text }) => (
  <p className={styles.mainHeader}>{text}</p>
);

export default MainHeader;
