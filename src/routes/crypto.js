// routes/crypto.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route to fetch cryptocurrency prices
router.get('/prices', async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: 'bitcoin,ethereum,cardano',  // Modify as needed
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

