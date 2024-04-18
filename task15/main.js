// 9-
let months = window.prompt('enter the month');

function monthDays(month){
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 8:
        case 10:
        case 12:
            document.querySelector('h1').innerHTML = `Month : ${month}`;
            document.querySelector('h2').innerHTML = `Days : 31`;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.querySelector('h1').innerHTML = `Month : ${month}`;
            document.querySelector('h2').innerHTML = `Days : 30`;
            break;
        case 2:
            document.querySelector('h1').innerHTML = `Month : ${month}`;
            document.querySelector('h2').innerHTML = `Days : 28/29`;
            break;
        default:
            document.querySelector('h1').innerHTML = `Month : it's not from the months`;
            document.querySelector('h2').innerHTML = `Days : 0`;
            break;
    }
}
monthDays(+months);
