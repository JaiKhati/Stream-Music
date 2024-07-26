const express = require('express');
const { searchTracks } = require('../services/spotifyMusic');

const router = express.Router();

router.get('/search', async (req, res) => {
  const { query, accessToken } = req.query;
  try {
    const tracks = await searchTracks(query, accessToken);
    res.json(tracks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
