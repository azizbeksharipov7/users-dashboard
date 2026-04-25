import { ChevronDown } from "lucide-react";

export type SortKey = "name" | "age" | "email";

interface SortDropdownProps {
  value: SortKey;
  onChange: (value: SortKey) => void;
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortKey)}
        className="
          appearance-none rounded-xl border border-gray-300 bg-white
          py-2.5 pl-4 pr-10 text-sm font-medium text-gray-800
          shadow-sm outline-none transition-all
          focus:border-blue-500 focus:ring-2 focus:ring-blue-200
        "
      >
        <option value="name">Sort by: Name</option>
        <option value="age">Sort by: Age</option>
        <option value="email">Sort by: Email</option>
      </select>

      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    </div>
  );
}