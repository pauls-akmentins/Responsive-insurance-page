import { Formik } from "formik";

import styles from "./EditPolicyForm.module.css";
import InputField from "../../shared/inputField";
import Button from "../../shared/button";
import { PolicyFormValues } from "./types";
import { validationSchema } from "./constants";

const EditPolicyForm: React.FC<{
  onClose: () => void;
  initialValues: PolicyFormValues;
  onRerender: () => void;
}> = ({ onClose, onRerender, initialValues }) => {
  const handleFormSubmit = (values: PolicyFormValues): void => {
    localStorage.setItem("form", JSON.stringify(values));
    onRerender();
    onClose();
  };

  return (
    <div className={styles.editPolicyContainer}>
      <div className={styles.editPolicyHeader}>
        <p className={styles.editPolicyText}>Edit Policy</p>
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <>
              <div className={styles.formContainer}>
                <InputField
                  id="carNickname"
                  label="Car nickname"
                  value={values.carNickname}
                  onChange={handleChange}
                  invalid={errors.carNickname}
                />
                <InputField
                  id="homeAddress"
                  label="Address"
                  value={values.homeAddress}
                  onChange={handleChange}
                  invalid={errors.homeAddress}
                />
                <InputField
                  id="phoneNumber"
                  label="Phone number"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  invalid={errors.phoneNumber}
                />
                <div className={styles.editModalFooter}>
                  <Button onClick={onClose} applyRightMargin>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    variant="secondary"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditPolicyForm;
