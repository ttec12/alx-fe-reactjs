import React, { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [searchType, setSearchType] = useState('user'); // 'user' or 'advanced'

  const [userData, setUserData] = useState(null);
  const [searchResults, setSearchResults] = useState([]); // For advanced search
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);
    setSearchResults([]);

    if (searchType === 'user') {
      const { data, error: apiError } = await fetchUserData(username);
      if (apiError) {
        // Corrected: Directly set the error message received from the service
        setError(apiError);
      } else {
        setUserData(data);
      }
    } else { // Advanced Search
      if (!username && !location && !minRepos) {
        setError("Please enter at least one search criterion for advanced search.");
        setLoading(false);
        return;
      }
      const { data, error: apiError } = await searchUsers(username, location, minRepos);
      if (apiError) {
        setError(apiError);
      } else {
        setSearchResults(data);
      }
    }
    setLoading(false);
  };

  return (
    <div className="p-4 w-full max-w-2xl mx-auto">
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            value="user"
            checked={searchType === 'user'}
            onChange={() => setSearchType('user')}
            className="mr-1"
          />
          Search by Username
        </label>
        <label>
          <input
            type="radio"
            value="advanced"
            checked={searchType === 'advanced'}
            onChange={() => setSearchType('advanced')}
            className="mr-1"
          />
          Advanced Search
        </label>
      </div>

      <form onSubmit={handleSearch} className="mb-6 p-4 border rounded-lg shadow-sm bg-white">
        {searchType === 'user' && (
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">GitHub Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g., octocat"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        )}

        {searchType === 'advanced' && (
          <>
            <div className="mb-4">
              <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-1">Keywords (username, etc.):</label>
              <input
                type="text"
                id="keyword"
                value={username} // Using username state for general query in advanced search
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g., react developer"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location:</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., London"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700 mb-1">Minimum Repositories:</label>
              <input
                type="number"
                id="minRepos"
                value={minRepos}
                onChange={(e) => setMinRepos(e.target.value)}
                placeholder="e.g., 10"
                min="0"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-lg text-gray-700">Loading...</p>}
      {error && <p className="text-center text-red-500 text-lg">{error}</p>}

      {userData && searchType === 'user' && (
        <div className="border p-6 rounded-lg shadow-md bg-white mt-6">
          <h2 className="text-2xl font-semibold mb-3">{userData.name || userData.login}</h2>
          <div className="flex items-center mb-4">
            <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full mr-4 border-2 border-gray-200" />
            <div>
              <p className="text-gray-700">
                <span className="font-medium">Profile Link:</span>{' '}
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {userData.html_url}
                </a>
              </p>
              {userData.location && <p className="text-gray-700"><span className="font-medium">Location:</span> {userData.location}</p>}
              {userData.public_repos !== undefined && <p className="text-gray-700"><span className="font-medium">Public Repositories:</span> {userData.public_repos}</p>}
              {userData.followers !== undefined && <p className="text-gray-700"><span className="font-medium">Followers:</span> {userData.followers}</p>}
              {userData.bio && <p className="text-gray-600 italic mt-2">"{userData.bio}"</p>}
            </div>
          </div>
        </div>
      )}

      {searchResults.length > 0 && searchType === 'advanced' && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map((user) => (
              <div key={user.id} className="border p-4 rounded-lg shadow-sm bg-white flex flex-col items-center text-center">
                <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mb-3 border border-gray-200" />
                <h3 className="text-xl font-medium">{user.login}</h3>
                <p className="text-sm text-gray-600">{user.type}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-600 hover:underline text-sm">
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
      {searchResults.length === 0 && !loading && !error && searchType === 'advanced' && (username || location || minRepos) && (
        <p className="text-center text-gray-700 mt-6">No users found matching your criteria.</p>
      )}
    </div>
  );
};

export default Search;
