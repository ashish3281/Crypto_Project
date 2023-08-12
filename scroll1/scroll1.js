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
    // Process the fetched list of coins
    const coins = data.data.coins;
    coins.forEach(coin => {
      const li = document.createElement('li');
      li.textContent = coin.name;
      coinList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error fetching list of coins:', error);
  });
