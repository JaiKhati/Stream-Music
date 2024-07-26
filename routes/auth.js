const express = require('express');
const { getAuthUrl, getTokens } = require('../services/spotifyAuth');

const router = express.Router();

router.get('/login', (req, res) => {
  res.redirect(getAuthUrl());
});

router.get('/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const tokens = await getTokens(code);
    res.json(tokens);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
