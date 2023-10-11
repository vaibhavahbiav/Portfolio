const bgm = document.getElementById('bgm');
const musicControl = document.getElementById('music-controls');
const strike = document.getElementById('strike');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const whatsapp = document.getElementById('whatsapp');
const git = document.getElementById('git');

var volumeSlider = document.getElementById('volume-slider');
var volumeValue = document.getElementById('volume-value');

const projects = [
    {
        name: 'Animated Navigation Menu',
        image: '1',
        textOne: 'A very simple Navigation Menu that smoothly transitions to respective sections on web page.',
        textTwo: 'It uses sliding transition animations and a menu bar from W3Schools.',
        link: 'https://vaibhavahbiav.github.io/Animated-Navigation-Menu/',
    },
    {
        name: 'Animated Webpage',
        image: '2',
        textOne: 'An animated webpage having multiple CSS on scroll animations for elements on website.',
        textTwo: 'Website is a template from Tailwind CSS starter kit and sroll animations from AOS library. Website also has very random information.',
        link: 'https://vaibhavahbiav.github.io/Animated-Webpage/',
    },
    {
        name: 'Bookmarks',
        image: '3',
        textOne: 'A Bookmark app which saves websites in local storage.',
        textTwo: 'Bookmarks can be deleted from storage. Icons for websites are automatically fetched from google.',
        link: 'https://vaibhavahbiav.github.io/Bookmark-App/',
    },
    {
        name: 'Calculator',
        image: '4',
        textOne: 'A handsome Calculator. It does very basic DMAS calculations.',
        textTwo: 'Operands and Result is shown on display. Current inputs can also be cleared. Scroll bar appears if input or result is long. Very handsome calculator.',
        link: 'https://vaibhavahbiav.github.io/Calculator/',
    },
    {
        name: 'Custom Countdown',
        image: '5',
        textOne: 'A countdown app where you can create countdowns and it is saved in local storage and popup a message on completion.',
        textTwo: 'It calculates from current time and subtracts it from your countdown and also displays remaining time in real time. It has a cat.',
        link: 'https://vaibhavahbiav.github.io/Countdown-App/',
    },
    {
        name: 'Kanban Board/Organizer',
        image: '6',
        textOne: 'A Organiser/Manager/To-do List/ Kanban Board app which can be used to track tasks and save them in local storage.',
        textTwo: 'Tasks can be dragged and dropped into other section as you progress or just on whims. Task can also be edited and deleted if you want them to be.',
        link: 'https://vaibhavahbiav.github.io/Kanban-Board/',
    },
    {
        name: 'Form and Validation',
        image: '7',
        textOne: 'A simple form. You can fill details and error message appears if syntax is wrong telling you that the syntax is wrong.',
        textTwo: 'It checks inputs of email, phone number nad website address from presets and validates them. Password is also gets validated. Validation is not too intense.',
        link: 'https://vaibhavahbiav.github.io/Form-Validation/',
    },
    {
        name: 'Infinite Scroll',
        image: '8',
        textOne: 'An Infinite Scrolling website which uses Unsplash API for random images and an custom loading animation for loading images.',
        textTwo: 'It detects when you\'re almost at bottom and triggers an event to load more images. Hope you like scrolling.',
        link: 'https://vaibhavahbiav.github.io/Infinite-Scroll/',
    },
    {
        name: 'Joke Teller',
        image: '9',
        textOne: 'An app which tells you a random joke from JOKEAPI and a Text-to-Speech API to narrate that joke.',
        textTwo: 'Joke-yness is sometimes not joke-y but the narration compensated for that. The Joker just wants you to smile thats all.',
        link: 'https://vaibhavahbiav.github.io/Joke-Teller/',
    },
    {
        name: 'Light-Dark Mode',
        image: '10',
        textOne: 'A basic website layout whose only gimmick is the option to change its theme to dark mode.',
        textTwo: 'Theme is saved in local storage so next time you open the website it automatically switches to last saved theme. The slider is from W3SCHOOLS.',
        link: 'https://vaibhavahbiav.github.io/Light-Dark-Mode/',
    },
    {
        name: 'Math Game',
        image: '11',
        textOne: 'A Math game. You select the number of questions and then evaluate random basic math equations as quickly as possible and set you score.',
        textTwo: 'The scores are saved in local storage and best scores are displayed. New best scores are replaces and updates your previous scores.',
        link: 'https://vaibhavahbiav.github.io/Math-Sprint-Game/',
    },
    {
        name: 'Music Player',
        image: '12',
        textOne: 'Music player app. It plays music.',
        textTwo: 'You can switch songs and go to previous. Player loops through all songs. You can seek songs and have progress bar and show current time and duration of the song.',
        link: 'https://vaibhavahbiav.github.io/Music-Player/',
    },
    {
        name: 'Images using NASA API',
        image: '13',
        textOne: 'Website fetches images from NASA API and displays information, time of when it is taken and  it\'s author.',
        textTwo: 'Images can be saved to "Favourites" and also can be removed from favourites. Favourites are saved in local storage.',
        link: 'https://vaibhavahbiav.github.io/NASA-API-Pictures/',
    },
    {
        name: 'Paint App',
        image: '14',
        textOne: 'A very simple and rudimentary paint app. It uses "canvas" to draw and custom color picker for consistency for multiple browsers.',
        textTwo: 'You can clear current canvas. You can erase using ERASER tool. You can enter color codes for specific colors. Canvas can be saved in local storage and loaded from it. You can also be downloaded your canvas.',
        link: 'https://vaibhavahbiav.github.io/Paint-Clone-App/',
    },
    {
        name: 'Picture-in-Picture',
        image: '15',
        textOne: 'App takes window/screen/tabs and shows them in a mini window/player that can be resized and replaced on screen.',
        textTwo: 'It uses "NAVIGATOR" object to target the media and shared it to the mini player. ',
        link: 'https://vaibhavahbiav.github.io/Picture-in-Picture-App/',
    },
    {
        name: 'Ping-Pong Game',
        image: '16',
        textOne: 'Classic Ping Pong game. Use paddle to start the game against very basic AI. Ball gets progressively faster. Score is tracked and first to 5 wins.',
        textTwo: 'It uses "CANVAS" to render everything in the game. The game resets if either You or Computer wins. Ball resets after every round.',
        link: 'https://vaibhavahbiav.github.io/Ping-Pong-Game/',
    },
    {
        name: 'Quote Generator',
        image: '17',
        textOne: 'App that show random quotes form FROMSOFTWARE\'s games which are saved in array. Quote container changes size according to quote lenght.',
        textTwo: 'You can cycle through quotes randomly by clicking button. You can share a quote on twitter on click and edit tweet.',
        link: 'https://vaibhavahbiav.github.io/Quote-Generator/',
    },
    {
        name: 'Rock-Paper-Scissors Game',
        image: '18',
        textOne: 'Simple Rock-Paper-Scissors game. Computer randomly chooses in its turn. Score get displayed with the options you and computer has chosen. ',
        textTwo: 'A confetti animation is played whenever you win. Confetti is imported from a module from another javascript file.',
        link: 'https://vaibhavahbiav.github.io/Rock-Paper-Scissors-Game/',
    },
    {
        name: 'Splash Page',
        image: '19',
        textOne: 'A basic website splash page with changable backgrounds.',
        textTwo: 'This splash page is created from FIGMA and its CSS then used in on the webpage. Goal was to know what FIGMA is.',
        link: 'https://vaibhavahbiav.github.io/Splash-Page/',
    },
    {
        name: 'Video Player',
        image: '20',
        textOne: 'A video player app. Video volume can be changed. Video playback speed can be changed. Video can be fit to fullscreen. Video controls appears hen cursor reaches near bottom of player. Video can be paused/play on click on player.',
        textTwo: 'Video was my attempt to no-hit the boss who is in top 5 hardest bosses in video gaming history. Update: Could not upload because of size limit. Very Cool. Here are Clouds.',
        link: 'https://vaibhavahbiav.github.io/Video-Player/'
    },
    {
        name: 'This',
        image: '21',
        textOne: 'If you can count this website/portfolio, then this is also a project which is made wholly by me. I tried to make this website like a game\'s menu screen. I\'m VERY proud of it.',
        textTwo: 'Big THANKS to Udemy and Internet.',
    },
];

