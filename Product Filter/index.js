let product = document.querySelectorAll('.product');
let men = document.querySelector('#men');
let all = document.querySelector('#all');
let children = document.querySelector('#children')
let senior = document.querySelector('#senior')
let women = document.querySelector('#women')
let array = Array.from(product);

console.log(array);

men.addEventListener('click', function () {
    for (let index = 0; index < product.length; index++) {
        if (product[index].getAttribute('class').includes('men')) {
            console.log(true);
        } else {
            product[index].classList.add('hide')
        }
    } //Node List is iterable

})

all.addEventListener('click', function () {
    for (let index = 0; index < product.length; index++) {
        if (product[index].getAttribute('class').includes('product')) {
            console.log(true);
        } else {
            product[index].classList.add('hide')
        }
    } //Node List is iterable

})

women.addEventListener('click', function () {
    for (let index = 0; index < product.length; index++) {
        if (product[index].getAttribute('class').includes('women')) {
            console.log(true);
        } else {
            product[index].classList.add('hide')
        }
    } //Node List is iterable

})

children.addEventListener('click', function () {
    for (let index = 0; index < product.length; index++) {
        if (product[index].getAttribute('class').includes('children')) {
            console.log(true);
        } else {
            product[index].classList.add('hide')
        }
    } //Node List is iterable

})

senior.addEventListener('click', function () {
    for (let index = 0; index < product.length; index++) {
        if (product[index].getAttribute('class').includes('senior')) {
            console.log(true);
        } else {
            product[index].classList.add('hide')
        }
    } //Node List is iterable

})



