import { createContext, useContext, useState } from "react";

const DropdownContext = createContext<{
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}>({
  activeId: null,
  setActiveId: () => {},
});
export const DropdownProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  return (
    <DropdownContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => useContext(DropdownContext);