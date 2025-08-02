import React from 'react';
import Search from './components/Search'
import './index.css'; // Or './App.css' if you used that

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-8">GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;
