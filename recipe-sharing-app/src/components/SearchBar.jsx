import React from 'react';
import useRecipeStore from '../recipeStore'; // Adjust path as needed

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const searchTerm = useRecipeStore(state => state.searchTerm); // To make it a controlled component

  return (
    <input
      type="text"
      placeholder="Search recipes by name or description..."
      value={searchTerm} // Make it a controlled component
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
      aria-label="Search recipes"
    />
  );
};

export default SearchBar;