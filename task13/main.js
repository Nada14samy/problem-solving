// 9-
let months = window.prompt('enter the month');

function daya(day , month){
    document.querySelector('h1').innerHTML = `Month : ${month}`;
    document.querySelector('h2').innerHTML = `Days : ${day}`;
}

function monthDays(month){
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        let day = 31;
        return daya(day , month);
    }else if(month == 4 || month == 6 || month == 9 || month == 11){
        let day = 30;
        return daya(day, month);
    }else if (month == 2) {
        let day = 28;
        return daya(day , month);
    }else{
        document.querySelector('h1').innerHTML = `Month : it's not from the months`;
    }
}
monthDays(months);
