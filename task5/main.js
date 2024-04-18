// 5-
let num1 = window.prompt( 'Number one');
let num2 = window.prompt( 'Number two');
let num3 = window.prompt('Number three');

function number(number1 , number2 , number3) {
    let min = Math.min(+number1 , +number2 , +number3);
    let max = Math.max(+number1 , +number2 , +number3);
    document.querySelector('h1').innerHTML = `min element 
    ${min}`;
    document.querySelector('h2').innerHTML = `max element 
    ${max}`;
}

number(num1 , num2 , num3);
