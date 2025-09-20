import axios from "axios";

// Fetch single user (Task 1)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fetch multiple users with advanced search (Task 2)
export const fetchAdvancedUserData = async (username, location, minRepos) => {
  try {
    let query = "";
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );

    // We need extra details (repos, location), so fetch individually
    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        const details = await axios.get(`https://api.github.com/users/${user.login}`);
        return details.data;
      })
    );

    return usersWithDetails;
  } catch (error) {
    throw error;
  }
};
