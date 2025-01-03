const buttons = document.querySelectorAll('button');
const singleProduct = document.querySelectorAll('.product');
let attribute = null;
let dataAttribute = [];
const searchBtn = document.getElementById('search');
const searchBox = document.getElementById('searchBox');
const titles = (singleProduct)
const searchResults = document.getElementById('searchResults')

singleProduct.forEach(element => {
    attribute = element.getAttribute('data-filter');
    dataAttribute.push(attribute);
});

buttons.forEach(element => {
    element.onclick = function (e) {
        for (let i = 0; i < dataAttribute.length; i++) {
            if (dataAttribute[i].includes(element.innerHTML)) {
                singleProduct[i].classList.remove('hide')
            } else {
                singleProduct[i].classList.add('hide')
            }
        }
    }
});