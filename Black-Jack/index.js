let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  messageEl.textContent = message;
}

function startGame() {
  renderGame();
}

function newCard() {
  let card = 2;
  sum += card;
  renderGame();
}
