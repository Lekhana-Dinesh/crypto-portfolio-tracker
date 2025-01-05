document.addEventListener("DOMContentLoaded", () => {
    const fetchPrices = async () => {
        try {
            const response = await fetch('/crypto');
            const data = await response.json();
            const cryptoList = document.getElementById('crypto-list');
            cryptoList.innerHTML = '';
            data.forEach(crypto => {
                const div = document.createElement('div');
                div.className = 'crypto-item';
                div.innerText = `${crypto.name}: $${crypto.price}`;
                cryptoList.appendChild(div);
            });
        } catch (error) {
            console.error('Error fetching prices:', error);
        }
    };
    
    fetchPrices();
    setInterval(fetchPrices, 60000); // Fetch prices every minute
});

