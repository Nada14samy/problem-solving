// 6-
let numBtn = window.prompt('enter the number' );

function number(num) {
    let cul = +num/2;
    if (Number.isInteger(cul) == true) {
        document.querySelector('h1').innerHTML = 'even';
    }else if (Number.isInteger(cul) == false) {
        document.querySelector('h1').innerHTML = 'ood';
    }else{
        document.querySelector('h1').innerHTML = 'no number';
    }
}
number(numBtn);
