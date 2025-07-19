import React, { useState } from 'react';

// Counter component
function Counter() {
  // Initialize state for the count, starting at 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  // Function to reset the count to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-inter">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Counter App</h1>
        <p className="text-6xl font-extrabold text-blue-600 mb-8">{count}</p>
        <div className="flex space-x-4">
          <button
            onClick={increment}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200 ease-in-out"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200 ease-in-out"
          >
            Decrement
          </button>
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200 ease-in-out"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

// Main App component that renders the Counter
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
