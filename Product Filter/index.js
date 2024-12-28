let product = document.querySelectorAll('.product');


// for (let i = 0; i < product.length; i++) {
//     let classList = product[i].classList;
//     for (let j = 0; j < classList.length; j++) {
//         console.log(product[i].classList === 'men')
//     }
// }

let array = Array.from(product[0].classList);
// console.log(array)
// console.log(array.includes('men'));

let arrayTwo = [1, 2, 3, 4, 6];

arrayTwo.forEach((value, index, array) => {
    array[index] = value * 2;
})

console.log(arrayTwo);
console.log(arrayTwo);




