const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('mole')
const timeleft = document.getElementById('time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerID = null

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random()*9)]
    console.log(randomSquare)
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => 
    {
        if (square.id == hitPosition ) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})


function moveMole(){
    
    timerID = setInterval(randomSquare,500)
}

moveMole()

function countDown() {
    currentTime--
    timeleft.textContent = currentTime
    if(currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerID)
        alert('Game OVER! your final score is  ' + result  )
    }

}

let countDownTimerId = setInterval(countDown, 1000)