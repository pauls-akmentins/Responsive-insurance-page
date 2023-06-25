import { useState } from "react";

import styles from "./PolicyTable.module.css";
import PencilIcon from "../../assets/svg/PencilIcon.svg";
import PolicyTableRow from "./PolicyTableRow";
import EditPolicyModal from "../../shared/modal";
import EditPolicyForm from "../editPolicyForm";
import { PolicyFormValues } from "../editPolicyForm/types";

const PolicyTable: React.FC<{
  localStorageFormItems: PolicyFormValues;
  onRerender: () => void;
}> = ({ localStorageFormItems, onRerender }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.policyTableContainer}>
        <div className={styles.topRowContainer}>
          <p className={styles.topRowHeading}>If Insurance Policy</p>
          <div
            className={styles.editPolicyContainer}
            onClick={() => setIsModalOpen(true)}
          >
            <img
              className={styles.editPolicyPencilIcon}
              src={PencilIcon}
              alt="Pencil Icon"
              width={20}
              height={20}
            />
            <p className={styles.editPolicyText}>Edit Policy</p>
          </div>
        </div>
        <PolicyTableRow
          rowPlaceholder="Car nickname"
          rowContent={localStorageFormItems.carNickname}
        />
        <PolicyTableRow
          rowPlaceholder="Address"
          rowContent={localStorageFormItems.homeAddress}
        />
        <PolicyTableRow
          rowPlaceholder="Phone number"
          rowContent={localStorageFormItems.phoneNumber}
        />
        <PolicyTableRow rowPlaceholder="Bonus" rowContent="30 %" isLastRow />
        <p className={styles.calculateBonusButton}>Calculate Bonus</p>
      </div>

      <EditPolicyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <EditPolicyForm
          initialValues={localStorageFormItems}
          onClose={() => setIsModalOpen(false)}
          onRerender={onRerender}
        />
      </EditPolicyModal>
    </>
  );
};

export default PolicyTable;
