import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search users...",
}: SearchInputProps) {
  return (
    <div className="relative w-full sm:max-w-sm">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full rounded-xl border border-gray-300 bg-white 
          py-2.5 pl-10 pr-4 text-sm text-gray-800 
          shadow-sm outline-none transition-all
          placeholder:text-gray-400
          focus:border-blue-500 focus:ring-2 focus:ring-blue-200
        "
      />
    </div>
  );
}