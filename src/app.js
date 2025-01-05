// src/app.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Fetch real-time crypto prices from CoinGecko
router.get('/prices', async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: 'bitcoin,ethereum,cardano',  // Add more as needed
        vs_currencies: 'usd',
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    res.status(500).send('Error fetching crypto prices');
  }
});

module.exports = router;

