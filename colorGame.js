let colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)'
];

let squares = document.querySelectorAll('.square');
let pickedColor = colors[3];
let colorcolorDisplay = document.getElementById('colorDisplay');

colorcolorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener('click', function () {
    let clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      console.log(clickedColor, pickedColor)
      console.log('true')
    } else {
      console.log('false');
    }
  })
}