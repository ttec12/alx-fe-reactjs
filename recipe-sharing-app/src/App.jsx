import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList'; // Import FavoritesList
import RecommendationsList from './components/RecommendationsList'; // Import RecommendationsList
import useRecipeStore from './recipeStore';

function App() {
  // Initialize some dummy recipes when the app loads for easy testing
  const setRecipes = useRecipeStore(state => state.setRecipes);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    setRecipes([
      { id: 1, title: 'Classic Spaghetti Carbonara', description: 'A timeless Italian pasta dish made with eggs, hard cheese, cured pork (guanciale or pancetta), and black pepper. Simple yet incredibly rich and satisfying.' },
      { id: 2, title: 'Spicy Chicken Curry', description: 'A vibrant and aromatic chicken curry, bursting with flavors from a blend of traditional Indian spices. Perfect with rice or naan bread.' },
      { id: 3, title: 'Vegetarian Lentil Soup', description: 'A hearty and nutritious lentil soup, packed with vegetables and savory herbs. Ideal for a comforting meal on a cold day.' },
      { id: 4, title: 'Homemade Pizza Margherita', description: 'Classic Neapolitan pizza with simple ingredients: San Marzano tomatoes, fresh mozzarella, basil, salt, and olive oil.' },
      { id: 5, title: 'Quick & Easy Guacamole', description: 'A fresh and zesty dip made from ripe avocados, lime juice, cilantro, onions, and serrano peppers. Perfect for parties!' },
      { id: 6, title: 'Chocolate Chip Cookies', description: 'Soft, chewy, and irresistible chocolate chip cookies. A classic dessert for all ages.' },
      { id: 7, title: 'Lemon Herb Roasted Chicken', description: 'A whole roasted chicken seasoned with lemon, garlic, and fresh herbs, resulting in juicy meat and crispy skin.' },
    ]);
    generateRecommendations(); // Generate initial recommendations
  }, [setRecipes, generateRecommendations]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-lg">
          <nav className="max-w-4xl mx-auto flex justify-between items-center">
            <Link to="/" className="text-3xl font-extrabold tracking-tight hover:text-blue-200 transition duration-300">
              My Recipe Book
            </Link>
            <div className="space-x-4">
              <Link to="/" className="text-lg font-medium hover:text-blue-200 transition duration-300">
                Home
              </Link>
              {/* Optional: Add a link to a dedicated favorites page if you create one */}
              {/* <Link to="/favorites" className="text-lg font-medium hover:text-blue-200 transition duration-300">
                Favorites
              </Link> */}
            </div>
          </nav>
        </header>

        <main className="container mx-auto p-4">
          <Routes>
            {/* Home page route */}
            <Route path="/" element={
              <>
                <AddRecipeForm />
                <hr className="my-8 border-gray-300" />
                <div className="mb-8">
                  <SearchBar />
                </div>
                <RecipeList />
                <hr className="my-8 border-gray-300" />
                <FavoritesList /> {/* Display Favorites List */}
                <hr className="my-8 border-gray-300" />
                <RecommendationsList /> {/* Display Recommendations List */}
              </>
            } />
            {/* Other routes remain the same */}
            <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
            <Route path="/edit-recipe/:recipeId" element={<EditRecipeForm />} />
            <Route path="*" element={<h2 className="text-center text-2xl mt-10 text-red-600">404 - Page Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;