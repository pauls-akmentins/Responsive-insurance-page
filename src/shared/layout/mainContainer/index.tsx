import React from "react";
import classNames from "classnames";

import styles from "./MainContainer.module.css";

const MainContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={classNames(styles.mainContainer)}>{children}</div>;
};

export default MainContainer;
