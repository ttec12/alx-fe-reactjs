import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe? This action cannot be undone.')) {
      deleteRecipe(recipeId);
      navigate('/'); // Redirect to the home page after deletion
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;