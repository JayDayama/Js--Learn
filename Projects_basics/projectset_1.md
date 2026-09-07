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