import axios from 'axios';

const GITHUB_API_URL = import.meta.env.VITE_APP_GITHUB_API_URL;
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const headers = GITHUB_API_KEY ? {
  Authorization: `token ${GITHUB_API_KEY}`,
} : {};

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`, { headers });
    return { data: response.data, error: null };
  } catch (error) {
    console.error("Error fetching user data:", error);
    if (error.response && error.response.status === 404) {
      return { data: null, error: "Looks like we can't find the user." };
    } else if (error.response && error.response.status === 403) {
      return { data: null, error: "API rate limit exceeded. Please try again later or provide an API key." };
    }
    return { data: null, error: "An unexpected error occurred." };
  }
};

// For advanced search (Step 2)
export const searchUsers = async (query, location = '', minRepos = '') => {
  let searchUrl = `${GITHUB_API_URL}/search/users?q=${query}`;

  if (location) {
    searchUrl += `+location:${location}`;
  }
  if (minRepos) {
    searchUrl += `+repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(searchUrl, { headers });
    return { data: response.data.items, error: null }; // GitHub search API returns 'items'
  } catch (error) {
    console.error("Error searching users:", error);
    if (error.response && error.response.status === 403) {
      return { data: null, error: "API rate limit exceeded. Please try again later or provide an API key." };
    }
    return { data: null, error: "An error occurred during advanced search." };
  }
};