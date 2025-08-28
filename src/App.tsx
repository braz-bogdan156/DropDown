import { useState } from "react";
import Dropdown from "./components/DropDown/DropDown";
import { DropdownProvider } from "./context/DropDownContext";
import './styles/global.css'

const mockOptions = [
  { label: "Київ", value: "Kyiv" },
  { label: "Львів", value: "Lviv" },
  { label: "Одеса", value: "Odesa" },
];

function App() {
  const [selected, setSelected] = useState<{ label: string; value: string } | null>(null);

  const asyncSearch = async (term: string) => {
    await new Promise((r) => setTimeout(r, 500));
    return mockOptions.filter((opt) =>
      opt.label.toLowerCase().includes(term.toLowerCase())
    );
  };

  return (
    <DropdownProvider>
      <div style={{ padding: "2rem" }}>
        <Dropdown
          options={mockOptions}
          value={selected}
          onChange={setSelected}
          placeholder="Оберіть ваше місто"
          searchFn={asyncSearch}
        />
      </div>
    </DropdownProvider>
  );
}

export default App;