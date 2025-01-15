const axios = require('axios');

const xMasterKey = "$2a$10$sujZUgBt7AyrdxhwKo7OSuFOYDTEIFKsJxWt68lGtlX9lQTMWw47K";
const xAccessKey = "$2a$10$t15OgGh1DJz5NaGlQHaRzejoHDZK4nLKki5RaB9B6xr8flPu2XGlO";


const create = async (data) => {
  const headers = {
    'Content-Type': 'application/json',
    'X-Master-Key': xMasterKey, 
    'X-Access-Key': xAccessKey, 
    'X-Bin-Private': 'true', 
  };

  try {
    const response = await axios.post('https://api.jsonbin.io/v3/b', data, { headers });
    return response.data.metadata; 
  } catch (error) {
    throw error.response?.data || error.message; 
  }
};


const get = async (binId) => {
  const headers = {
    'X-Master-Key': xMasterKey
  };

  try {
    const response = await axios.get(`https://api.jsonbin.io/v3/b/${binId}`, { headers });
    return response.data.record; 
  } catch (error) {
    throw error.response?.data || error.message; 
  }
};

module.exports = { create, get };
