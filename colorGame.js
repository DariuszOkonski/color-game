let colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)'
];

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