let project = document.querySelectorAll('.project');
let projectSelected;
// show projects info
project.forEach((item) => {
    item.addEventListener('click', () => {
        projectSelected = item;
        showProjectInfo();
        document.querySelector('.project-selected')?.classList.remove('project-selected');
        item.classList.add("project-selected");
    })

});

const pname = document.getElementById('pname');
const pimage = document.getElementById('pimage');
const ptextOne = document.getElementById('ptextOne');
const ptextTwo = document.getElementById('ptextTwo');
// SEE PROJECTS ON CLICK
const toProject = document.getElementById('to-project');


function showProjectInfo() {
    // HIDE PROJECT INFO UNTIL PROJECT SELECTED
    projectStart.hidden = true;
    projectInfo.style.display = "flex";
    // console.log('list',project.length,'array',projects.length)
    for (let i = 0; i < projects.length; i++) {
        if (projectSelected.textContent == projects[i].name) {
            // console.log(i, project[i].textContent);
            pname.innerHTML = `${projects[i].name}`;
            pimage.src = `images/${projects[i].image}.png`;
            ptextOne.textContent = `${projects[i].textOne}`;
            ptextTwo.textContent = `${projects[i].textTwo}`;
            if (i === 20) {
                toProject.hidden = true;
                // console.log('no link, already here');
            }else{
                toProject.hidden = false;
                toProject.href = `${projects[i].link}`;
                // console.log(projects[i].link);
            }
        }
    }
}

