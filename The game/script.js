// SELECT ELEMENT
// BODY
// BUTTON
const btnNew = document.querySelector(".new-game");
const btnCheck = document.querySelector(".btn-check");
const body = document.querySelector("body")

// HIGHSCORE , CURRENT SCORE AND ATTEMPTS LEFT

const highscoreEl= document.querySelector(".current-high-score");
const currentscoreEl = document.querySelector("#current-score");
const attemptsLeftEl = document.querySelector("#attempts-left");

// message, input and secret

const messageEl = document.querySelector(".message");
const inputEl = document.querySelector(".input-number");
const secretEl = document.querySelector(".secret-number");

// create global variable
let currentscore = 20;
let highscore = 0;
let attemptsLeft = 10;

// generate a random number

let secretNum = Math.trunc(Math.random()* 20) + 1;
console.log(secretNum);


// game functionality

btnCheck.addEventListener("click", function() {
    if(attemptsLeft > 0 ){
        attemptsLeft--;
        attemptsLeftEl.textContent = attemptsLeft;
        let guess = +inputEl.value;
        if(!guess){
            messageEl.textContent ="⛔ No number or 0 is entered";
        }else if (guess === secretNum){
            messageEl.textContent = "You Won 🏆";
            secretEl.textContent = secretNum;
            
            body.style.backgroundColor ="#38E54D";
            btnCheck.classList.add("disabled")
            highscore = currentscore > highscore ? currentscore : highscore;
            highscoreEl.textContent = highscore;


        

        }else if (guess !== secretNum){
            let message = 
            guess > secretNum ? "YOU GUESSED TOO HIGH" : "YOU GUESSED TOO LOW";
            messageEl.textContent = message;
            currentscore--;
            currentscoreEl.textContent = currentscore;
            body.style.backgroundColor ="#FF0032";
            setTimeout(function(){
                body.style.backgroundColor ="#000"
            }, 200);
        }
    } else {
        // LOST GAME
        messageEl .textContent = "You lost the game ✨";
        body.style.backgroundColor = "#FF0032";
    }

});

btnNew.addEventListener("click", function(){
    attemptsLeft = 10;
    attemptsLeftEl.textContent = attemptsLeft;
    currentscore =20;
    currentscoreEl .textContent = currentscore;
    highscore = 0;
    body.style.backgroundColor ="#000";
    secretEl.textContent = '?';
    btnNew.classList.remove("disabled")
    messageEl.textContent = 'guess a number between 1-20';
    inputEl.value = ""

});