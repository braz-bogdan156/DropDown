import clsx from "clsx";
import styles from "./DropDownButton.module.css";
import { DrownPropsButton} from "../../types/types";

export function DropdownButton<T>({
  value,
  placeholder,
  open,
  onToggle,
  renderValue,
}: DrownPropsButton<T>) {
  return (
    <button type="button" className={styles.button} onClick={onToggle}>
      {value ? (
        renderValue ? renderValue(value) : value.label
      ) : (
        <span className={styles.placeholder}>{placeholder}</span>
      )}
      <span className={clsx(styles.arrow, open && styles.arrowOpen)}>▼</span>
    </button>
  );
}