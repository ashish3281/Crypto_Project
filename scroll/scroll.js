const apiKey = '18d911c692msh80627065c6dcda0p1f3398jsn3fdfd19de2b8';
const apiUrl = 'https://coinranking1.p.rapidapi.com/coins';

const coinList = document.getElementById('coinList');

fetch(apiUrl, {
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
})
.then(response => response.json())
.then(data => {
  const coins = data.data.coins;
  const coinNames = coins.map(coin => coin.name).join(' | '); // Join coin names with a separator
  coinList.textContent = coinNames; // Set the coin names as text content
})
.catch(error => {
  console.error('Error fetching list of coins:', error);
});