const projectStart = document.getElementById('project-start-screen');
const projectInfo = document.getElementById('project-info');


// copy phone number on click
function showCopied() {
    navigator.clipboard.writeText('9828247087');
    phone.textContent = "Copied.";
    setTimeout(() => {
        phone.textContent = "Click to copy";
    }, 2000);
}

let music = false;
let currentVolume = '0.1';
const musicToggle = document.getElementById('music-toggle');

// music on click, remove ::after
// default volume = 1
function musicOn() {
    if (music == false) {
        music = true;
        bgm.play();
        bgm.volume = currentVolume;
        music = true;
        strike.style.opacity = '0';
        // console.log('bgm ON');
        musicToggle.textContent = "ON";
    } else {
        bgm.pause();
        music = false;
        strike.style.opacity = '1';
        // console.log('bgm OFF');
        musicToggle.textContent = "OFF";
    }
}

// music toggle from settings screen
musicToggle.addEventListener('click', () => {
    musicOn();
    if (music == false) {
        musicToggle.textContent = "OFF";
    } else {
        musicToggle.textContent = "ON";
    }
})

// volume bar and value functionality

let fill;
let bgmVolume;

function volumeFnc() {
    fill = volumeSlider.value * 10;
    bgmVolume = volumeSlider.value / 10;
    volumeValue.innerHTML = volumeSlider.value;
    volumeSlider.style.background = `linear-gradient(90deg, rgb(168, 145, 116) ${fill}%, rgb(92, 80, 64) ${fill}%)`;
    currentVolume = bgmVolume;
    bgm.volume = currentVolume;
}

// CHANGE MUSIC
let musicOptions = document.querySelectorAll('.music-options');

var musicSelected;


musicOptions.forEach(musicOption => {
    musicOption.addEventListener('click', () => {
        // HIGHLIGHT
        // console.log('clicked', musicOption.textContent);
        musicSelected = musicOption.textContent;
        document.querySelector('.music-options-select')?.classList.remove('music-options-select');
        musicOption.classList.add("music-options-select");
        // SELECT MUSIC
        bgm.src = `./music/${musicSelected}.mp3`;
        bgm.volume = currentVolume;
        music = true;
        musicToggle.textContent = "ON";
        bgm.play();
        // console.log('selected and playing', musicSelected);
    });
});

const home = document.getElementById('home');
const startScreen = document.getElementById('start');
const projectsScreen = document.getElementById('projects-screen');
const contactScreen = document.getElementById('contact-screen');
const settingsScreen = document.getElementById('settings-screen');
const nameContainer = document.getElementById('name-container');

nameContainer.hidden = false;

