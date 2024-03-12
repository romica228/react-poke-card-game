import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

// Wrapper method to get Pokémon by name or ID
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

// Wrapper method to get Pokémon abilities by name or ID
export const getPokemonByUrl = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon by URL:', error.message);
    throw error;
  }
};
