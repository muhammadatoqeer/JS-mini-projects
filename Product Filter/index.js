let product = document.querySelectorAll('.product');
let men = document.querySelector('#Men');
let all = document.querySelector('#All');
let children = document.querySelector('#Child')
let senior = document.querySelector('#senior');
let women = document.querySelector('#Women');
let array = Array.from(product);

console.log(array);

all.addEventListener('click', function (e) {
    e.preventDefault();
    for (let index = 0; index < product.length; index++) {
        if (product[index].getAttribute('class').includes('product')) {
            console.log(true);
        } else {
            product[index].classList.add('hide')
        }
    } //Node List is iterable
    e.stopPropagation();

})

men.addEventListener('click', function (e) {
    e.preventDefault();
    for (let index = 0; index < product.length; index++) {
        if (product[index].getAttribute('class').includes('men')) {
            console.log(true);
        } else {
            product[index].classList.add('hide')
        }
    } //Node List is iterable
    e.stopPropagation();
})

women.addEventListener('click', function (e) {
    e.preventDefault();
    for (let index = 0; index < product.length; index++) {
        if (product[index].getAttribute('class').includes('women')) {
            console.log(true);
        } else {
            product[index].classList.add('hide')
        }
    } //Node List is iterable
    e.stopPropagation();

})

children.addEventListener('click', function (e) {
    e.preventDefault();
    for (let index = 0; index < product.length; index++) {
        if (product[index].getAttribute('class').includes('children')) {
            console.log(true);
        } else {
            product[index].classList.add('hide')
        }
    } //Node List is iterable
    e.stopPropagation();

})

senior.addEventListener('click', function (e) {
    e.preventDefault();
    for (let index = 0; index < product.length; index++) {
        if (product[index].getAttribute('class').includes('senior')) {
            console.log(true);
        } else {
            product[index].classList.add('hide')
        }
    } //Node List is iterable
    e.stopPropagation();

})

// const buttons = document.querySelectorAll('button');
// const products = document.querySelectorAll('.product')

// console.log(buttons);
// console.log(products);


