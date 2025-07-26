import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton'; // Import the new component

const RecipeDetails = () => {
  // Get the recipeId from the URL parameters
  const { recipeId } = useParams();
  const id = parseInt(recipeId); // Convert string ID from URL to integer

  // Find the recipe in the store
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === id)
  );

  if (!recipe) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-500">Recipe Not Found</h2>
        <p className="text-gray-700">The recipe you are looking for does not exist.</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{recipe.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">{recipe.description}</p>

      <div className="flex justify-end space-x-4">
        <Link
          to={`/edit-recipe/${recipe.id}`}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Edit Recipe
        </Link>
        {/* Use the new DeleteRecipeButton component */}
        <DeleteRecipeButton recipeId={recipe.id} />
        <Link
          to="/"
          className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition duration-300 ease-in-out"
        >
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetails;