
const cards = document.querySelectorAll('.memory-card');

let flippedCard = false;
let blocker = false;
let firstCard,secondCard;


function flipCard(){
    //checking if the cards are flipped
    if(blocker) return;
    //checking if first and second card are the same
    if(this===firstCard) return;
    this.classList.add('flip');
    //first click
    if(flippedCard == false){
        flippedCard=true;
        firstCard = this;

        return;
    }
        //second click
        flippedCard = false;
        secondCard = this;

        matching();
    }


function matching(){

    //matching cards
    if(firstCard.dataset.name===secondCard.dataset.name){
        //Do match
        doMatch();
    }else{
        //Do not match
        doNotMatch();

    }
function doMatch(){
    //Do match
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
    //resetting cards
    resetCards();
}
function doNotMatch(){
    blocker = true;
    //Do not match
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        //resetting cards
        resetCards();

        },1500);
    }
}
function resetCards(){
    [flippedCard,blocker] =[false,false];
    [firstCard,secondCard]=[null,null];
}

cards.forEach(card => card.addEventListener('click' , flipCard));
