//https://github.com/lukePeavey/quotable - quote API

const API_URL = "https://api.quotable.io/random";

const quote = document.querySelector('blockquote');
const author = document.querySelector("span");

async function getQuote(){
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log(data);

    quote.innerText = data.content;
    author.innerText = data.author;
}

const quoteBtn = document.querySelector('#quote-btn');

quoteBtn.addEventListener('click', getQuote);

// https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview

const twitterBtn = document.querySelector('#twitter-btn');

twitterBtn.addEventListener('click', function(e){
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?hashtags=quotes,dailyquotes&text=' + '"'+ quote.innerText + '"' +' - '+ author.innerText);
});