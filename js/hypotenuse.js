"use strict";

const sides = document.querySelectorAll(".side-input");
const hypotenuse = document.querySelector(".hypotenuse");
const labelMessage = document.querySelector("#label-message");

hypotenuse.addEventListener("click", () => {

    if (sides[0].value !== "" && sides[1].value !== "") {
        console.log(sides[0].value);
        console.log(sides[1].value);
        const a = sides[0].value * sides[0].value;
        const b = sides[1].value * sides[1].value;
        const calculate = Math.sqrt(a + b);
        labelMessage.textContent = "The length of hypotenuse is "+calculate.toFixed(2);
    } 
    else 
    {
        labelMessage.textContent = "Please enter a positive number for each side";
    }

    });