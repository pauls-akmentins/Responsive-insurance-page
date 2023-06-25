import { useEffect, useState } from "react";

import PageIndication from "../../shared/pageIndication";
import MainContainer from "../../shared/layout/mainContainer";
import styles from "./CarInsurance.module.css";
import MainHeader from "../../shared/layout/mainHeader";
import CarIcon from "../../assets/svg/CarIcon.svg";
import CarLargeIcon from "../../assets/svg/CarLargeIcon.svg";
import { carInsuranceDetails } from "./constants";
import InsuranceDetails from "../../shared/insuranceDetails/InsuranceDetails";
import PolicyTable from "../policyTable";
import TopBar from "../../shared/topBar";
import { PolicyFormValues } from "../editPolicyForm/types";
import { tempInitialValues } from "../editPolicyForm/constants";

const CarInsurance: React.FC<{ pageHierarchy: string[] }> = ({
  pageHierarchy,
}) => {
  /**
   * State to control and display latest data,
   * which is stored in localStorage. On form
   * submit this state will change, which will
   * trigger useEffect to "re-fetch" latest
   * local storage data, which allows to display
   * latest data without forcing a full page reload.
   */
  const [rerender, setRerender] = useState<number>(0);
  const [localStorageValues, setLocalStorageValues] =
    useState<PolicyFormValues>(tempInitialValues);

  useEffect(() => {
    if (localStorage.getItem("form")) {
      setLocalStorageValues(JSON.parse(localStorage.getItem("form") as string));
    } else {
      localStorage.setItem("form", JSON.stringify(tempInitialValues));
    }
  }, [rerender]);

  return (
    <>
      <MainContainer>
        <TopBar />
        <div className={styles.insuranceContent}>
          <div className={styles.insuranceContentWrapper}>
            <PageIndication pages={pageHierarchy} />
            <MainHeader text={localStorageValues.carNickname} />
            <div className={styles.insuranceInnerContent}>
              <div className={styles.carDetailsContainer}>
                <div className={styles.carModelDetails}>
                  <img src={CarIcon} alt="Car Icon" />
                  <p className={styles.carDetails}>
                    AAA-000 PEUGEOT 206 XR 5D 1,4
                  </p>
                </div>
                <div className={styles.carInsuranceDetails}>
                  {carInsuranceDetails.map((carInsuranceDetailItem, index) => (
                    <InsuranceDetails
                      key={`${carInsuranceDetailItem.title}-${index}`}
                      insuranceDetails={carInsuranceDetailItem}
                    />
                  ))}
                </div>
              </div>
              <div>
                <img
                  className={styles.carIconLarge}
                  src={CarLargeIcon}
                  alt="Car Icon Large"
                />
              </div>
            </div>
          </div>
        </div>
        <PolicyTable
          localStorageFormItems={localStorageValues}
          onRerender={() => setRerender(rerender + 1)}
        />
      </MainContainer>
    </>
  );
};

export default CarInsurance;
