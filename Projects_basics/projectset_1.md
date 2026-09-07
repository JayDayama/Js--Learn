# Projects related to DOM

## Project Link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (thisevent) {
    console.log(thisevent);
    console.log(thisevent.target);
    if (thisevent.target.id === 'grey') {
      body.style.backgroundColor = thisevent.target.id;
    }
    if (thisevent.target.id === 'white') {
      body.style.backgroundColor = thisevent.target.id;
    }
    if (thisevent.target.id === 'blue') {
      body.style.backgroundColor = thisevent.target.id;
    }
    if (thisevent.target.id === 'yellow') {
      body.style.backgroundColor = thisevent.target.id;
    }
  });
  // button.addEventListener('mouseenter', function (thisevent) {
  //   console.log(thisevent);
  //   console.log(thisevent.target);
  // });
});


```
## Project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  //Check if height and weight are Valid
  if (height == '' || height <= 0 || isNaN(height)) {
    result.innerHTML = `Enter a Valid Height ${height}`;
    result.style.color = 'red';
  } else if (weight == '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Enter a Valid Weight ${weight}`;
    result.style.color = 'red';
  } else {
    const Bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (Bmi < 18.6) {
      result.innerHTML = `<span>${Bmi} -> you are Under Weight</span>`;
      result.style.color = 'orange';
      result.style.fontSize = '20px';
    } else if (Bmi > 18.6 && Bmi < 24.9) {
      result.innerHTML = `<span>${Bmi} -> you are in the Normal range</span>`;
      result.style.color = 'lightblue';
      result.style.fontSize = '22px';
    } else if (Bmi > 24.9) {
      result.innerHTML = `<span>${Bmi} -> you are Over Weight</span>`;
      result.style.color = 'orange';
      result.style.fontSize = '20px';
    }
  }
});


```

## Project 3

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock'); also valid

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


## Project 4

```javascript
let randomnum = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const Input_num = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining_guesses = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

// let prevguess = [];
let numguess = 1;
let playGame = true;

submit.addEventListener('click', function (e) {
  if (playGame) {
    // this ensures when the guessField is disabled one accidentally doesnt press the submit guess button
    e.preventDefault();
    const guess = parseInt(Input_num.value);
    console.log(guess);
    validateguess(guess);
  }
});

function validateguess(guess) {
  //Checks if the guess is Valid or not
  if (isNaN(guess)) {
    alert(`Please Enter a Valid Number`);
  } else if (guess < 1) {
    alert(`Please Enter a Higher Number`);
  } else if (guess > 100) {
    alert(`Please Enter a Smaller Number`);
  } else {
    // prevguess.push(guess);
    displayguess(guess);
    //as soon as we see a number we say increase our guess and clear the box for new number hence the displayguess is before the check guess
    checkguess(guess);
  }
}

function checkguess(guess) {
  //checks where my guess lies
  if (guess === randomnum) {
    displaymessage(`You Guessed the right Number`);
    endthisgame();
  } else if (numguess === 11) {
    displaymessage(`Game Over. The Number was ${randomnum}`);
    endthisgame();
  } else if (guess < randomnum) {
    displaymessage(`Your Guess is Lower`);
  } else if (guess > randomnum) {
    displaymessage(`Your Guess is Higher`);
  }
}

function displayguess(guess) {
  //first of all i need to empty the box for next input
  Input_num.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numguess++;
  remaining_guesses.innerHTML = `${11 - numguess}`;
}

function displaymessage(message) {
  lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}

function endthisgame() {
  Input_num.value = '';
  // we need to stop user from entering any more numbers
  Input_num.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id = "newgame">Start New Game</h2>';
  startover.appendChild(p);
  playGame = false;
  newgame();
}

function newgame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function (e) {
    randomnum = Math.floor(Math.random() * 100 + 1);
    numguess = 1;
    guessSlot.innerHTML = '';
    lowOrhigh.innerHTML = '';
    remaining_guesses.innerHTML = `${11 - numguess}`;
    Input_num.removeAttribute('disabled');
    startover.removeChild(p);
    playGame = true;
  });
}


```