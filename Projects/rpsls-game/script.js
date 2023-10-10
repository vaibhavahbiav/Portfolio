import { removeConfetti, startConfetti, stopConfetti } from "./confetti.js";

const playerScoreEl = document.getElementById('player-score');
const playerChoiceEl = document.getElementById('player-choice');
const computerScoreEl = document.getElementById('computer-score');
const computerChoiceEl = document.getElementById('computer-choice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');


const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

// reset all selected icons, remove confetti
function resetSelected(){
    document.body.style.background = 'var(--bg)';
    allGameIcons.forEach((icon) => {
        icon.classList.remove('selected');
    });
    stopConfetti();
    removeConfetti();
}

// reset score and playerChoice/computerChoice
function resetAll(){
    playerScoreNumber = 0;
    computerScoreNumber = 0;
    playerScoreEl.textContent = playerScoreNumber;
    computerScoreEl.textContent = computerScoreNumber;
    playerChoiceEl.textContent = '';
    computerChoiceEl.textContent = '';
    resultText.textContent = '';
    resetSelected();
}

window.resetAll = resetAll;

// random computer choice
function computerRandomChoice(){
    const computerChoiceNumber = Math.random();
    if(computerChoiceNumber < 0.2){
        computerChoice = 'rock';
    } else if(computerChoiceNumber  <= 0.4){
        computerChoice = 'paper';
    } else if(computerChoiceNumber <= 0.6){
        computerChoice = 'scissors';
    }else if(computerChoiceNumber <= 0.8){
        computerChoice = 'lizard';
    }else{
        computerChoice = 'spock';
    }
}

// add 'selected' styling and computer choice
function displayComputerChoice(){
    switch(computerChoice){
        case 'rock':
            computerRock.classList.add('selected');
            computerChoiceEl.textContent = ' --- Rock';
            break;
    
        case 'paper':
            computerPaper.classList.add('selected');
            computerChoiceEl.textContent = ' --- Paper';
            break;
    
        case 'scissors':
            computerScissors.classList.add('selected');
            computerChoiceEl.textContent = ' --- Scissors';
            break;
    
        case 'lizard':
            computerLizard.classList.add('selected');
            computerChoiceEl.textContent = ' --- Lizard';
            break;
    
        case 'spock':
            computerSpock.classList.add('selected');
            computerChoiceEl.textContent = ' --- Spock';
            break;
        default:
            break;
    }
}

// check result, increase score, update resultText
function updateScore(playerChoice){
    if(playerChoice === computerChoice){
        resultText.textContent = 'TIE!';
        document.body.style.background = 'var(--tie)';
    }else{
        const choice = choices[playerChoice];
        if(choice.defeats.indexOf(computerChoice) > -1 ){
            startConfetti();
            document.body.style.background = 'var(--win)';
            resultText.textContent = 'You WON!';
            playerScoreNumber++;
            playerScoreEl.textContent = playerScoreNumber;
        }else{
            resultText.textContent = 'You LOST!';
            computerScoreNumber++;
            computerScoreEl.textContent = computerScoreNumber;
            document.body.style.background = 'var(--lost)';
        }
    }
}

// call functions to process turn
function checkResult(playerChoice){
    resetSelected();
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerChoice);
}

// passing player selection value and style icons
function select(playerChoice){
    checkResult(playerChoice);
    // add 'selected' styling and playerChoice
    switch(playerChoice){
        case 'rock':
            playerRock.classList.add('selected');
            playerChoiceEl.textContent = ' --- Rock';
            break;
    
        case 'paper':
            playerPaper.classList.add('selected');
            playerChoiceEl.textContent = ' --- Paper';
            break;
    
        case 'scissors':
            playerScissors.classList.add('selected');
            playerChoiceEl.textContent = ' --- Scissors';
            break;
    
        case 'lizard':
            playerLizard.classList.add('selected');
            playerChoiceEl.textContent = ' --- Lizard';
            break;
    
        case 'spock':
            playerSpock.classList.add('selected');
            playerChoiceEl.textContent = ' --- Spock';
            break;
        default:
            break;
    }
}

window.select = select;

// on startup, set initial values
resetAll();

