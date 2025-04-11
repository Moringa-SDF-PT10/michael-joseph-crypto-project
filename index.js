const startPage = document.getElementById('start');

const startButton = document.getElementById('startButton');
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

    cryptoChosen = [];





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
    const guess = guessedInputs.value.trim().toLowerCase();  //lowercase all inputs Idk if it'll work honestly
//trying to avoid conflicts or false wrongs

    const rightAnswer = currentCoin.name.toLowerCase();

    if (!guess) return;


    if (guess === rightAnswer){
        feedback.textContent = "On point😍";
        points++;
    } else {
        feedback.textContent = "Not it 😭"
    }

    correctAnswers.push(currentCoin.name);
    OngoingRound++;


    //round limit for the test is 3 so ill use if else to set that

    if (OngoingRound < 3){
        setTimeout(() => {
            guessedInputs.value = '';
            feedback.textContent = '';
            ontoNextCoin(); //remember to create this variable
        }, 1500);
    } else{
        setTimeout(() => {
            gameSession.classList.add('hidden');
            results.classList.remove('hidden');



            summary.innerHTML = `
            <p>correct: ${points}/3</p>
            <p> Answers: ${correctAnswers.join(',')}</p>`;
        }, 2000);
    }
    });




     async function ontoNextCoin() {


        const coin = cryptoChosen[OngoingRound];
        const res = await fetch (`https://api.coinpaprika.com/v1/tickers/${coin.id}`);
        const data = await res.json();
        currentCoin = data;



        //hints

        const hintlist = [
            `symbol: ${data.symbol}`,
            `Rank: ${data.rank}`,
            `Price: $${data.quotes.USD.price.toFixed(2)}`,
            `market cap: $${(data.quotes.USD.market_cap / 1e9).toFixed(2)}B`,
            `first letter:${data.name[0]}`,
            data.first_data_at ? `launch year: ${new Date (data.first_data_at).getFullYear()}`: ''
        
        ];




        hints.innerHTML = hintlist.map(hint => `<p>${hint}</p>`).join(``);
        
     }





//start
async function letsGame() {
   const res = await fetch( 'https://api.coinpaprika.com/v1/coins' );


   const data = await res.json();


   crypto = data.filter(coin => coin.rank && coin.is_active); //filter.


   for (let i = 0; i<3; i++) {
    const randoCrypto = crypto[Math.floor(Math.random() * crypto.length)];




    cryptoChosen.push(randoCrypto);
   }


    ontoNextCoin();
}










