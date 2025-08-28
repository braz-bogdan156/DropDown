export type DropdownOption<T = unknown> = {
  label: string;
  value: T;
};

export type DropdownProps<T> = {
  options: DropdownOption<T>[];
  value: DropdownOption<T> | null;
  onChange: (option: DropdownOption<T>) => void;
  placeholder?: string;
  renderOption?: (option: DropdownOption<T>) => React.ReactNode;
  renderValue?: (option: DropdownOption<T>) => React.ReactNode;
  searchFn?: (term: string) => DropdownOption<T>[] | Promise<DropdownOption<T>[]>;
};

export type DrownPropsButton<T> = {
  value: DropdownOption<T> | null;
  placeholder: string;
  open: boolean;
  onToggle: () => void;
  renderValue?: (option: DropdownOption<T>) => React.ReactNode;
};

export type DropDownPropsList<T> = {
  options: DropdownOption<T>[];
  value: DropdownOption<T> | null;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onSelect: (option: DropdownOption<T>) => void;
  renderOption?: (option: DropdownOption<T>) => React.ReactNode;
};

export type DropDownPropsOption<T> = {
  option: DropdownOption<T>;
  selected: boolean;
  onSelect: (option: DropdownOption<T>) => void;
  renderOption?: (option: DropdownOption<T>) => React.ReactNode;
};
