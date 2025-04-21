# michael-joseph-crypto-project
---
## 🔍 Overview
The **Crypto Guess Challenge** is my web-based single-page game that tests your knowledge of cryptocurrencies. You have to use hints given to guess the right coin don't worry if you guess it wrong 😭😭

## Features
- Real-time data using the [CoinPaprika API](https://api.coinpaprika.com/) its always updating in short

- Hints like:
  - Symbol 
  - Market Rank
  - Price in USD
  - Market Cap
  - First Letter of Name
  - Launch Year

- Score tracking across 3 rounds

- Sleek results reveal screen with coin info

- Fully single-page application

- Interactive card-based UI with changing content

- try again button to replay the challenge

## 🤓Tech Stack
- **HTML5** – Markup
- **CSS3** – Styling and card layout
- **JavaScript** – Game logic, API interaction, and dynamic rendering
- **CoinPaprika API** – Real crypto data

## How It Works

1. Click **Start Challenge**.
2. A random cryptocurrency is chosen.
3. You'll see hints like symbol, rank, price, market cap, and more — but not the name.
4. Type in your guess and submit it.
5. Get instant feedback on your answer (correct/incorrect).
6. Repeat for 3 rounds.
7. View your final score and the actual coin names.
8. Click **Restart Game** to play again.

## Learning Goals Met

- Consumes public API asynchronously using `fetch` and handles JSON responses.
-  Single-page interface with no reloads or redirects.
-  Uses at least 3 distinct `addEventListener()` types:
  - `click` – Start Game / Restart Game
  - `submit` – Guess form
  - `keydown` or `change` – (toggle or input, if added)
- Array iteration with `.filter()` or `.map()` for coin selection and hint generation.
-  DRY and modular code structure with reusable functions and clean logic.

## Possible Improvements
- Add dark/light mode toggle using a `change` or `click` event
- Add sound effects or timer for challenge difficulty
- Filter out low-quality or inactive coins using `.filter()`

##  Run the App
1. Clone or download the project files.
2. Open `index.html` in your browser.
3. Enjoy guessing!

---


# ⚖️lisenced
MIT ofcourse
Made with 💻 and a bit of caffeine ☕.