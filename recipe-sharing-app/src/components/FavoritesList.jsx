import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const FavoritesList = () => {
  const favoritesIds = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  // Map favorite IDs back to full recipe objects
  const favoriteRecipes = favoritesIds
    .map(id => recipes.find(recipe => recipe.id === id))
    .filter(Boolean); // Filter out any undefined if a favorite ID no longer exists

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Favorite Recipes</h2>
      {favoriteRecipes.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">You haven't favorited any recipes yet!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteRecipes.map(recipe => (
            <div
              key={recipe.id}
              className="bg-purple-50 border border-purple-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden relative"
            >
              <Link to={`/recipes/${recipe.id}`} className="block p-5">
                <h3 className="text-xl font-semibold text-purple-700 mb-2 truncate">{recipe.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{recipe.description}</p>
              </Link>
              <button
                onClick={() => removeFavorite(recipe.id)}
                className="absolute top-2 right-2 p-2 rounded-full bg-white text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                aria-label={`Remove ${recipe.title} from favorites`}
              >
                {/* SVG for Heart Icon (filled to indicate favorited) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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

export default FavoritesList;