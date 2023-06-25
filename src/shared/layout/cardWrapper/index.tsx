import React from "react";

import styles from "./CardWrapper.module.css";

const CardWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.cardWrapper}>{children}</div>
);

export default CardWrapper;