let menuOptions = document.querySelectorAll('.menu-options');
let optionSelected;
let aVar;
// adding eventlisteners to menu options on click
menuOptions.forEach((item) => {
    item.addEventListener('click', () => {
        aVar = item;
        optionSelected = item;
        // console.log(optionSelected.textContent, 'is clicked');
        item.classList.add("click-select");
        setTimeout(() => {
            showScreens();
            item.classList.remove("click-select");
        }, 500);
    })
});

// show screens
function showScreens() {
    if (optionSelected.textContent == "PROJECTS") {
        home.style.visibility = 'hidden';
        projectsScreen.style.visibility = 'visible';
        // console.log('home', home.style.visibility, 'projects', projectsScreen.style.visibility);
        nameContainer.hidden = true;
    } else if (optionSelected.textContent == "CONTACT") {
        home.style.visibility = 'hidden';
        contactScreen.style.visibility = 'visible';
        // console.log('home', home.style.visibility, 'contact', contactScreen.style.visibility);
        nameContainer.hidden = true;
    } else if (optionSelected.textContent == "SETTINGS") {
        home.style.visibility = 'hidden';
        settingsScreen.style.visibility = 'visible';
        // console.log('home', home.style.visibility, 'settings', settingsScreen.style.visibility);
        nameContainer.hidden = true;
    } else if (optionSelected.textContent == "START") {
        home.style.visibility = 'hidden';
        startScreen.style.visibility = 'visible';
        // console.log('home', home.style.visibility, 'start', startScreen.style.visibility);
        nameContainer.hidden = true;
    }
}



let back = document.querySelectorAll('#back');
let backArray;
let bVar
// back to home
back.forEach((item) => {
    item.addEventListener('click', () => {
        bVar = item;
        backArray = item;
        // console.log('back is clicked');
        goHome();
    })
});

function goHome() {
    bVar.classList.add("click-back");
    setTimeout(() => {
        // console.log('reached home');
        home.style.visibility = 'visible';
        startScreen.style.visibility = 'hidden';
        projectsScreen.style.visibility = 'hidden';
        contactScreen.style.visibility = 'hidden';
        settingsScreen.style.visibility = 'hidden';
        aVar.classList.remove("click-select");
        bVar.classList.remove("click-back");
        nameContainer.hidden = false;
    }, 500);
}


// PARTICLE CONTROL
const filter = document.getElementById('particles');
const particleToggle = document.getElementById('particle-toggle');
var particles = true;

function particleControl(){
    if(particles){
        particleToggle.textContent = "OFF";
        filter.hidden = true;
        particles = false;
        // console.log('filter OFF');
    }else{
        particleToggle.textContent = "ON";
        filter.hidden = false;
        particles = true;
        // console.log('filter ON');
    }
}

// exit to exit prompt
const exit = document.getElementById('exit');
const exitScreen = document.getElementById('exit-screen');
const exitBack = document.getElementById('exit-back');

exitScreen.hidden = true;

function showExitPrompt(){
    exitScreen.hidden = false;
    // console.log('Exit prompt visible');
    exitBack.addEventListener('click', () => {
        // console.log('back to home');
        exitBack.classList.add("exit-back-click");
        setTimeout(() => {
            exitBack.classList.remove("exit-back-click");
            exitScreen.hidden = true;
        }, 1000);
    });
}

function onLoad() {
    home.style.visibility = 'visible';
    startScreen.style.visibility = 'hidden';
    projectsScreen.style.visibility = 'hidden';
    contactScreen.style.visibility = 'hidden';
    settingsScreen.style.visibility = 'hidden';
    musicToggle.textContent = "OFF";
    particleToggle.textContent = "ON";
}

// DOWNLOAD RESUME HIGHLIGHT ON CLICK
const resume = document.getElementById('download-resume');

resume.addEventListener('click', () => {
    resume.classList.add("resume-click");
    // console.log('downloading');
    setTimeout(() => {
        resume.classList.remove("resume-click");
        // console.log('done');
    },1500);
});


// event listeners
musicControl.addEventListener('click', musicOn);
phone.addEventListener('click', showCopied);
volumeSlider.addEventListener('input', volumeFnc);
particleToggle.addEventListener('click', particleControl);
exit.addEventListener('click', showExitPrompt);

onLoad();
