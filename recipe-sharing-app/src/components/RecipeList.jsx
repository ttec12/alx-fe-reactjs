import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites); // Get current favorites
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  const toggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">All Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No recipes found matching your search.
          {recipes.length === 0 && " Start by adding a new one!"}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map(recipe => (
            <div
              key={recipe.id}
              className="bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden relative"
            >
              <Link to={`/recipes/${recipe.id}`} className="block p-5">
                <h3 className="text-xl font-semibold text-blue-700 mb-2 truncate">{recipe.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{recipe.description}</p>
                <div className="mt-4 text-blue-500 hover:underline text-sm font-medium">
                  View Details
                </div>
              </Link>
              {/* Favorite button */}
              <button
                onClick={() => toggleFavorite(recipe.id)}
                className="absolute top-2 right-2 p-2 rounded-full bg-white text-gray-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                aria-label={favorites.includes(recipe.id) ? `Remove ${recipe.title} from favorites` : `Add ${recipe.title} to favorites`}
              >
                {/* SVG for Heart Icon (filled if favorited, outline if not) */}
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${favorites.includes(recipe.id) ? 'fill-current text-red-500' : 'stroke-current'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;