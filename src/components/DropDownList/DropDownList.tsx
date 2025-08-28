import styles from "./DropDownList.module.css";
import { DropDownPropsList} from "../../types/types";
import { DropdownOptionItem } from "../DropDownOption/DropDownOption";

export function DropdownList<T>({
  options,
  value,
  searchTerm,
  onSearchChange,
  onSelect,
  renderOption,
}: DropDownPropsList<T>) {
  return (
    <div className={styles.list}>
      <input
        type="text"
        placeholder="Пошук..."
        className={styles.search}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {options.map((option) => (
        <DropdownOptionItem
          key={String(option.value)}
          option={option}
          selected={value?.value === option.value}
          onSelect={onSelect}
          renderOption={renderOption}
        />
      ))}
    </div>
  );
}