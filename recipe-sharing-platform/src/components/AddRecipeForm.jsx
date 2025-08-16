import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients.split("\n").filter((item) => item.trim() !== "");
      if (ingredientList.length < 2) {
        newErrors.ingredients = "Please enter at least 2 ingredients (one per line).";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients: ingredients.split("\n"),
        instructions: steps,
      };

      console.log("Recipe submitted:", newRecipe);

      setSuccessMessage("✅ Recipe added successfully!");
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-2xl">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        ➕ Add New Recipe
      </h1>

      {successMessage && (
        <p className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm md:text-base">
          {successMessage}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-4 md:p-6 space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 md:p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.title
                ? "border-red-500 focus:ring-red-400"
                : "focus:ring-blue-400"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients (one per line)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className={`w-full p-2 md:p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.ingredients
                ? "border-red-500 focus:ring-red-400"
                : "focus:ring-blue-400"
            }`}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="5"
            className={`w-full p-2 md:p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.steps
                ? "border-red-500 focus:ring-red-400"
                : "focus:ring-blue-400"
            }`}
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 md:py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
