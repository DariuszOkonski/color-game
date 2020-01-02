let colors = generateRandomColor(6);

let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorcolorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');

colorcolorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener('click', function () {
    let clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct';
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = '#232323';
      this.style.visibility = 'hidden';
      messageDisplay.textContent = 'Try Again';

      console.log('false');
    }
  })
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
    squares[i].style.visibility = 'visible';
  }
}

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}