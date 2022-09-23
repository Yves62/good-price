const form = document.querySelector('form');
const infoGame = document.querySelector('.info-game');
const choiceOfUser = document.querySelector('input');

/* Variables */

let randomNumber = 0;
let numberOfTest = 0;

/* Functions */

generateNumber()

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkIfGoodNumber();
    createMessage()
    choiceOfUser.value = '';
})

function generateNumber() {
    randomNumber = Math.floor(Math.random() * 100);
}

function checkIfGoodNumber() {
    if (Number(choiceOfUser.value) === randomNumber) {
        choiceOfUser.style.borderColor = 'green'
        createMessage(`Vous avez gagné. Vous avez réussi en ${numberOfTest} tentatives. Un nouveau chiffre vient d'être généré`);
        generateNumber();
    } else if (Number(choiceOfUser.value) < randomNumber) {
        numberOfTest++;
        createMessage(`C'est plus, nombre d'essai  ${numberOfTest} `)
    } else if (Number(choiceOfUser.value) > randomNumber) {
        numberOfTest++;
        createMessage(`C'est moins, nombre d'essai ${numberOfTest}`)
    } else {
        isNotANumber('red',`Vous devez saisir un chiffre`)
    }
}

function createMessage(message) {
    let text = document.createElement('li');
    text.textContent = message;
    infoGame.appendChild(text);
    setTimeout(() => {
        text.remove()
    }, 3000)
}

function isNotANumber(color,message) {
    let text = document.createElement('li');
    text.style.color = color;
    text.textContent = message;
    infoGame.appendChild(text);
    setTimeout(() => {
        text.remove()
    }, 2000)
}