'use strict';

const sides = document.querySelectorAll('.side-input');
const calculate = document.querySelector('.calculate');
const labelMessage = document.querySelector('#label-message');

calculate.addEventListener('click', () => {

    if (sides[0].value !== "" && sides[1].value !== "") {
        console.log(sides[0].value);
        console.log(sides[1].value);
        const base = sides[0].value
        const height = sides[1].value
        const calculate = (base * height) / 2
        labelMessage.textContent = "The Area of the triangle is "+calculate.toFixed(2);
    } 
    else 
    {
        labelMessage.textContent = "Please enter a positive number for each side";
    }
});