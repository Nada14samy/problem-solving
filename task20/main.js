let num1 = window.prompt('enter the first number');
let operator = window.prompt('enter + , - , * , /');
let num2 = window.prompt('enter the second number');

function add(number1 , number2) {
    return number1 + number2;
}
function sub(number1 , number2) {
    return number1 - number2;
}
function mul(number1 , number2) {
    return number1 * number2;
}
function divide(number1 , number2) {
    return number1/number2;
}

function total(oper) {
    switch (true) {
        case oper == "+":
            document.querySelector('h1').innerHTML = 
            `${+num1} + ${+num2} = ${add(+num1 , +num2)}`;
            break;
        case oper == '-':
            document.querySelector('h1').innerHTML = 
            `${+num1} - ${+num2} = ${sub(+num1 , +num2)}`;
            break;
        case oper == '*':
            document.querySelector('h1').innerHTML = 
            `${+num1} * ${+num2} = ${mul(+num1 , +num2)}`;
            break;
        case oper == '/':
            document.querySelector('h1').innerHTML = 
            `${+num1} / ${+num2} = ${divide(+num1 , +num2)}`;
            break;
        default:
            document.querySelector('h1').innerHTML = 
            `enter + , - , / , *`;
            break;
    }
}
total(operator);