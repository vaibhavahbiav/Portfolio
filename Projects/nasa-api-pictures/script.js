const resultsNav = document.getElementById('resultsNav');
const favouritesNav = document.getElementById('favouritesNav');
const imagesContainer = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');

// NASA API
const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];
let favourites = {}; // favourites=object, forEach works on array, ojject.values(favourites)=makes objects into array

function showContent(page){
    window.scrollTo({top:0, behavior:'instant'});
    if(page === 'results'){
        resultsNav.classList.remove('hidden');
        favouritesNav.classList.add('hidden');
    }else{
        resultsNav.classList.add('hidden');
        favouritesNav.classList.remove('hidden');
    }
    loader.classList.add('hidden');
}

function createDOMNodes(page){
    const currentArray = page === 'results' ? resultsArray : Object.values(favourites);
    currentArray.forEach((result) => {
        // card container
        const card = document.createElement('div');
        card.classList.add('card');
        // link
        const link = document.createElement('a');
        link.href = result.hdurl;
        link.title = 'View Full Image';
        link.target = '_blank';
        // image
        const image = document.createElement('img');
        image.src = result.url;
        image.alt = 'Picture from NASA APOD';
        image.loading = 'lazy';
        image.classList.add('card-img-top');
        // card body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        // card title
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = result.title;
        // save text
        const saveText = document.createElement('p');
        saveText.classList.add('clickable');
        if(page === 'results'){
            saveText.textContent = 'Add to Favourites';
            saveText.setAttribute('onClick', `saveFavourite('${result.url}')`) ;
        }else{
            saveText.textContent = 'Remove from Favourites';
            saveText.setAttribute('onClick', `removeFavourite('${result.url}')`) ;
        }
        // card text
        const cardText = document.createElement('p');
        cardText.textContent = result.explanation;
        // footer container
        const footer = document.createElement('small');
        footer.classList.add('muted');
        // date
        const date = document.createElement('strong');
        date.textContent = result.date;
        // copyright
        const copyrightResult = result.copyright === undefined ? '' : result.copyright;
        const copyright = document.createElement('span');
        copyright.textContent = ` ${copyrightResult}`;
        // append
        footer.append(date, copyright);
        cardBody.append(cardTitle, saveText, cardText, footer);
        link.appendChild(image);
        card.append(link, cardBody);
        imagesContainer.appendChild(card);
    });
}

function updateDOM(page){
    // get favourites from local storage
    if(localStorage.getItem('nasaFavourites')){
        favourites = JSON.parse(localStorage.getItem('nasaFavourites'));
    }
    imagesContainer.textContent = ''; //to reset/refresh the favourites page automatically after removing an item
    createDOMNodes(page);
    showContent(page);
}

// get 10 images fro NASA API
async function getNasaPictures(){
    // show loader
    loader.classList.remove('hidden');
    try{
        const response = await fetch(apiUrl);
        resultsArray = await response.json();
        updateDOM('results');
    }catch(error){
        // catch error here
    }
}

// add result to favourites
function saveFavourite(itemUrl){
    // loop through results array to select favourite
    resultsArray.forEach((item) => {
        if(item.url.includes(itemUrl) && !favourites[itemUrl]){
            favourites[itemUrl] = item;
            // show sace confirmation for 2s
            saveConfirmed.hidden = false;
            setTimeout(() => {
                saveConfirmed.hidden = true;

            }, 2000);
            // set favourites in local storage
            localStorage.setItem('nasaFavourites', JSON.stringify(favourites));
        }
    });
}

// remove items Favourite
function removeFavourite(itemUrl){
    if(favourites[itemUrl]){
        delete favourites[itemUrl];
        // set favourites in local storage
        localStorage.setItem('nasaFavourites', JSON.stringify(favourites));
        updateDOM('favourites');
    }
}


// on load
getNasaPictures();