

let game = {

        

    lockMode: false,
    firstCard: null,
    secondCard: null,
    cards: null,



    techs: [
        'image (1)',
        'image (2)',
        'image (3)',
        'image (4)',
        'image (5)',
        'image (6)',
        'image (7)',
        'image (8)',
        'image (9)',
        'image (10)',
        'image (11)',
        'image (12)',
        'image (13)',
        'image (14)',
    ],



 

    setCard: function (id){
        let card = this.cards.filter(card => card.id === id)[0];
        
        if (card.flipped || this.lockMode){
            return false;
        }
        if (!this.firstCard){
            this.firstCard = card;
            this.firstCard.flipped=true;
            return true;
        }else{
            this.secondCard = card;
            this.secondCard.flipped = true
            this.lockMode = true;
            return true;
        }

    },

    checkMatch: function(){
        if(!this.firstCard||!this.secondCard){
            return false
        }
        return this.firstCard.icon === this.secondCard.icon;

    },

    clearCards: function(){
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    unflipedCards(){
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards()
        
    },

    checkGameOver(){
        return this.cards.filter(card => !card.flipped).length == 0;

    },
           createCardsFromtechs: function(){
             this.cards = []

             
        
             this.techs.forEach((tech)=>{
                this.cards.push(this.createPairFromTech(tech));
            }) 
        
            this.cards =  this.cards.flatMap(pair => pair)
            this.shuffleCards();
            return this.cards
        },
        
        createPairFromTech:function(tech){
            return [{
                id: this.createIdWithTech(tech),
                icon:tech,
                flipped: false,
                
            },{
                id: this.createIdWithTech(tech),
                icon:tech,
                flipped: false,
        
            }]

      
        },
        
        createIdWithTech: function(tech){
            return tech + parseInt(Math.random()*1000);
        },

        shuffleCards: function (cards){
            let currentIndex = this.cards.length;
            let randomIndex = 0;
        
            while (currentIndex !== 0){
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex --;
        
                [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]] 
            }

        },



        
      // criar uma forma de verificar se quem fez a jogada foi o primeiro jogador ou o segundo
      /*criar um contador de jogadas e verificar, com o número de pares das cartas viradas, quem jogou foi o primeiro ou o segundo
        emprimir no console.log qual é a vez detre os jogadores.
      */

    playerTime:function(player1,player2, card1, card2){
       
},
    // função para verificar se as duas cartas que foram viradas são ou não pares
            // cada virada, somar +1 o número de jogas
// playerplays: function( id){

// let card = this.cards.filter( card=>(card.id ===id));

// let card1 = card;
// let card2 = card;

// let madePair = 0;

//  if(card1 == card2){

// madePair = card1==card2;

// console.log(" houve uma formação de par")
//  } 

//  console.log( madePair)



 
   
    
















    //     card1Id = this.createPairFromTech(tech);
//     card2Id = this.createPairFromTech(tech);

//     if(card1Id = card2Id){
        
//         console.log("você fez par")

//     }else{
//             console.log("próximo jogador")
        
//     }




        
}
