// declaro el array de imagenes con su nombre
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },

]

//mezcla el array
cardArray.sort(() =>  0.5 - Math.random() )

console.log(cardArray)

const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
const resultDisplay = document.querySelector('#result')


// crea el cuadro de imagenes
function createBoard() {
    for(let i = 0; i < cardArray.length; i++ ){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        //console.log(card, i)
        gridDisplay.appendChild(card)
        card.addEventListener('click', flipCard)

    }
}

createBoard()


// la funcion flipcard es llamada cada vez que alguien hace un click
function flipCard(){
    const cardId = this.getAttribute('data-id')
    console.log('clicked')
    console.log(cardId)
    
    cardsChosenIds.push(cardId)

    cardsChosen.push(cardArray[cardId].name)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length == 2 ) {
        setTimeout(checkMatch, 350)
    }
}


function checkMatch(){

    const cards = document.querySelectorAll('#grid img')
    console.log('check for match')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Hiciste click sobre la misma imagen')
    }
    
    else if (cardsChosen[0] == cardsChosen[1]){

        alert("Coinciden")
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')

        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        
        cardsWon.push(cardsChosen)
    } else{
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png')
        alert('volve a intentarlo')
        
    
    }
    
    resultDisplay.textContent = cardsWon.length
    
    cardsChosen = []
    cardsChosenIds = []
    
    if(cardsWon.length == (cardArray.length/2)){
        resultDisplay.innerHTML = 'Ganaste!!!'

    }


}

