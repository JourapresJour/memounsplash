document.addEventListener('DOMContentLoaded', () => {
    
    const cardArray = [
       {
            name:'hauntington', 
            img: './img/hauntington.jpg'
        }, 
       {
            name:'hauntington', 
            img: './img/hauntington.jpg'
        }, 
       {
            name:'jessica', 
            img: './img/jessica.jpg'
        }, 
       {
            name:'jessica', 
            img: './img/jessica.jpg'
        }, 
       {
            name:'joel', 
            img: './img/joel.jpg'
        }, 
       {
            name:'joel', 
            img: './img/joel.jpg'
        }, 
       {
            name:'joshua', 
            img: './img/joshua.jpg'
        }, 
       {
            name:'joshua', 
            img: './img/joshua.jpg'
        }, 
       {
            name:'qasim', 
            img: './img/qasim.jpg'
        }, 
       {
            name:'qasim', 
            img: './img/qasim.jpg'
        }, 
       {
            name:'valentina', 
            img: './img/valentina.jpg'
        }, 
       {
            name:'valentina', 
            img: './img/valentina.jpg'
        }
        ]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

//create your board

function createBoard(){
    for (let i = 0; i < cardArray.length; i++ ){
        var card = document.createElement('img');
        card.setAttribute('src','img/blank.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click',flipcard);
        grid.appendChild(card);
    }
}


// check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match');
        cards[optionOneId].setAttribute('src','img/white.jpg');
        cards[optionTwoId].setAttribute('src','img/white.jpg');
        cardsWon.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src', 'img/blank.jpg');
        cards[optionTwoId].setAttribute('src', 'img/blank.jpg');
        alert('Sorry,try again');
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length; 
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulation! You found them all';
    }

}


// flip your card
function flipcard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500);
    }
}

createBoard();


























})