import { BiSearch } from "react-icons/bi";
import ProductCard from "../components/ProductCard";



const Search = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-black"
          />
          <BiSearch className="absolute right-3 top-3 h-4 w-4 text-gray-500" />
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        <ProductCard/>
      </div>
    </div>
  );
};

export default Search;
