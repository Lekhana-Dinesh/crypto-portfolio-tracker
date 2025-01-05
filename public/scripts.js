// Fetch live prices
async function fetchLivePrices() {
  try {
    const response = await fetch('/api/prices');
    const data = await response.json();

    // Update live prices on the UI
    document.getElementById('bitcoin-price').textContent = data.bitcoin.usd;
    document.getElementById('ethereum-price').textContent = data.ethereum.usd;
    document.getElementById('cardano-price').textContent = data.cardano.usd;
  } catch (error) {
    console.error('Error fetching live prices:', error);
  }
}

// Fetch historical data for Bitcoin and render the chart
async function fetchHistoricalData() {
  try {
    const response = await fetch('/api/historical-data');
    const historicalData = await response.json();

    const ctx = document.getElementById('bitcoin-chart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Bitcoin Price (Last 7 Days)',
          data: historicalData,
          borderColor: 'green',
          backgroundColor: 'rgba(0, 255, 0, 0.2)',
          fill: true,
          lineTension: 0.2
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
              tooltipFormat: 'll'
            },
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Price (USD)'
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error fetching historical data:', error);
  }
}

// Initial calls to fetch live prices and historical data
fetchLivePrices();
fetchHistoricalData();

// Refresh data every 60 seconds
setInterval(() => {
  fetchLivePrices();
}, 60000);

