import { useState, useEffect, useRef, useId } from "react";
import { DropdownOption } from "../types/types";
import { useDropdownContext } from "../context/DropDownContext";

export function useDropdownLogic<T>(
  options: DropdownOption<T>[],
  searchFn?: (term: string) => DropdownOption<T>[] | Promise<DropdownOption<T>[]>
) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<DropdownOption<T>[]>(options);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const id = useId();
  const { activeId, setActiveId } = useDropdownContext();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open) setActiveId(id);
    else if (activeId === id) setActiveId(null);
  }, [open]);

  useEffect(() => {
    if (activeId !== id) setOpen(false);
  }, [activeId]);

  useEffect(() => {
  const fetchOptions = async () => {
    if (searchFn) {
      const result = await Promise.resolve(searchFn(searchTerm));
      setFilteredOptions(result);
    } else {
      const result = options.filter((opt) =>
        opt.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOptions(result);
    }
  };
  fetchOptions();
}, [searchTerm, options]);

  return {
    open,
    setOpen,
    searchTerm,
    setSearchTerm,
    filteredOptions,
    containerRef,
    id,
  };
}