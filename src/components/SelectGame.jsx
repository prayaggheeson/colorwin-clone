import { useState } from "react";
import ParityGame from "../pages/ParityGame";
import BconeGame from "../pages/BconeGame";
import EmerdGame from "../pages/EmerdGame";
import SapreGame from "../pages/SapreGame";

const categories = ["Parity", "Sapre", "Bcone", "Emerd"];

const SelectGame = () => {
  const [selectedCategory, setSelectedCategory] = useState("Parity");

  const getCategoryComponent = (category) => {
    switch (category) {
      case "Parity":
        return <ParityGame />;
      case "Sapre":
        return <SapreGame />;
      case "Bcone":
        return <BconeGame />;
      case "Emerd":
        return <EmerdGame />;
      default:
        return null;
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const selectedComponent = getCategoryComponent(selectedCategory);

  return (
    <>
      <div className="grid grid-flow-col gap-3 md:gap-6 items-center justify-center py-4 md:py-8 space-x-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryClick(category)}
            className={`${
              category === selectedCategory
                ? "bg-blue-500 shadow-xl md:shadow shadow-blue-500 transition-all duration-300 text-white"
                : "bg-white text-yellow-500"
            } border border-transparent rounded-full text-base font-medium px-5 py-1.5 md:px-10 md:py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-3 md:mb-0`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-col-0 gap-4">
        {selectedComponent && (
          <div key={selectedCategory} className="p-4 bg-white rounded-md shadow-md">
            {selectedComponent}
          </div>
        )}
      </div>
    </>
  );
};

export default SelectGame;
