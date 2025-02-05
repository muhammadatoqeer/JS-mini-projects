//Hexcode generation and logic

let containerOne = document.getElementById('containerOne');
let newHexColor = document.getElementById('hex-create');
let hexColor = document.getElementById('hexColor');
let hex = '0123456789ABCDEF';
let random = null;
let color = '#'


newHexColor.onclick = (e) => {
    for (let i = 0; i < 6; i++) {
        random = Math.floor(Math.random() * 16)
        color += hex[random]
    }
    containerOne.style.backgroundColor = color;
    hexColor.innerHTML = color;
    color = '#';
}

//RGB color generation logic
let containerTwo = document.getElementById('containerTwo');
let newRGBColor = document.getElementById('rgb-btn');
let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let rgbHeading = document.getElementById('rgb-color-value')

let rgbColor = ''

newRGBColor.onclick = () => {
    rgbColor = `rgb(${red.value},${green.value},${blue.value})`;
    console.log(rgbColor)
    containerTwo.style.backgroundColor = `${rgbColor}`
    rgbHeading.innerHTML = `${rgbColor}`;
    rgbColor = '';
}
