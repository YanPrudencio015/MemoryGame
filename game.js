const FRONT = "card_front"
const BACK = "card_back"
const ICON = "icon"

const CARD = "card"


startGame()
function startGame(){

 initializeCards( game.createCardsFromtechs());
 
}






function initializeCards(cards){
    let gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';

    game.cards.forEach(card =>{
    let cardElement = document.createElement('div');
    cardElement.id = card.id;
    cardElement.classList.add(CARD);
    cardElement.dataset.icon = card.icon;

    createCardContent(card, cardElement)

    cardElement.addEventListener('click', flipCard )
    gameBoard.appendChild(cardElement);

   
   
})
}


function createCardContent(card, cardElement){

    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);

}

function createCardFace(face, card, element){

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);

    if(face === FRONT){
        let inconElement = document.createElement('img');
        inconElement.classList.add(ICON);
        inconElement.src = "./imgs/" + card.icon + ".png"
        cardElementFace.appendChild(inconElement);

    }else{
        cardElementFace.innerHTML = "Memory";
    }
    element.appendChild(cardElementFace);
}

function flipCard(){
   
  
    if(game.setCard(this.id)){
    this.classList.add("flip");

    if(game.secondCard){
        
       
        if(game.checkMatch()){
            
            game.clearCards();
           
          

            setTimeout(()=>{
                if(game.checkGameOver()){
                let gameOverLayer = document.getElementById("gameOver");
                gameOverLayer.style.display = 'flex';
            }},900);
            
        }else{
            setTimeout(()=>{  
                let firstCardView = document.getElementById(game.firstCard.id);
                let secondCardview = document.getElementById(game.secondCard.id);
                
                firstCardView.classList.remove('flip');
                secondCardview.classList.remove('flip');
                game.unflipedCards()
                },800);
               
          
        }; 

       

       
    }
}

}




function restart(){
    game.clearCards();
    startGame();

    let gameOverLayer = document.getElementById("gameOver");
    gameOverLayer.style.display = 'none';



}



