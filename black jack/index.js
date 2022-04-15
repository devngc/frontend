let firstCard = getRandomCard();
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");

player = {
  name: "Devang",
  chips: 149,
};

playerEl.innerText = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.ceil(Math.random() * 13);
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

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
  cardsEl.textContent = "Cards: ";
  messageEl.textContent = message;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function startGame() {
  isAlive = true;
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function newCard() {
  if (isAlive == true && hasBlackJack == false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
