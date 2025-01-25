import { Search } from "lucide-react";

interface Props {
  label?: string;
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  handleSearch?: () => void;
}

const SearchInput: React.FC<Props> = ({ label, searchTerm, setSearchTerm }) => {
  return (
    <div className="flex h-10 w-full border hover:ring-2 focus:ring-4 rounded px-2">
      <label htmlFor="search" className="sr-only">
        {label}
      </label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full h-full outline-none text-sm"
        placeholder="Buscar productos..."
      />
      <button className="opacity-70 hover:opacity-100">
        <Search size={17} />
      </button>
    </div>
  );
};
export default SearchInput;
