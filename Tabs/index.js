const button1 = document.getElementById('button1');
const buttons2 = document.getElementById('button2');
const buttons3 = document.getElementById('button3');
const buttons4 = document.getElementById('button4');
const buttons5 = document.getElementById('button5');

const information = document.getElementById('information')

// button1.onclick = function (e) {
//     information.innerHTML = `${button1.innerHTML} was pressed`
// }

// buttons2.onclick = function (e) {
//     information.innerHTML = `${buttons2.innerHTML} was pressed`
// }
// buttons3.onclick = function (e) {
//     information.innerHTML = `${buttons3.innerHTML} was pressed`
// }

// buttons4.onclick = function (e) {
//     information.innerHTML = `${buttons4.innerHTML} was pressed`
// }

// buttons5.onclick = function (e) {
//     information.innerHTML = `${buttons5.innerHTML} was pressed`
// }

function clicked(arg) {
    let info = document.getElementById(arg)
    information.innerHTML = `${info.innerHTML} was pressed`
}

// buttons2.onclick = clicked('button2');
// buttons3.onclick = clicked('button3');
// buttons4.onclick = clicked('button4');
// buttons5.onclick = clicked('button5');