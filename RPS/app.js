const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const randomNumberDisplay = document.getElementById('randomNumber')
let userChoice
let computerChoice
let result



possibleChoices.forEach(addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const  randomNumber = Math.floor((Math.random() * 3) + 1 )
    randomNumberDisplay.innerHTML = randomNumber
    console.log(randomNumber) 
    if (randomNumber == 1) {
        computerChoice = 'rock'
    }
    
    if (randomNumber == 2) {
        computerChoice = 'paper'
    }
    
    if (randomNumber == 3) {
        computerChoice = 'sccisor'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice == userChoice) {
        result = 'its a draw'
    }
    
    if (computerChoice == 'rock' && userChoice == 'sccisor') {
        result = 'you lose!'
    }
    
    if (computerChoice === 'rock' && userChoice === 'paper' ) {
        result = 'you win'
    }
    if (computerChoice === 'scissor' && userChoice === 'paper' ) {
        result = 'you lose'
    }
    if (computerChoice === 'scissor' && userChoice === 'rock' ) {
        result = 'you win'
    }
    if (computerChoice === 'paper' && userChoice === 'scissor' ) {
        result = 'you win'
    }
    if (computerChoice === 'paper' && userChoice === 'rock' ) {
        result = 'you lose'
    }

    resultDisplay.innerHTML = result;
    
}