fetch('data/quotes.json')
  .then(response => response.json())
  .then(data => {
      const quotes = data;
      generateQuote(quotes);
  })
  .catch(error => console.error('Error fetching the quotes:', error));

function generateQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').innerText = `"${randomQuote.quote}"`;
    document.getElementById('author').innerText = `- ${randomQuote.author}`;
}


