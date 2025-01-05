// public/app.js
document.addEventListener("DOMContentLoaded", () => {
  // Fetch real-time prices
  fetch('/crypto/prices')
    .then(response => response.json())
    .then(data => {
      displayPrices(data);
      renderChart(data);
    })
    .catch(error => console.error('Error fetching crypto prices:', error));
  
  // Function to display real-time prices
  function displayPrices(data) {
    const pricesDiv = document.getElementById('crypto-prices');
    pricesDiv.innerHTML = `
      <p><strong>Bitcoin:</strong> $${data.bitcoin.usd}</p>
      <p><strong>Ethereum:</strong> $${data.ethereum.usd}</p>
      <p><strong>Cardano:</strong> $${data.cardano.usd}</p>
    `;
  }

  // Function to render chart
  function renderChart(data) {
    const ctx = document.getElementById('cryptoChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Bitcoin', 'Ethereum', 'Cardano'], // You can add more currencies here
        datasets: [{
          label: 'Cryptocurrency Prices (USD)',
          data: [data.bitcoin.usd, data.ethereum.usd, data.cardano.usd],
          borderColor: 'green',
          backgroundColor: 'rgba(45, 154, 89, 0.2)',
          fill: true,
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
});

