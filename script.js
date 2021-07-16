'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentEl0 = document.getElementById('current--0')
const currentEl1 = document.getElementById('current--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')



//score choice:
const sc = document.querySelector('.score-choice');
const scBtn = document.querySelector('.sc-btn')
let scoreChoice = 50;

scBtn.addEventListener('click' , ()=>{
    scoreChoice = sc.value;
    // console.log(scoreChoice);
    if(scoreChoice)
        {
        document.querySelector('.score-choice').value = '';
        document.querySelector('.head-game').textContent = `WIN THE GAME WHEN POINTS ARE ${scoreChoice}`
        }
})



let scores,currentScore,activePlayer,playing ;


//starting game
const newGame = ()=>{

    console.log("newgame");

    //4.resetting all score internally
    scores = [0,0]
    currentScore = 0;
    activePlayer = 0;

    //1.setting playing game to true
    playing = true;


    //2.removing winner
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    //making playing0 as active--player and removing active state of player1
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    //3.resetting all scores on display
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentEl0.textContent = 0;
    currentEl1.textContent = 0;

    //5.hiding dice at beginning of game
    diceEl.classList.add('hidden');
}

newGame();


const switchPlayer = () =>{
    //switching to next player fucntion
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}




//rolling dice
btnRoll.addEventListener('click' , ()=>{

    if(playing){
        //1.random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        //2.display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`

        //3.check if rolled 1
        if(dice !== 1){
        //add dice to current
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else{
            //switch player
            switchPlayer();
        } 
    }
});



//hold button
btnHold.addEventListener('click' , () =>{
    if(playing){
        //1.add cuurent score to action player
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2.checking 100 score --> win
        if(scores[activePlayer] >= scoreChoice)
        {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } 
        else{
            //3.switching next player
            switchPlayer();
        }
    }
});




//new game btn
btnNew.addEventListener('click' , newGame);


