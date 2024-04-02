'use strict';
/*
console.log(document.querySelector('.message').textContent);
// selecting message class from html
document.querySelector('.message').textContent = 'Correct Number'; // change the contents o an element
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;
document.querySelector('.guess').value = 18;
document.querySelector('.message').textContent;
*/

//define the secret number between 1 and 20
let secretNum = Math.trunc(Math.random() * 20 + 1);
//change to number because it's automatically a string

let score = 20; //allows you to always have the data in the code
let highScore = 0;
//click events
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(document.querySelector('.guess').value);

  let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  let displayScore = function (score) {
    document.querySelector('.score').textContent = score;
  };

  let displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
  };

  if (score > 1) {
    //if they still have more plays, do this
    if (!guess) {
      //input box is empty
      displayMessage('Incorrect Number');
      score--;
      displayScore(score);
    } else if (guess == secretNum) {
      displayMessage('Correct Number!');
      displayScore(score);
      //secret number only displays when player guesses the correct number
      displayNumber(secretNum);
      document.querySelector('body').style.backgroundColor = 'green';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess != secretNum) {
      guess > secretNum
        ? displayMessage('Too High')
        : displayMessage('Too Low'); //turneary operator
      score--;
      displaScore(score);
    }
  } else {
    // they don't have any more tries
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('number').style.width = '30rem';
    displayMessage('You have Lost The Game!');
  }
});

//challenge -> reset the page when the 'Again' button is clicked
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);
  secretNum = Math.trunc(Math.random() * 20 + 1);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.width = '100%';
  document.querySelector('body').style.backgroundColor = 'black';
});
