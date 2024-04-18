let number = window.prompt('enter the number');

function check(num) {
    switch (true) {
        case num > 0:
            document.querySelector('h1').innerHTML = 'Positive';
            break;
        case num < 0 :
             document.querySelector('h1').innerHTML = 'negative';
             break;
        default:
            document.querySelector('h1').innerHTML = 'Zero';
            break;
    }
}
check(number);