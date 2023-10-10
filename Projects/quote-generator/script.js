const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// let apiQuotes = [];

// SHOW LOADER
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// HIDE LOADER
function complete(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// SHOW NEW QUOTE
function newQuote(){
    loading();
    // PICK A RANDOM QUOTE FROM apiQuotes or localQuotes ARRAY
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // console.log(quote);

    // CHECK IF AUTHOR FIELD IS BLANK AND REPLACE IT WITH "Unknown"
    if(!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = "~ " + quote.author;
    }

    // CHECK THE QUOTE LENGTH TO DETERMINE STLKING
    if(quote.text.length > 100){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }

    // SHOW QUOTE, HIDE LOADER
    quoteText.textContent = quote.text;
    complete();
}

// GET QUOTES FROM API
// async function getQuotes(){
//     const apiUrl = '';
//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     }catch (error){
//         alert(error);
//         // CATCH AN ERROR HERE
//     }
// }

// TWEET QUOTE
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// EVENT LISTENERS
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// ON LOAD
// getQuotes();
newQuote();