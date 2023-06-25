import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./PageIndication.module.css";
import ArrowRightIcon from "../../assets/svg/ArrowRightIcon.svg";
import classNames from "classnames";

const PageIndication: React.FC<{ pages: string[] }> = ({ pages }) => {
  const navigate = useNavigate();

  const handlePageRoute = (formattedPage: string) => {
    let pageToRedirect = `/${formattedPage}`;

    if (formattedPage === "home") {
      pageToRedirect = "/";
    }

    navigate(pageToRedirect, { replace: true });
  };

  return (
    <div className={styles.pageIndicationContainer}>
      {pages.map((page, index) => (
        <React.Fragment key={`${page}-${index}`}>
          <div
            className={classNames(styles.pageName, {
              [styles.lastPageName]: index === pages.length - 1,
            })}
            onClick={() => handlePageRoute(page.toLowerCase())}
          >
            {page}
          </div>
          {index !== pages.length - 1 ? (
            <img
              className={styles.arrowRightIcon}
              src={ArrowRightIcon}
              alt="Arrow Right Icon"
            />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PageIndication;
