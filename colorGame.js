let numSquares = 6;
let colors = generateRandomColor(numSquares);

let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorcolorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function () {
  numSquares = 3;
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');

  messageDisplay.textContent = '';
  h1.style.backgroundColor = "#232323";
  colors = generateRandomColor(numSquares);
  pickedColor = pickColor();
  colorcolorDisplay.textContent = pickedColor;

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }

});

hardBtn.addEventListener('click', function () {
  numSquares = 6;
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');

  messageDisplay.textContent = '';
  h1.style.backgroundColor = "#232323";
  colors = generateRandomColor(numSquares);
  pickedColor = pickColor();
  colorcolorDisplay.textContent = pickedColor;

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block';
  }

})

resetButton.addEventListener('click', function () {
  resetButton.textContent = 'New Colors';
  messageDisplay.textContent = '';
  colors = generateRandomColor(numSquares);
  pickedColor = pickColor();
  colorcolorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "#232323";

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.visibility = 'visible';
  }

})

colorcolorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener('click', function () {
    let clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct';
      h1.style.backgroundColor = clickedColor;
      changeColors(clickedColor);
      resetButton.textContent = 'Play Again';
    } else {
      this.style.backgroundColor = '#232323';
      this.style.visibility = 'hidden';
      messageDisplay.textContent = 'Try Again';

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