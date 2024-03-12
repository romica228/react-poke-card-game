import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

/**
 * Method to get Poke list.
 */
export const getPokemonList = async () => {
  const offset = Math.floor(Math.random() * 300);

  try {
    const response = await axios.get(`${BASE_URL}/pokemon?limit=18&offset=${offset}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokémon List:', error.message);
    throw error;
  }
};

/**
 * Method to get Poke card images.
 *
 * @param {string} url - Path to image.
 */
export const getPokemonByUrl = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon by URL:', error.message);
    throw error;
  }
};
