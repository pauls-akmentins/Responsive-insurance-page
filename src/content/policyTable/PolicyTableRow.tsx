import classNames from "classnames";
import styles from "./PolicyTable.module.css";

const PolicyTableRow: React.FC<{
  rowPlaceholder: string;
  rowContent: string;
  isLastRow?: boolean;
}> = ({ rowPlaceholder, rowContent, isLastRow = false }) => {
  return (
    <div
      className={classNames(styles.rowContainer, {
        [styles.lastRowContainer]: isLastRow,
      })}
    >
      <p className={styles.rowPlaceholderText}>{rowPlaceholder}</p>
      <p className={styles.rowContentText}>{rowContent}</p>
    </div>
  );
};

export default PolicyTableRow;
