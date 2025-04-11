const startPage = document.getElementById('start');

const startButton = document.getElementById('start');
const restartButton = document.getElementById('restart-button');
const LockinButton = document.getElementById('submiting-guess');





const gameSession = document.getElementById('game-sesh');


const hints = document.getElementById('hints');

const results = document.getElementById('results');

const guessedInputs = document.getElementById('guessed-input');

const feedback = document.getElementById('feedback');

const summary = document.getElementById('summary');

//All my game's variables 

let crypto = []
let cryptoChosen = []
let currentCoin = null;
let OngoingRound = 0;
let points = 0;
let correctAnswers = []




// first things buttons


startButton.addEventListener('click', async()=> {
    startPage.classList.add('hidden');
    gameSession.classList.remove('hidden');
    await letsGame();
    
});






restartButton.addEventListener('click', () => {





    OngoingRound = 0;


    points = 0;


    correctAnswers =[

    ];
    results.classList.add('hidden');


    startPage.classList.remove('hidden');



    guessedInputs.value = '';


    feedback.textContent = '';

    hints.innerHTML = '';


    

});

LockinButton.addEventListener('click', () => {
    const guess = guessedInputs.value.trim().toLowerCase()  //lowercase all inputs Idk if it'll work honestly
//trying to avoid conflicts or false wrongs

    const rightAnswer = currentCoin.name.toLowerCase();
});

























//start
async function letsGame() {
   const res = await fetch( 'https://api.coinpaprika.com/v1/coins' );


   const data = await res.json();


   crypto = data.filter(coin => coin.rank && coin.is_active); //filter.


   for (let i = 0; i<3; i++) {
    const randoCrypto = allCoins[Math.floor(Math.random() * allCoins.length)];




    cryptoChosen.push(randoCrypto);
   }


    
}










