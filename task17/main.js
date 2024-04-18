let minNum = window.prompt('enter the first Number');
let maxNum = window.prompt('enter the second Number');

function maximum(num1 , num2) {
    switch (true) {
        case num1>num2:
            document.querySelector('h1').innerHTML = `Max Number : ${num1}`;
            document.querySelector('h2').innerHTML = `Min Number : ${num2}`;
            break;
        case num2>num1:
            document.querySelector('h1').innerHTML = `Max Number : ${num2}`;
            document.querySelector('h2').innerHTML = `Min Number : ${num1}`;
            break;
        default:
            document.querySelector('h1').innerHTML = `Numbers : equel`;
            break;
    }
}
maximum(+minNum , +maxNum);
