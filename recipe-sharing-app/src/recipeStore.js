import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [], // Array to store IDs of favorite recipes
  recommendations: [], // Array to store recommended recipe objects

  // --- Recipe Management Actions (from previous steps, updated to trigger filtering) ---
  addRecipe: (newRecipe) => {
    set(state => ({
      recipes: [...state.recipes, newRecipe]
    }));
    get().filterRecipes();
    get().generateRecommendations(); // Re-generate recommendations
  },
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
    get().generateRecommendations(); // Re-generate recommendations
  },
  deleteRecipe: (id) => {
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id),
      favorites: state.favorites.filter(favId => favId !== id) // Also remove from favorites if deleted
    }));
    get().filterRecipes();
    get().generateRecommendations(); // Re-generate recommendations
  },
  updateRecipe: (updatedRecipe) => {
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    }));
    get().filterRecipes();
    get().generateRecommendations(); // Re-generate recommendations
  },

  // --- Search & Filter Actions ---
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  filterRecipes: () => {
    const state = get();
    const term = state.searchTerm.toLowerCase();
    const results = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term)
    );
    set({ filteredRecipes: results });
  },

  // --- Favorites Actions ---
  addFavorite: (recipeId) => {
    set(state => {
      // Prevent adding duplicates
      if (!state.favorites.includes(recipeId)) {
        return { favorites: [...state.favorites, recipeId] };
      }
      return state; // No change if already favorited
    });
    get().generateRecommendations(); // Re-generate recommendations after adding favorite
  },
  removeFavorite: (recipeId) => {
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    }));
    get().generateRecommendations(); // Re-generate recommendations after removing favorite
  },

  // --- Recommendations Action ---
  generateRecommendations: () => {
    set(state => {
      const allRecipes = state.recipes;
      const favoriteRecipeObjects = state.favorites
        .map(favId => allRecipes.find(r => r.id === favId))
        .filter(Boolean); // Filter out undefined if a favorite ID doesn't match a recipe

      // --- Mock Recommendation Logic ---
      // This is a simple example. In a real app, this would involve more complex algorithms.
      // Here, we'll pick 3 random recipes that are NOT currently favorites
      // and ideally have some similarity to favorites (though not implemented here).

      const nonFavoriteRecipes = allRecipes.filter(recipe =>
        !state.favorites.includes(recipe.id)
      );

      const recommendations = [];
      const numRecommendations = 3; // How many recommendations to show

      // Simple random selection from non-favorites
      while (recommendations.length < numRecommendations && nonFavoriteRecipes.length > 0) {
        const randomIndex = Math.floor(Math.random() * nonFavoriteRecipes.length);
        const recommendedRecipe = nonFavoriteRecipes.splice(randomIndex, 1)[0]; // Remove and get
        recommendations.push(recommendedRecipe);
      }

      // If no non-favorite recipes, just return some random recipes from all if available
      if (recommendations.length === 0 && allRecipes.length > 0) {
        const tempRecipes = [...allRecipes];
        while (recommendations.length < numRecommendations && tempRecipes.length > 0) {
          const randomIndex = Math.floor(Math.random() * tempRecipes.length);
          recommendations.push(tempRecipes.splice(randomIndex, 1)[0]);
        }
      }

      return { recommendations };
    });
  },
}));

export default useRecipeStore;