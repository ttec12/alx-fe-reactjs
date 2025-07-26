import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const recipes = useRecipeStore(state => state.recipes); // Trigger re-gen if recipes change
  const favorites = useRecipeStore(state => state.favorites); // Trigger re-gen if favorites change

  // Generate recommendations when the component mounts or dependencies change
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations, recipes, favorites]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Recommended For You</h2>
      {recommendations.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Add some favorites to get personalized recommendations!
          {recipes.length > 0 && " Or, we're still thinking of new ideas for you."}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map(recipe => (
            <div
              key={recipe.id}
              className="bg-green-50 border border-green-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden"
            >
              <Link to={`/recipes/${recipe.id}`} className="block p-5">
                <h3 className="text-xl font-semibold text-green-700 mb-2 truncate">{recipe.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{recipe.description}</p>
                <div className="mt-4 text-green-500 hover:underline text-sm font-medium">
                  View Recipe
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;