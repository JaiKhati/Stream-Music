const axios = require('axios');

const searchTracks = async (query, accessToken) => {
  const response = await axios.get('https://api.spotify.com/v1/search', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      q: query,
      type: 'track',
    },
  });
  return response.data.tracks.items;
};

module.exports = { searchTracks };
