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