// 7-
let num1 = window.prompt('enter the first number');
let num2 = window.prompt('enter the second number');

function power(number1 , number2){
    let cul = number1**number2;
    document.querySelector('h1').innerHTML = `${number1}^${number2} = ${cul} `;
}

power(num1 , num2);
