const API_URL = process.env.REACT_APP_API_URL;

export const fetchActivity = async () => {
  try {
    const response = await fetch(`${API_URL}/activity`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch activity:', error);
    throw error;
  }
};