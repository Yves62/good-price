const form = document.querySelector("form");
const infoGame = document.querySelector(".info-game");
const choiceOfUser = document.querySelector("input");

/* Variables */

let randomNumber = 0;
let numberOfTest = 0;

/* Functions */

generateNumber();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkIfGoodNumber();
  createMessage();
  choiceOfUser.value = "";
});

function generateNumber() {
  randomNumber = Math.floor(Math.random() * 100);
}

function checkIfGoodNumber() {
  if (choiceOfUser.value === "") {
    isNotANumber(`Vous devez saisir un chiffre`, "red");
  } else if (Number(choiceOfUser.value) === randomNumber) {
    choiceOfUser.style.borderColor = "green";
    createMessage(
      `Vous avez gagné. Vous avez réussi en ${numberOfTest} tentatives. Un nouveau chiffre vient d'être généré`,
      "green"
    );
    generateNumber();
    numberOfTest = 0;
  } else if (Number(choiceOfUser.value) < randomNumber) {
    numberOfTest++;
    createMessage(`C'est plus, nombre d'essai  ${numberOfTest} `, "red");
  } else if (Number(choiceOfUser.value) > randomNumber) {
    numberOfTest++;
    createMessage(`C'est moins, nombre d'essai ${numberOfTest}`, "red");
  } else {
    isNotANumber(`Vous devez saisir un chiffre`, "red");
  }
}

function createMessage(message, color) {
  let text = document.createElement("li");
  text.textContent = message;
  text.style.color = "white";
  text.style.backgroundColor = color;
  text.style.padding = "5px";
  infoGame.appendChild(text);
  setTimeout(() => {
    text.remove();
  }, 3000);
}

function isNotANumber(message,color ) {
  let text = document.createElement("li");
  text.textContent = message;
  text.style.color = "white";
  text.style.backgroundColor = color;
  text.style.padding = "5px";
  infoGame.appendChild(text);
  setTimeout(() => {
    text.remove();
  }, 2000);
}
