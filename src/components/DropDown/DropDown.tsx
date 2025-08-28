import styles from "./Dropdown.module.css";
import {DropdownOption, DropdownProps } from "../../types/types";
import { DropdownButton } from "../DropDownButton/DropDownButton";
import { DropdownList } from "../DropDownList/DropDownList";
import { useDropdownLogic } from "../../hooks/userDropDownLogic";

function Dropdown<T>({
  options = [],
  value,
  onChange,
  placeholder = "Оберіть значення",
  renderOption,
  renderValue,
  searchFn,
}: DropdownProps<T>) {
  const {
    open,
    setOpen,
    searchTerm,
    setSearchTerm,
    filteredOptions,
    containerRef,
  } = useDropdownLogic(options, searchFn);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleSelect = (option: DropdownOption<T>) => {
  onChange(option);
  setOpen(false);
  setSearchTerm("");
};

  return (
    <div
      className={styles.container}
      ref={containerRef}
      tabIndex={0}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <DropdownButton
        value={value}
        placeholder={placeholder}
        open={open}
        onToggle={handleToggle}
        renderValue={renderValue}
      />
      {open && (
        <DropdownList
          options={filteredOptions}
          value={value}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSelect={handleSelect}
          renderOption={renderOption}
        />
      )}
    </div>
  );
}

export default Dropdown;