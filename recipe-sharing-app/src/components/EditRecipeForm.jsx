import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const EditRecipeForm = () => {
  const { recipeId } = useParams();
  const id = parseInt(recipeId);
  const navigate = useNavigate();

  // Get the recipe and the update action from the store
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === id));
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Populate form fields when the component mounts or recipe changes
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !description) {
      alert('Please fill in both title and description.');
      return;
    }
    updateRecipe({ id, title, description });
    navigate(`/recipes/${id}`); // Navigate back to the recipe details page
  };

  if (!recipe) {
    return (
      <div className="p-4 text-center text-red-500">
        <h2 className="text-2xl font-bold mb-4">Recipe Not Found</h2>
        <p>Cannot edit a recipe that does not exist.</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 block">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Edit Recipe</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe Title"
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Recipe Description"
            rows="6"
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
          <Link
            to={`/recipes/${id}`}
            className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition duration-300 ease-in-out text-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditRecipeForm;