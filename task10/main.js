// 5-
let numInput = window.prompt('enter the number');

function number(num){
    for(let i=1 ; i <= num ; i++){
        if(Number.isInteger(i/2) == false){
            continue;
        }else{
            console.log(i);
        }
    }
}
number(numInput);