'use strict';

const inputs = document.querySelectorAll(".angle-input");
const isTriangle = document.getElementById("is-trianglr-btn");
const labelMessage = document.getElementById("label-message");

function calculateSumOfAngles(angle1, angle2, angle3)
{
    return angle1 + angle2 + angle3;
}

isTriangle.addEventListener("click", () => {

    let angleOne = Number(inputs[0].value);
    let angleTwo = Number(inputs[1].value);
    let angleThree = Number(inputs[2].value);
    let sumOfAngles = calculateSumOfAngles(angleOne, angleTwo, angleThree);

    if (sumOfAngles === 180)
    {
        labelMessage.innerHTML = "Yay, The angles form a triangle";
    }
    else
    {
        labelMessage.innerHTML = "OH Oh!, The angles don't form a triangle";
        
    }

});
