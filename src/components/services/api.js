import axios from 'axios';

const BASE_URL = '/api';

export const generateImages = async (character, style, scene, numImages) => {
  try {
    const response = await axios.post(`${BASE_URL}/generate`, {
      character,
      style,
      scene,
      numImages,
    });
    return response.data;
  } catch (error) {
    console.error('Failed to generate images:', error);
    if (error.response) {
      throw new Error(`Request failed with status code ${error.response.status}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error('Error', error.message);
    }
  }
};
