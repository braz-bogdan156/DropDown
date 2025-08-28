import clsx from "clsx";
import styles from "./DropDownOption.module.css";
import { DropDownPropsOption } from "../../types/types";


export function DropdownOptionItem<T>({
  option,
  selected,
  onSelect,
  renderOption,
}: DropDownPropsOption<T>) {
  return (
    <div
      className={clsx(styles.option, selected && styles.optionSelected)}
      onClick={() => onSelect(option)}
    >
      {renderOption ? renderOption(option) : option.label}
    </div>
  );
}