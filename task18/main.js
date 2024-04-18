let numBtn = window.prompt('enter the number');

function number(num) {
    let cul = +num/2;
    switch (true) {
        case cul == 0:
            document.querySelector('h1').innerHTML = 'Zero';
            break;
        case Number.isInteger(cul):
            document.querySelector('h1').innerHTML = 'even';
            break;
        default:
            document.querySelector('h1').innerHTML = 'ood';
            break;
    }
}
number(numBtn);
